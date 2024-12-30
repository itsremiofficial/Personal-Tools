import React from "react";
import { Button } from "./ui/button";
import { Download02Icon, Delete03Icon } from "hugeicons-react";
import { cn } from "../hooks/formatSvgCode.ts";
import { saveAs } from "file-saver";
import JSZip from "jszip";

interface ResultsSectionProps {
  outputs: string[];
  logs: string[];
  error: string | null;
  names: string[];
  onClear: () => void;
  disabled?: boolean; // Add disabled prop
}

export const ResultsSection = React.memo(
  ({
    outputs,
    logs,
    error,
    names,
    onClear,
    disabled = false,
  }: ResultsSectionProps) => {
    const handleDownload = async (output: string, fileName: string) => {
      if (disabled) return;
      const blob = new Blob([output], { type: "text/plain;charset=utf-8" });
      saveAs(blob, `${fileName}.tsx`);
    };

    const handleDownloadAll = async () => {
      if (disabled) return;
      const zip = new JSZip();
      outputs.forEach((output, index) => {
        zip.file(`${names[index]}.tsx`, output);
      });
      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, "generated-icons.zip");
    };

    return (
      <>
        <div
          className={cn(
            "p-6 border rounded-3xl flex flex-col gap-6",
            "border-icu-300 bg-icu-100",
            "dark:border-icu-800/70 dark:bg-icu-1000/40",
            disabled && "opacity-50 pointer-events-none"
          )}
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-medium text-icu-800 dark:text-icu-600">
              Generated Components
            </h2>
            <Button
              onClick={handleDownloadAll}
              variant="neutral"
              className="gap-2"
              disabled={disabled}
            >
              Download All <Download02Icon className="size-5 !stroke-2" />
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <div
              className={cn(
                "grow border border-dashed mt-2 flex py-4 px-4 rounded-2xl gap-6 overflow-auto",
                "border-icu-300/70 dark:border-icu-800/40"
              )}
            >
              {outputs.map((output, index) => (
                <Button
                  key={index}
                  onClick={() => handleDownload(output, names[index])}
                  variant="default"
                  className="gap-2 whitespace-nowrap"
                  disabled={disabled}
                >
                  {names[index]}.tsx
                  <Download02Icon className="size-5" />
                </Button>
              ))}
            </div>
            <Button
              onClick={onClear}
              variant="danger"
              className="h-fit py-4 gap-2 whitespace-nowrap"
              disabled={disabled}
            >
              Clear All <Delete03Icon className="size-5" />
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "p-6 border rounded-3xl flex flex-col gap-4",
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
          <div
            className={cn(
              "flex flex-col gap-2 p-4 rounded-3xl ",
              "bg-icu-200 dark:bg-icu-1000"
            )}
          >
            {logs.map((log, index) => {
              const isSuccess = log.startsWith("Success:");
              const logText = log.replace(/^(Success|Failed): /, "");
              return (
                <div key={index} className="flex items-center gap-3">
                  <span
                    className={cn(
                      "flex justify-center rounded-full uppercase px-2 py-1 text-[11px] tracking-wider leading-none w-[5rem]",
                      isSuccess
                        ? "bg-emerald-50 text-emerald-600 ring-emerald-600/20 dark:text-emerald-400 dark:bg-emerald-400/5"
                        : "bg-rose-50 text-rose-600 ring-rose-600/10 dark:text-rose-400 dark:bg-rose-400/5"
                    )}
                  >
                    <div className="inline-flex items-center gap-1">
                      {isSuccess ? <>Success</> : <>Failed</>}
                    </div>
                  </span>
                  <span
                    className={
                      isSuccess
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-rose-600 dark:text-rose-400"
                    }
                  >
                    {logText}
                  </span>
                </div>
              );
            })}
          </div>

          {error && (
            <div className="text-rose-500 dark:text-rose-400 ml-5">{error}</div>
          )}
        </div>
      </>
    );
  }
);

ResultsSection.displayName = "ResultsSection";
