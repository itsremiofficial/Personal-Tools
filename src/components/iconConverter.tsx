"use client";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Delete03Icon } from "hugeicons-react";
import { Button } from "./ui/button";
import { saveAs } from "file-saver";

const IconConverter = () => {
  const [iconNames, setIconNames] = useState<string[]>([]);
  const [strokeSvgs, setStrokeSvgs] = useState<string[]>([]);
  const [duotoneSvgs, setDuotoneSvgs] = useState<string[]>([]);
  const [outputs, setOutputs] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
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

  const handleDownloadAll = () => {
    outputs.forEach((output, index) => {
      const fileName = iconNames[index];
      handleDownload(output, fileName);
    });
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

  const handleRemoveAllFiles = () => {
    setStrokeFiles([]);
    setDuotoneFiles([]);
    setStrokeSvgs([]);
    setDuotoneSvgs([]);
    setIconNames([]);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Icon Component Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 scroll-container">
            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
            <div>
              <label
                htmlFor="strokeFiles"
                className="block text-sm font-medium mb-2"
              >
                Stroke SVG Files
              </label>
              <div
                {...getStrokeRootProps()}
                className="border-2 border-dashed border-gray-300 p-4 rounded-md cursor-pointer hover:border-gray-400 transition-colors duration-200"
              >
                <Input
                  {...getStrokeInputProps()}
                  id="strokeFiles"
                  className="hidden"
                />
                <p className="text-center text-gray-500">
                  Drag and drop files here, or click to select files
                </p>
                {strokeFiles.length > 0 && (
                  <ul className="mt-2">
                    {strokeFiles.map((file, index) => (
                      <li
                        key={`${file.name}-${index}`}
                        className="text-sm text-gray-600 flex justify-between items-center"
                      >
                        {file.name}
                        <Delete03Icon
                          className="ml-2 cursor-pointer text-red-500"
                          onClick={() => handleRemoveFile("stroke", index)}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="duotoneFiles"
                className="block text-sm font-medium mb-2"
              >
                Duotone SVG Files
              </label>
              <div
                {...getDuotoneRootProps()}
                className="border-2 border-dashed border-gray-300 p-4 rounded-md cursor-pointer hover:border-gray-400 transition-colors duration-200"
              >
                <Input
                  {...getDuotoneInputProps()}
                  id="duotoneFiles"
                  className="hidden"
                />
                <p className="text-center text-gray-500">
                  Drag and drop files here, or click to select files
                </p>
                {duotoneFiles.length > 0 && (
                  <ul className="mt-2">
                    {duotoneFiles.map((file, index) => (
                      <li
                        key={`${file.name}-${index}`}
                        className="text-sm text-gray-600 flex justify-between items-center"
                      >
                        {file.name}
                        <Delete03Icon
                          className="ml-2 cursor-pointer text-red-500"
                          onClick={() => handleRemoveFile("duotone", index)}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <Button
              onClick={handleRemoveAllFiles}
              className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white"
            >
              Remove All Files
            </Button>

            <Button
              onClick={generateComponents}
              disabled={iconNames.some((name) => !name)}
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white"
            >
              Generate Components
            </Button>

            {outputs.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium">
                    Generated Components
                  </label>
                  <Button
                    onClick={handleDownloadAll}
                    className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white"
                  >
                    Download All Components
                  </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {outputs.map((output, index) => (
                    <Card
                      key={`${iconNames[index]}-${index}`}
                      className="shadow-md"
                    >
                      <CardHeader>
                        <CardTitle>{iconNames[index]}.tsx</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            handleDownload(output, iconNames[index])
                          }
                          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white"
                        >
                          Download
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2">Logs</label>
              <div className="bg-slate-100 text-white p-4 rounded-md h-64 overflow-y-auto flex flex-col gap-1">
                {logs.map((log, index) => {
                  const isSuccess = log.startsWith("Success:");
                  const logText = log
                    .replace("Success: ", "")
                    .replace("Failed: ", "");
                  return (
                    <div
                      key={index}
                      className="text-sm flex items-center gap-2"
                    >
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset leading-none w-16 justify-center ${
                          isSuccess
                            ? "bg-green-50 text-green-600 ring-green-600/20"
                            : "bg-red-50 text-red-600 ring-red-600/10"
                        }`}
                      >
                        {isSuccess ? "Success" : "Failed"}
                      </span>
                      <span
                        className={
                          isSuccess ? "text-green-600" : "text-red-600"
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
        </CardContent>
      </Card>
    </div>
  );
};

export default IconConverter;
