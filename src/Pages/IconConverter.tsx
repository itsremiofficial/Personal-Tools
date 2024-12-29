"use client";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  AiBeautifyIcon,
  Cancel01Icon,
  CloudUploadIcon,
  Delete03Icon,
  Download02Icon,
} from "hugeicons-react";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import { cn } from "../lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
const IconConverter = () => {
  const [iconNames, setIconNames] = useState<string[]>([]);
  const [strokeSvgs, setStrokeSvgs] = useState<string[]>([]);
  const [duotoneSvgs, setDuotoneSvgs] = useState<string[]>([]);
  const [outputs, setOutputs] = useState<string[]>([]);
  const [strokeFiles, setStrokeFiles] = useState<File[]>([]);
  const [duotoneFiles, setDuotoneFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);

  const handleFileUpload = useCallback(
    (type: "stroke" | "duotone", files: FileList | null) => {
      if (!files) return;
      const fileContents: string[] = [];

      Array.from(files).forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          fileContents.push(e.target?.result as string);
          if (index === files.length - 1) {
            if (type === "stroke")
              setStrokeSvgs((prev) => [...prev, ...fileContents]);
            else setDuotoneSvgs((prev) => [...prev, ...fileContents]);
          }
        };
        reader.onerror = () => {
          setError(`Failed to read file: ${file.name}`);
          setLogs((prev) => [...prev, `Failed to read file: ${file.name}`]);
        };
        reader.readAsText(file);
      });

      const names = Array.from(files).map((file) =>
        file.name
          .replace(/-/g, " ")
          .replace(/\s+/g, " ")
          .replace(/\.[^/.]+$/, "")
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join("")
      );
      setIconNames((prev) => [...prev, ...names]);
    },
    []
  );

  const onDrop = useCallback(
    (acceptedFiles: File[], type: "stroke" | "duotone") => {
      handleFileUpload(type, acceptedFiles as unknown as FileList);
      if (type === "stroke") {
        setStrokeFiles((prev) => [...prev, ...acceptedFiles]);
      } else {
        setDuotoneFiles((prev) => [...prev, ...acceptedFiles]);
      }
    },
    [handleFileUpload]
  );

  const {
    getRootProps: getStrokeRootProps,
    getInputProps: getStrokeInputProps,
  } = useDropzone({
    onDrop: (acceptedFiles) => onDrop(acceptedFiles, "stroke"),
    accept: { "image/svg+xml": [".svg"] },
    onDropRejected: () => {
      setError("Invalid file type. Please upload SVG files.");
      setLogs((prev) => [
        ...prev,
        "Invalid file type. Please upload SVG files.",
      ]);
    },
  });

  const {
    getRootProps: getDuotoneRootProps,
    getInputProps: getDuotoneInputProps,
  } = useDropzone({
    onDrop: (acceptedFiles) => onDrop(acceptedFiles, "duotone"),
    accept: { "image/svg+xml": [".svg"] },
    onDropRejected: () => {
      setError("Invalid file type. Please upload SVG files.");
      setLogs((prev) => [
        ...prev,
        "Invalid file type. Please upload SVG files.",
      ]);
    },
  });

  const replaceAttributes = (data: string, isTwoTone = false) => {
    let updatedData = data
      .replace(/<path[^>]*>/g, (match) => {
        return match
          .replace(/stroke=["'][#a-zA-Z0-9]+["']/g, 'stroke="currentColor"')
          .replace(/fill=["'][#a-zA-Z0-9]+["']/g, 'fill="currentColor"');
      })
      .replace(
        /opacity=["'](.*?)["']/g,
        () => `opacity={duotone ? '0.5' : '1'}`
      )
      .replace(/stroke-width=["'](.*?)["']/g, "strokeWidth={width}")
      .replace(/fill-rule/g, "fillRule")
      .replace(/clip-rule/g, "clipRule")
      .replace(/stroke-linecap/g, "strokeLinecap")
      .replace(/stroke-linejoin/g, "strokeLinejoin")
      .replace(/stroke-miterlimit/g, "strokeMiterlimit")
      .replace(/stop-color/g, "stopColor")
      .replace(/stop-opacity/g, "stopOpacity")
      .replace(/stroke-dasharray/g, "strokeDasharray")
      .replace(/stroke-dashoffset/g, "strokeDashoffset");

    updatedData = updatedData.replace(/<svg/g, "<svg className={className}");

    return updatedData;
  };

  const generateComponents = useCallback(() => {
    setLogs([]);
    try {
      const newOutputs = iconNames.map((name, index) => {
        if (!name || !strokeSvgs[index] || !duotoneSvgs[index]) {
          return { name, success: false };
        }

        const componentName = `Icon${
          name.charAt(0).toUpperCase() + name.slice(1)
        }`;

        const strokeSvg = replaceAttributes(strokeSvgs[index], true);
        const duotoneSvg = replaceAttributes(duotoneSvgs[index]);

        const output = `import { FC } from 'react';

interface ${componentName}Props {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const ${componentName}: FC<${componentName}Props> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        ${strokeSvg}
      ) : (
        ${duotoneSvg}
      )}
    </>
  );
};

export default ${componentName};`;

        return { name, success: true, output };
      });

      const successfulOutputs = newOutputs
        .filter((result) => result.success)
        .map((result) => result.output as string);

      const failedOutputs = newOutputs
        .filter((result) => !result.success)
        .map((result) => result.name);

      const uniqueFailedOutputs = failedOutputs.filter(
        (name) =>
          !newOutputs.some((result) => result.success && result.name === name)
      );

      setOutputs(successfulOutputs);
      setLogs((prev) => [
        ...prev,
        ...successfulOutputs.map(
          (result, index) => `Success: ${newOutputs[index].name}.tsx`
        ),
        ...uniqueFailedOutputs.map((name) => `Failed: ${name}.tsx`),
      ]);
      setError(null);
    } catch (err) {
      setError("Failed to generate components. Please try again.");
      setLogs((prev) => [...prev, "Failed to generate components."]);
    }
  }, [iconNames, strokeSvgs, duotoneSvgs]);

  const handleDownload = (output: string, fileName: string) => {
    try {
      const blob = new Blob([output], { type: "text/plain;charset=utf-8" });
      saveAs(blob, `${fileName}.tsx`);
    } catch (error) {
      setError(`Failed to download file: ${fileName}.tsx`);
    }
  };

  const handleDownloadAll = async () => {
    const zip = new JSZip();
    outputs.forEach((output, index) => {
      const fileName = `${iconNames[index]}.tsx`;
      zip.file(fileName, output);
    });

    try {
      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, "generated-icons.zip");
    } catch (error) {
      setError("Failed to create zip file.");
    }
  };

  const handleRemoveFile = (type: "stroke" | "duotone", index: number) => {
    if (type === "stroke") {
      setStrokeFiles((prev) => prev.filter((_, i) => i !== index));
      setStrokeSvgs((prev) => prev.filter((_, i) => i !== index));
    } else {
      setDuotoneFiles((prev) => prev.filter((_, i) => i !== index));
      setDuotoneSvgs((prev) => prev.filter((_, i) => i !== index));
    }
    setIconNames((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRemoveAllStrokeFiles = () => {
    setStrokeFiles([]);
    setStrokeSvgs([]);
    setIconNames([]);
    setOutputs([]);
    setLogs([]);
  };

  const handleRemoveAllDuotoneFiles = () => {
    setDuotoneFiles([]);
    setDuotoneSvgs([]);
    setIconNames([]);
    setOutputs([]);
    setLogs([]);
  };

  return (
    <div className="relative flex !flex-col justify-center gap-6 p-4 ">
      <div
        className={cn(
          "p-6 border rounded-3xl flex flex-col gap-6 w-full",
          "border-icu-300 bg-icu-100",
          "dark:border-icu-800/70 dark:bg-icu-1000/40"
        )}
      >
        <div className="rounded-2xl flex flex-col gap-6  grow">
          <div
            {...getStrokeRootProps()}
            className={cn(
              "border-2 border-dashed p-6 pb-10 rounded-3xl cursor-pointer transition-colors duration-300 group/input",
              "border-icu-300/70 hover:border-icu-400/70",
              "dark:border-icu-800/40 dark:hover:border-icu-800/50",
              "hover:bg-icu-300/40",
              "dark:hover:bg-icu-800/30"
            )}
          >
            <Input
              {...getStrokeInputProps()}
              id="strokeFiles"
              className="hidden"
            />
            <label
              htmlFor="duotoneFiles"
              className={cn(
                "px-3 py-1 rounded-full text-sm border tracking-widest",
                "border-icu-600 group-hover/input:border-icu-900",
                "dark:border-icu-800/30 group-hover/input:dark:border-icu-800",
                "text-icu-800 group-hover/input:!text-icu-900",
                "dark:!text-icu-600 group-hover/input:dark:!text-icu-400",
                "transition-colors duration-300"
              )}
            >
              Line SVGs
            </label>
            <p
              className={cn(
                "size-full flex gap-2 flex-col items-center justify-center text-center",
                "text-icu-700 group-hover/input:text-icu-900",
                "dark:text-icu-700 dark:group-hover/input:text-icu-500",
                "transition-colors duration-300"
              )}
            >
              <CloudUploadIcon className="size-14" />
              Drag and drop files here, or click to select files
            </p>
          </div>

          {strokeFiles.length > 0 && (
            <div className="flex items-center gap-4">
              <div
                className={cn(
                  "grow border border-dashed mt-2 flex py-4 px-4 rounded-2xl gap-6 !overflow-y-auto !overflow-x-auto relative transition-colors duration-300",
                  "border-icu-300/70",
                  "dark:border-icu-800/40"
                )}
              >
                {strokeFiles.map((file, index) => (
                  <div
                    key={`${file.name}-${index}`}
                    className={cn(
                      "relative py-4 px-8 rounded-2xl text-sm flex justify-between items-center whitespace-nowrap",
                      "bg-icu-300/70 dark:!bg-icu-800/50",
                      "text-icu-900 dark:!text-icu-500"
                    )}
                  >
                    {file.name}
                    <div
                      onClick={() => handleRemoveFile("stroke", index)}
                      className={cn(
                        "absolute backdrop-blur-3xl -right-1 -top-1 rounded-full p-1.5 cursor-pointer transition-colors duration-300",
                        "bg-icu-400/50 hover:bg-icu-400/80",
                        "dark:bg-icu-1100/30 dark:hover:bg-icu-1100/40",
                        "text-red-300 hover:text-red-400",
                        "dark:text-red-400/80 dark:hover:text-red-400"
                      )}
                    >
                      <Cancel01Icon className="size-3.5 stroke-3" />
                    </div>
                  </div>
                ))}
              </div>
              <Button
                className="h-fit py-4 gap-2 whitespace-nowrap"
                variant="danger"
                onClick={handleRemoveAllStrokeFiles}
              >
                Clear All
                <Delete03Icon className="size-5" />
              </Button>
            </div>
          )}
        </div>
      </div>

      <div
        className={cn(
          "p-6 border rounded-3xl flex flex-col gap-6 grow",
          "border-icu-300 bg-icu-100",
          "dark:border-icu-800/70 dark:bg-icu-1000/40"
        )}
      >
        <div className="rounded-2xl flex flex-col gap-6 grow">
          <div
            {...getDuotoneRootProps()}
            className={cn(
              "border-2 border-dashed p-6 pb-10 rounded-3xl cursor-pointer transition-colors duration-300 group/input",
              "border-icu-300/70 hover:border-icu-400/70",
              "dark:border-icu-800/40 dark:hover:border-icu-800/50",
              "hover:bg-icu-300/40",
              "dark:hover:bg-icu-800/30"
            )}
          >
            <Input
              {...getDuotoneInputProps()}
              id="strokeFiles"
              className="hidden"
            />
            <label
              htmlFor="duotoneFiles"
              className={cn(
                "px-3 py-1 rounded-full text-sm border tracking-widest",
                "border-icu-600 group-hover/input:border-icu-900",
                "dark:border-icu-800/30 group-hover/input:dark:border-icu-800",
                "text-icu-800 group-hover/input:!text-icu-900",
                "dark:!text-icu-600 group-hover/input:dark:!text-icu-400",
                "transition-colors duration-300"
              )}
            >
              Bulk SVGs
            </label>
            <p
              className={cn(
                "size-full flex gap-2 flex-col items-center justify-center text-center",
                "text-icu-700 group-hover/input:text-icu-900",
                "dark:text-icu-700 dark:group-hover/input:text-icu-500",
                "transition-colors duration-300"
              )}
            >
              <CloudUploadIcon className="size-14" />
              Drag and drop files here, or click to select files
            </p>
          </div>

          {duotoneFiles.length > 0 && (
            <div className="flex items-center gap-4">
              <div
                className={cn(
                  "grow border border-dashed mt-2 flex py-4 px-4 rounded-2xl gap-6 !overflow-y-auto !overflow-x-auto relative transition-colors duration-300",
                  "border-icu-300/70",
                  "dark:border-icu-800/40"
                )}
              >
                {duotoneFiles.map((file, index) => (
                  <div
                    key={`${file.name}-${index}`}
                    className={cn(
                      "relative py-4 px-8 rounded-2xl text-sm flex justify-between items-center whitespace-nowrap",
                      "bg-icu-300/70 dark:!bg-icu-800/50",
                      "text-icu-900 dark:!text-icu-500"
                    )}
                  >
                    {file.name}
                    <div
                      onClick={() => handleRemoveFile("duotone", index)}
                      className={cn(
                        "absolute backdrop-blur-3xl -right-1 -top-1 rounded-full p-1.5 cursor-pointer transition-colors duration-300",
                        "bg-icu-400/50 hover:bg-icu-400/80",
                        "dark:bg-icu-1100/30 dark:hover:bg-icu-1100/40",
                        "text-red-300 hover:text-red-400",
                        "dark:text-red-400/80 dark:hover:text-red-400"
                      )}
                    >
                      <Cancel01Icon className="size-3.5 stroke-3" />
                    </div>
                  </div>
                ))}
              </div>
              <Button
                className="h-fit py-4 gap-2 whitespace-nowrap"
                variant="danger"
                onClick={handleRemoveAllDuotoneFiles}
              >
                Clear All
                <Delete03Icon className="size-5" />
              </Button>
            </div>
          )}
        </div>
      </div>

      <Button
        onClick={generateComponents}
        disabled={strokeFiles.length === 0 || duotoneFiles.length === 0}
        size={"lg"}
        className="w-max"
      >
        Generate <AiBeautifyIcon className="size-5 ml-1" />
      </Button>

      {/* GENERATED COMPONENTS */}
      <div
        className={cn(
          "p-6 border rounded-3xl flex flex-col gap-6",
          "border-icu-300 bg-icu-100",
          "dark:border-icu-800/70 dark:bg-icu-1000/40",
          `opacity-0 translate-y-10 transition-all duration-700 ease-fluid ${
            logs.length > 0 && "opacity-100 !translate-y-0"
          }`
        )}
      >
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xl font-medium  text-icu-800 dark:text-icu-600">
              Generated Components
            </label>
            <Button
              onClick={handleDownloadAll}
              className="w-full sm:w-auto gap-2"
              variant={"neutral"}
            >
              Download All <Download02Icon className="size-5 !stroke-2" />
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <div
              className={cn(
                "grow border border-dashed mt-2 flex py-4 px-4 rounded-2xl gap-6 !overflow-y-auto !overflow-x-auto relative transition-colors duration-300",
                "border-icu-300/70",
                "dark:border-icu-800/40"
              )}
            >
              {outputs.map((output, index) => (
                <Button
                  className={cn(
                    "h-fit py-4 gap-2 whitespace-nowrap",
                    "!bg-icu-300 hover:!bg-icu-400",
                    "dark:!bg-icu-800/50 dark:hover:!bg-icu-800/80",
                    "!text-icu-700 hover:!text-icu-1000",
                    "dark:!text-icu-600/80 dark:hover:!text-icu-300"
                  )}
                  variant={"danger"}
                  onClick={() => handleDownload(output, iconNames[index])}
                >
                  {iconNames[index]}.tsx
                  <Download02Icon className="size-5" />
                </Button>
              ))}
            </div>

            <Button
              className="h-fit py-4 gap-2 whitespace-nowrap"
              variant={"danger"}
              onClick={() => {
                setOutputs([]);
                setLogs([]);
              }}
            >
              Clear All
              <Delete03Icon className="size-5" />
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`opacity-0 translate-y-10 transition-all duration-700 ease-fluid ${
          logs.length > 0 && "opacity-100 !translate-y-0"
        }`}
      >
        <div className="flex flex-col gap-2 min-w-64">
          <div
            className={cn(
              "p-6 border rounded-3xl flex flex-col gap-6",
              "border-icu-300 bg-icu-100",
              "dark:border-icu-800/70 dark:bg-icu-1000/40"
            )}
          >
            <label
              className={cn(
                "rounded-full uppercase text-sm tracking-widest font-bold text-center w-max leading-none",
                "text-icu-700 border-icu-400",
                "dark:text-icu-600 dark:border-icu-800"
              )}
            >
              Logs
            </label>
            <div className=" bg-icu-200 dark:bg-icu-1000 p-4 rounded-3xl">
              <div
                className={cn(
                  " !overflow-y-auto !overflow-x-auto flex flex-col gap-2 h-64"
                )}
              >
                {logs.map((log, index) => {
                  const isSuccess = log.startsWith("Success:");
                  const logText = log
                    .replace("Success: ", "")
                    .replace("Failed: ", "");
                  return (
                    <div
                      key={index}
                      className="text-sm flex items-center gap-4"
                    >
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-1 text-xs tracking-wider leading-none w-[4.3rem] justify-center ${
                          isSuccess
                            ? "bg-green-50 text-green-600 ring-green-600/20 dark:text-green-400 dark:bg-green-400/5 dark:ring-green-400/60"
                            : "bg-red-50 text-red-600 ring-red-600/10 dark:text-red-400 dark:bg-red-400/5 dark:ring-red-400/60"
                        }`}
                      >
                        {isSuccess ? "Success" : "Failed"}
                      </span>
                      <span
                        className={
                          isSuccess
                            ? "text-green-600 dark:text-green-400/60"
                            : "text-red-600 dark:text-red-400/60"
                        }
                      >
                        {logText}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconConverter;
