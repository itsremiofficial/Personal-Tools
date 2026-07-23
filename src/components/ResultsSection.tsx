import React, { useState, useCallback } from "react";
import { toast } from "sonner";
import { downloadAllAsZip, downloadSingleFile } from "@/lib/downloadUtils";
import { cn } from "@/lib";
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
        <div className="text-base font-medium text-muted-foreground mb-3">
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
    <div className={cn("p-4 bg-muted/20 rounded-3xl flex flex-col")}>
      <div className="flex items-center gap-2 mb-8">
        <h3 className="text-lg font-medium">Missing Files</h3>
        <span className="text-muted-foreground">({totalMissing})</span>
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
      await downloadSingleFile(output, fileName);
    };

    const handleDownloadAll = useCallback(async () => {
      if (disabled) return;

      setDownloadState({ status: "zipping", progress: 0 });

      try {
        await downloadAllAsZip(
          outputs,
          names,
          (percent) => {
            setDownloadState({ status: "zipping", progress: percent });
          },
          (percent) => {
            setDownloadState({ status: "downloading", progress: percent });
          },
        );

        setDownloadState({ status: "complete", progress: 100 });

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
                indicator="bg-muted"
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
                className="size-4.5"
                duotone={false}
                width={2}
              />
            </>
          );
      }
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

    const getTypeLabel = (type: LogEntry["type"]): string => {
      switch (type) {
        case "lineDuotone":
          return "Line Duotone";
        case "boldDuotone":
          return "Bold Duotone";
        case "bold":
          return "Bold";
        default:
          return "";
      }
    };

    const getStatusBadge = (status: string) => {
      const styles = getLogStyles(status as "success" | "warning" | "error");
      return (
        <span
          className={cn(
            "flex justify-center rounded-full uppercase px-2 py-1 text-[11px] tracking-wider leading-none w-[5rem]",
            styles.badge,
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
            "p-4 bg-muted/20 rounded-3xl flex flex-col gap-4",
            disabled && "opacity-50 pointer-events-none",
          )}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <h2 className="pl-3 flex items-center gap-2 font-medium text-muted-foreground">
              Generated Components
            </h2>
            <div className="flex gap-3 w-full sm:w-auto">
              <Button
                onClick={onClear}
                variant="danger"
                className="py-2 sm:py-4 px-4 sm:px-6 gap-2 whitespace-nowrap rounded-full text-xs sm:text-sm flex-1 sm:flex-initial"
                disabled={disabled}
              >
                Clear Generated{" "}
                <IconTrashBinMinimalistic className="size-4 sm:size-5" duotone={false} />
              </Button>
              <Button
                onClick={handleDownloadAll}
                className={cn(
                  "gap-2 !w-auto sm:!w-54 whitespace-nowrap !relative rounded-full flex text-xs sm:text-sm flex-1 sm:flex-initial",
                  downloadState.status !== "idle" && "!px-2 sm:!px-4 !py-2 sm:!py-4",
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
                "border-border/70",
              )}
            >
              {outputs.map((output, index) => (
                <Button
                  key={index}
                  onClick={() => handleDownload(output, names[index])}
                  variant="default"
                  className="gap-2 whitespace-nowrap rounded-full"
                  disabled={disabled}
                >
                  {names[index]}.tsx
                  <IconDownloadMinimalistic
                    className="size-5"
                    duotone={false}
                  />
                </Button>
              ))}
            </div>
          </div>
        </div>

        <MissingFilesSection missingFiles={missingFiles} />

        <div className={cn("p-4 bg-muted/20 rounded-3xl flex flex-col gap-4")}>
          <label
            className={cn(
              "pl-4 rounded-full uppercase text-sm tracking-widest font-bold text-center w-max leading-none",
              "text-foreground border-border",
            )}
          >
            Logs
            <kbd className="px-2 rounded-md py-1 bg-card text-muted-foreground">
              {logs.length}
            </kbd>
          </label>
          <div className="flex flex-col gap-2 p-4 rounded-3xl bg-background">
            <div className="max-h-72 overflow-y-auto">
              {logs.map((log, index) => {
                const styles = getLogStyles(log.status);
                const typeLabel = getTypeLabel(log.type);

                return (
                  <div key={index} className="flex items-center gap-3">
                    {getStatusBadge(log.status)}
                    <span className={styles.text}>
                      {log.message}
                      {typeLabel && (
                        <span className="ml-2 text-xs opacity-75">
                          [{typeLabel}]
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
  },
);

ResultsSection.displayName = "ResultsSection";
