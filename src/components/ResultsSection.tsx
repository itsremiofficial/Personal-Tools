import React, { useState, useCallback, useEffect } from "react";
import { Button } from "./ui/button";
import {
  Download02Icon,
  Delete03Icon,
  Loading03Icon,
  CheckmarkCircle01Icon,
} from "hugeicons-react";
import { cn } from "../hooks/formatSvgCode.ts";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import { toast } from "sonner";
import { Progress } from "./ui/progress"; // Add Progress import

interface ResultsSectionProps {
  outputs: string[];
  logs: string[];
  error: string | null;
  names: string[];
  onClear: () => void;
  disabled?: boolean; // Add disabled prop
}

interface DownloadState {
  status: "idle" | "zipping" | "downloading" | "complete";
  progress: number;
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
    const [downloadState, setDownloadState] = useState<DownloadState>({
      status: "idle",
      progress: 0,
    });

    const handleDownload = async (output: string, fileName: string) => {
      if (disabled) return;
      const blob = new Blob([output], { type: "text/plain;charset=utf-8" });
      saveAs(blob, `${fileName}.tsx`);
    };

    const handleDownloadAll = useCallback(async () => {
      if (disabled) return;

      // Start zipping
      setDownloadState({ status: "zipping", progress: 0 });
      const zip = new JSZip();

      // Add files with progress
      outputs.forEach((output, index) => {
        zip.file(`${names[index]}.tsx`, output);
        setDownloadState((prev) => ({
          status: "zipping",
          progress: Math.min(((index + 1) / outputs.length) * 100, 10),
        }));
      });

      try {
        // Generate zip with progress
        const content = await zip.generateAsync(
          {
            type: "blob",
            compression: "DEFLATE",
          },
          (metadata) => {
            setDownloadState({
              status: "downloading",
              progress: metadata.percent,
            });
          }
        );

        // Save file
        const downloadPath = await saveAs(content, "generated-icons.zip");
        setDownloadState({ status: "complete", progress: 100 });

        // Reset after delay
        setTimeout(() => {
          setDownloadState({ status: "idle", progress: 0 });
        }, 3000);
      } catch (error) {
        setDownloadState({ status: "idle", progress: 0 });
        toast.error("Failed to create zip file");
      }
    }, [outputs, names, disabled]);

    const getButtonContent = () => {
      switch (downloadState.status) {
        case "zipping":
          return (
            <>
              <Loading03Icon className="size-5 animate-spin" />
              Zipping... {Math.round(downloadState.progress)}%
            </>
          );
        case "downloading":
          return (
            <>
              {/* <Loading03Icon className="size-5 animate-spin" /> */}
              <Progress
                value={Math.round(downloadState.progress)}
                className="w-full h-4"
              />{" "}
              {Math.round(downloadState.progress)}%
            </>
          );
        case "complete":
          return (
            <>
              Completed <CheckmarkCircle01Icon />{" "}
            </>
          );
        default:
          return (
            <>
              Download All <Download02Icon className="size-5 !stroke-2" />
            </>
          );
      }
    };

    return (
      <>
        <div
          className={cn(
            "p-6 border rounded-4xl flex flex-col gap-6",
            "border-icu-300 bg-icu-100",
            "dark:border-icu-800/70 dark:bg-icu-1000/40",
            disabled && "opacity-50 pointer-events-none"
          )}
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-medium text-icu-800 dark:text-icu-600">
              Generated Components
            </h2>
            <div className="flex flex-col gap-2">
              <Button
                onClick={handleDownloadAll}
                className={cn(
                  "gap-2 w-54",
                  downloadState.status !== "idle" && "!px-4 !py-6"
                )}
                size={"lg"}
                disabled={disabled || downloadState.status !== "idle"}
              >
                {getButtonContent()}
              </Button>
            </div>
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
            "p-6 border rounded-4xl flex flex-col gap-4",
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
              "flex flex-col gap-2 p-4 rounded-3xl h-72 overflow-y-auto",
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
