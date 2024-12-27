"use client";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import {
  AiBeautifyIcon,
  Cancel01Icon,
  CloudUploadIcon,
  Delete03Icon,
  Download02Icon,
  Download04Icon,
} from "hugeicons-react";
import { Button } from "./ui/button";
import { saveAs } from "file-saver";
import { cn } from "../lib/utils";
import JSZip from "jszip";

const IconConverter = () => {
  const [iconNames, setIconNames] = useState<string[]>([]);
  const [strokeSvgs, setStrokeSvgs] = useState<string[]>([]);
  const [duotoneSvgs, setDuotoneSvgs] = useState<string[]>([]);
  const [outputs, setOutputs] = useState<string[]>([]);
  const [_copied, setCopied] = useState(false);
  const [strokeFiles, setStrokeFiles] = useState<File[]>([]);
  const [duotoneFiles, setDuotoneFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);

  const handleFileUpload = (
    type: "stroke" | "duotone",
    files: FileList | null
  ) => {
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
  };

  const onDrop = useCallback(
    (acceptedFiles: File[], type: "stroke" | "duotone") => {
      handleFileUpload(type, acceptedFiles as unknown as FileList);
      if (type === "stroke") {
        setStrokeFiles((prev) => [...prev, ...acceptedFiles]);
      } else {
        setDuotoneFiles((prev) => [...prev, ...acceptedFiles]);
      }
    },
    []
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
                ${strokeSvgs[index]
                  .replace(/stroke="#\[A-Za-z0-9]+"/g, 'stroke="currentColor"')
                  .replace(/fill="#\[A-Za-z0-9]+"/g, 'fill="currentColor"')
                  .replace(/stroke-width="[0-9.]+"/g, "strokeWidth={width}")
                  .replace(
                    /opacity="[0-9.]+"/g,
                    "opacity={duotone ? '0.5':'1'}"
                  )
                  .replace(/stroke-linecap/g, "strokeLinecap")
                  .replace(/stroke-linejoin/g, "strokeLinejoin")
                  .replace(/class=/g, "className=")
                  .replace(/<svg/g, "<svg className={className}")} 
            ) : (
                ${duotoneSvgs[index]
                  .replace(/stroke="#\[A-Za-z0-9]+"/g, 'stroke="currentColor"')
                  .replace(/fill="#\[A-Za-z0-9]+"/g, 'fill="currentColor"')
                  .replace(/class=/g, "className=")
                  .replace(/<svg/g, "<svg className={className}")
                  .replace(
                    /opacity="[0-9.]+"/g,
                    "opacity={duotone ? '0.5':'1'}"
                  )}
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

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(outputs.join("\n\n"));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      setError("Failed to copy code to clipboard.");
    }
  }, [outputs]);

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
  };
  const handleRemoveAllDuotoneFiles = () => {
    setDuotoneFiles([]);
    setDuotoneSvgs([]);
    setIconNames([]);
  };

  return (
    <div className="p-4 relative flex justify-center gap-6 mx-auto">
      <Card className="shadow-lg bg-icu-100 w-full max-w-4xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl font-semibold text-icu-800 dark:text-icu-100">
            Icon Component Generator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 scroll-container relative">
            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
            <div>
              <div
                {...getStrokeRootProps()}
                className={cn(
                  "border-2 border-dashed p-6 pb-10 rounded-3xl cursor-pointer transition-colors duration-300",
                  "border-icu-300/70 hover:border-icu-400/70",
                  "dark:border-icu-700/40 dark:hover:border-icu-700/50",
                  "hover:bg-icu-300/40",
                  "dark:hover:bg-icu-700/40"
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
                    "px-3 py-1 rounded-lg text-sm font-medium",
                    "bg-icu-400 dark:bg-icu-900/30",
                    "text-icu-800 dark:!text-icu-400"
                  )}
                >
                  Line SVGs
                </label>
                <p
                  className={cn(
                    "size-full flex gap-2 flex-col items-center justify-center text-center transition-colors duration-300",
                    "text-icu-600 hover:text-icu-700",
                    "dark:text-icu-600 dark:hover:text-icu-500"
                  )}
                >
                  <CloudUploadIcon className="size-14" />
                  Drag and drop files here, or click to select files
                </p>
              </div>
              {strokeFiles.length > 0 && (
                <div className="flex gap-4 items-center justify-between">
                  <div
                    className={cn(
                      "grow mt-2 flex py-4 px-4 overflow-x-auto rounded-2xl gap-6 perfect-scrollbar relative transition-colors duration-300",
                      "bg-icu-200/30 dark:bg-icu-900/40"
                    )}
                  >
                    {strokeFiles.map((file, index) => (
                      <div
                        key={`${file.name}-${index}`}
                        className={cn(
                          "relative py-4 px-8 rounded-2xl text-sm flex justify-between items-center whitespace-nowrap",
                          "bg-icu-300/70 dark:bg-icu-800",
                          "text-icu-900 dark:text-icu-400"
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
                    variant={"danger"}
                    onClick={() => handleRemoveAllStrokeFiles()}
                  >
                    Clear All
                    <Delete03Icon className="size-5" />
                  </Button>
                </div>
              )}
            </div>

            <div>
              <div
                {...getDuotoneRootProps()}
                className={cn(
                  "border-2 border-dashed p-6 pb-10 rounded-3xl cursor-pointer transition-colors duration-300",
                  "border-icu-300/70 hover:border-icu-400/70",
                  "dark:border-icu-700/40 dark:hover:border-icu-700/50",
                  "hover:bg-icu-300/40",
                  "dark:hover:bg-icu-700/40"
                )}
              >
                <Input
                  {...getDuotoneInputProps()}
                  id="duotoneFiles"
                  className="hidden"
                />
                <label
                  htmlFor="duotoneFiles"
                  className={cn(
                    "px-3 py-1 rounded-lg text-sm font-medium",
                    "bg-icu-400 dark:bg-icu-900/30",
                    "text-icu-800 dark:!text-icu-400"
                  )}
                >
                  Bulk SVGs
                </label>
                <p
                  className={cn(
                    "size-full flex gap-2 flex-col items-center justify-center text-center transition-colors duration-300",
                    "text-icu-600 hover:text-icu-700",
                    "dark:text-icu-600 dark:hover:text-icu-500"
                  )}
                >
                  <CloudUploadIcon className="size-14" />
                  Drag and drop files here, or click to select files
                </p>
              </div>

              {duotoneFiles.length > 0 && (
                <div className="flex gap-4 items-center justify-between">
                  <div
                    className={cn(
                      "grow mt-2 flex py-4 px-4 overflow-x-auto rounded-2xl gap-6 perfect-scrollbar relative transition-colors duration-300",
                      "bg-icu-200/30 dark:bg-icu-900/40"
                    )}
                  >
                    {duotoneFiles.map((file, index) => (
                      <div
                        key={`${file.name}-${index}`}
                        className={cn(
                          "relative py-4 px-8 rounded-2xl text-sm flex justify-between items-center whitespace-nowrap",
                          "bg-icu-300/70 dark:bg-icu-800",
                          "text-icu-900 dark:text-icu-400"
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
                    variant={"danger"}
                    onClick={() => handleRemoveAllDuotoneFiles()}
                  >
                    Clear All
                    <Delete03Icon className="size-5" />
                  </Button>
                </div>
              )}
            </div>

            <Button
              onClick={generateComponents}
              disabled={strokeFiles.length === 0 || duotoneFiles.length === 0}
              className="w-full sm:w-auto"
            >
              Generate <AiBeautifyIcon className="size-5 ml-1" />
            </Button>

            {outputs.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xl font-semibold  text-icu-800 dark:text-icu-100">
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
                <div className="flex gap-4 mt-4">
                  {outputs.map((output, index) => (
                    <Card
                      key={`${iconNames[index]}-${index}`}
                      className="bg-icu-200 dark:bg-icu-900/40"
                    >
                      <CardHeader className="flex-row gap-4 py-3 px-2 items-center justify-between">
                        <CardTitle className="pl-3 pr-3 text-icu-900 dark:text-icu-500">
                          {iconNames[index]}.tsx
                        </CardTitle>
                        <Button
                          size="icon"
                          variant={"neutral"}
                          onClick={() =>
                            handleDownload(output, iconNames[index])
                          }
                        >
                          <Download02Icon />
                        </Button>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {logs.length > 0 && (
        <div className="">
          <div className="flex flex-col gap-4 min-w-64">
            <label
              className={cn(
                "w-full py-2 px-4 rounded-xl text-center shadow-md",
                "text-icu-800 bg-icu-100",
                "dark:text-icu-100 dark:bg-icu-800"
              )}
            >
              Logs
            </label>
            <div
              className={cn(
                "py-4 px-2 rounded-2xl h-64 overflow-y-auto flex flex-col gap-1 shadow-lg",
                "bg-icu-100",
                "dark:bg-icu-800"
              )}
            >
              {logs.map((log, index) => {
                const isSuccess = log.startsWith("Success:");
                const logText = log
                  .replace("Success: ", "")
                  .replace("Failed: ", "");
                return (
                  <div key={index} className="text-sm flex items-center gap-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs tracking-wider ring-1 ring-inset leading-none w-[4.3rem] justify-center ${
                        isSuccess
                          ? "bg-green-50 text-green-500 ring-green-600/20 dark:text-green-500 dark:bg-green-400/5 dark:ring-green-500/60"
                          : "bg-red-50 text-red-500 ring-red-600/10 dark:text-red-400 dark:bg-red-400/5 dark:ring-red-400/60"
                      }`}
                    >
                      {isSuccess ? "Success" : "Failed"}
                    </span>
                    <span
                      className={
                        isSuccess
                          ? "text-green-500 dark:text-green-400"
                          : "text-red-500 dark:text-red-400"
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
      )}
    </div>
  );
};

export default IconConverter;
