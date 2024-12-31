import React, { useState, useCallback, useEffect } from "react";
import {
  Download02Icon,
  Delete03Icon,
  Loading03Icon,
  CheckmarkCircle01Icon,
} from "hugeicons-react";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import { toast } from "sonner";
import { cn } from "@/hooks";
import { Button } from "./common/Button";
import { Progress } from "./common/Progress";
import { DownloadState, ResultsSectionProps } from "@/types";

export const ResultsSection = React.memo(
  ({
    outputs,
    logs,
    error,
    names,
    onClear,
    disabled = false,
    missingFiles,
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
                className="w-48 h-4"
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

    const getLogStatus = (log: string) => {
      if (log.startsWith("Success:")) return "success";
      if (log.startsWith("Missing:")) return "warning";
      return "error";
    };

    const getLogStyles = (status: "success" | "warning" | "error") => {
      switch (status) {
        case "success":
          return {
            badge:
              "bg-emerald-50 text-emerald-600 ring-emerald-600/20 dark:text-emerald-400 dark:bg-emerald-400/5",
            text: "text-emerald-600 dark:text-emerald-400",
          };
        case "warning":
          return {
            badge:
              "bg-amber-50 text-amber-600 ring-amber-600/20 dark:text-amber-400 dark:bg-amber-400/5",
            text: "text-amber-600 dark:text-amber-400",
          };
        default:
          return {
            badge:
              "bg-rose-50 text-rose-600 ring-rose-600/10 dark:text-rose-400 dark:bg-rose-400/5",
            text: "text-rose-600 dark:text-rose-400",
          };
      }
    };

    return (
      <>
        <div
          className={cn(
            "p-6 border rounded-4xl flex flex-col gap-2",
            "border-icu-300 bg-icu-100",
            "dark:border-icu-800/70 dark:bg-icu-1000/40",
            disabled && "opacity-50 pointer-events-none"
          )}
        >
          <h2 className="text-xl font-medium text-icu-800 dark:text-icu-600">
            Generated Components
          </h2>

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
              size={"lg"}
              className="h-fit py-4 gap-2 whitespace-nowrap"
              disabled={disabled}
            >
              Clear All <Delete03Icon className="size-5" />
            </Button>
            <Button
              onClick={handleDownloadAll}
              className={cn(
                "gap-2 !w-54 whitespace-nowrap",
                downloadState.status !== "idle" && "!px-4 !py-6"
              )}
              size={"lg"}
              disabled={disabled || downloadState.status !== "idle"}
            >
              {getButtonContent()}
            </Button>
          </div>
        </div>

        {missingFiles &&
          (missingFiles.stroke.length > 0 ||
            missingFiles.duotone.length > 0) && (
            <div
              className={cn(
                "p-6 border rounded-4xl flex flex-col gap-4",
                "border-icu-300 bg-icu-100",
                "dark:border-icu-800/70 dark:bg-icu-1000/40"
              )}
            >
              <label
                className={cn(
                  "pl-4 rounded-full uppercase text-sm tracking-widest font-bold text-center w-max leading-none",
                  "text-icu-700 border-icu-400",
                  "dark:text-icu-600 dark:border-icu-800"
                )}
              >
                Missing Files{" "}
                <kbd className="px-2 rounded-md py-1 dark:bg-icu-1000 dark:text-icu-500">
                  {missingFiles.stroke.length + missingFiles.duotone.length}
                </kbd>
              </label>
              <div
                className={cn(
                  "flex flex-col gap-2 p-4 rounded-3xl",
                  "bg-icu-200 dark:bg-icu-1000"
                )}
              >
                {missingFiles.stroke.length > 0 && (
                  <div className="mb-2">
                    <span className="dark:bg-icu-1000 dark:text-icu-500">
                      Line Icons
                    </span>
                    <div className="text-amber-600 dark:text-amber-400 ml-4">
                      {missingFiles.stroke.map((name) => (
                        <div className="leading-[1.2]" key={name}>
                          ├ {name}.svg
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {missingFiles.duotone.length > 0 && (
                  <div>
                    <span className="dark:bg-icu-1000 dark:text-icu-500">
                      Bulk Icons
                    </span>
                    <div className="text-amber-600 dark:text-amber-400 ml-4">
                      {missingFiles.duotone.map((name) => (
                        <div className="leading-[1.2]" key={name}>
                          ├ {name}.svg
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

        <div
          className={cn(
            "p-6 border rounded-4xl flex flex-col gap-4",
            "border-icu-300 bg-icu-100",
            "dark:border-icu-800/70 dark:bg-icu-1000/40"
          )}
        >
          <label
            className={cn(
              "pl-4 rounded-full uppercase text-sm tracking-widest font-bold text-center w-max leading-none",
              "text-icu-700 border-icu-400",
              "dark:text-icu-600 dark:border-icu-800"
            )}
          >
            Logs{" "}
            <kbd className="px-2 rounded-md py-1 dark:bg-icu-1000 dark:text-icu-500">
              {logs.length}
            </kbd>
          </label>
          <div
            className={cn(
              "flex flex-col gap-2 p-4 rounded-3xl",
              "bg-icu-200 dark:bg-icu-1000"
            )}
          >
            <div className="max-h-72 overflow-y-auto">
              {logs.map((log, index) => {
                const status = getLogStatus(log);
                const styles = getLogStyles(status);
                const logText = log.replace(/^(Success|Failed|Missing): /, "");

                return (
                  <div key={index} className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex justify-center rounded-full uppercase px-2 py-1 text-[11px] tracking-wider leading-none w-[5rem]",
                        styles.badge
                      )}
                    >
                      <div className="inline-flex items-center gap-1">
                        {status === "success"
                          ? "Success"
                          : status === "warning"
                          ? "Missing"
                          : "Failed"}
                      </div>
                    </span>
                    <span className={styles.text}>{logText}</span>
                  </div>
                );
              })}
            </div>
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
