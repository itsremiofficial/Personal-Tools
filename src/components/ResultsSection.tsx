import React, { useState, useCallback } from "react";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import { toast } from "sonner";
import { cn } from "@/hooks";
import { Button } from "./common/Button";
import { Progress } from "./common/Progress";
import {
  IconCheck,
  IconDownloadMinimalistic,
  IconTrashBinMinimalistic,
} from "./icons/version01";
import IconLoading from "./icons/version01/Loading";

const MissingFilesSection = ({
  missingFiles,
}: {
  missingFiles: ResultsSectionProps["missingFiles"];
}) => {
  const renderMissingFiles = (files: string[], type: string) => {
    if (files.length === 0) return null;

    return (
      <div className="mb-6">
        <div className="text-base font-medium dark:text-icu-400 mb-3">
          Missing in {type}:
        </div>
        <div className="space-y-2">
          {files.map((name) => (
            <div key={name} className="text-amber-600 dark:text-amber-400 pl-4">
              - {name}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const totalMissing =
    missingFiles.lineDuotone.length +
    missingFiles.boldDuotone.length +
    missingFiles.bold.length;

  if (totalMissing === 0) return null;

  return (
    <div
      className={cn(
        "p-6 border rounded-4xl flex flex-col",
        "border-icu-300 bg-icu-100",
        "dark:border-icu-800/70 dark:bg-icu-1000/40"
      )}
    >
      <div className="flex items-center gap-2 mb-8">
        <h3 className="text-lg font-medium">Missing Files</h3>
        <span className="text-icu-500">({totalMissing})</span>
      </div>

      {renderMissingFiles(missingFiles.lineDuotone, "Line Duotone Svgs")}
      {renderMissingFiles(missingFiles.boldDuotone, "Bold Duotone Svgs")}
      {renderMissingFiles(missingFiles.bold, "Bold Svgs")}
    </div>
  );
};

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
              <IconLoading className="size-5 animate-spin" duotone={false} />
              Zipping... {Math.round(downloadState.progress)}%
            </>
          );
        case "downloading":
          return (
            <>
              <Progress
                root="w-full h-4 bg-white/20"
                indicator="bg-icu-100"
                value={Math.round(downloadState.progress)}
              />
              {Math.round(downloadState.progress)}%
            </>
          );
        case "complete":
          return (
            <>
              Completed <IconCheck duotone={false} />
            </>
          );
        default:
          return (
            <>
              Download All{" "}
              <IconDownloadMinimalistic
                className="size-5 !stroke-2"
                duotone={false}
              />
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

    // Update log display text for each file type
    const getFileTypeLabel = (log: string): string => {
      if (log.includes("(Line Duotone Icon)")) return "Line Duotone";
      if (log.includes("(Bold Duotone Icon)")) return "Bold Duotone";
      if (log.includes("(Bold Icon)")) return "Bold";
      return "";
    };

    const getStatusBadge = (status: string) => {
      const styles = getLogStyles(status as "success" | "warning" | "error");
      return (
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
      );
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
          <div className="flex items-end justify-between">
            <h2 className="pl-3 flex items-center gap-2 font-medium dark:text-icu-500">
              Generated Components
            </h2>
            <div className="flex gap-4">
              <Button
                onClick={onClear}
                variant="danger"
                className="h-fit py-4 gap-2 whitespace-nowrap"
                disabled={disabled}
              >
                Clear Generated <IconTrashBinMinimalistic className="size-5" />
              </Button>
              <Button
                onClick={handleDownloadAll}
                className={cn(
                  "gap-2 !w-54 whitespace-nowrap !relative",
                  downloadState.status !== "idle" && "!px-4 !py-4"
                )}
                disabled={disabled || downloadState.status !== "idle"}
              >
                {getButtonContent()}
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div
              className={cn(
                "grow border border-dashed flex py-4 px-4 rounded-2xl gap-6 overflow-auto",
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
                  <IconDownloadMinimalistic className="size-5" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        <MissingFilesSection missingFiles={missingFiles} />

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
            Logs
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
                const fileType = getFileTypeLabel(log);
                const logText = log.replace(/^(Success|Failed|Missing): /, "");

                return (
                  <div key={index} className="flex items-center gap-3">
                    {getStatusBadge(status)}
                    <span className={styles.text}>
                      {logText}
                      {fileType && (
                        <span className="ml-2 text-xs opacity-75">
                          [{fileType}]
                        </span>
                      )}
                    </span>
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
