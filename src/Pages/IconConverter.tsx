"use client";
import React, { useState, useCallback, useMemo, useContext } from "react";
import { useFileHandler } from "../hooks/useFileHandler";
import { generateComponentCode } from "../utils/componentGenerator";
import { FileDropzone } from "../components/FileDropzone";
import { FileList } from "../components/FileList";
import { GenerateButton } from "../components/GenerateButton";
import { ResultsSection } from "../components/ResultsSection";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { toast } from "sonner";
import replaceAttributes from "../utils/svgUtils";
import { CheckmarkCircle02Icon, InformationCircleIcon } from "hugeicons-react";
import { cn } from "../hooks/formatSvgCode";
import Tray from "../components/ui/Tray";
import {
  TrayContext,
  TrayProviderProps,
} from "../components/ContextProvider/TrayProvider";

interface GeneratedResult {
  name: string;
  success: boolean;
  output?: string;
  error?: string;
}

interface IconConverterState {
  outputs: string[];
  logs: string[];
  error: string | null;
}

const IconConverter: React.FC = () => {
  const [state, setState] = useState<IconConverterState>({
    outputs: [],
    logs: [],
    error: null,
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [iconPropsPath, setIconPropsPath] = useState(""); // Add this state
  const [generateProgress, setGenerateProgress] = useState(0);

  const strokeHandler = useFileHandler("stroke");
  const duotoneHandler = useFileHandler("duotone");

  const isReady = useMemo(
    () =>
      strokeHandler.files.length > 0 &&
      duotoneHandler.files.length > 0 &&
      !isProcessing,
    [strokeHandler.files.length, duotoneHandler.files.length, isProcessing]
  );

  const handleError = useCallback((error: Error, name?: string) => {
    // Remove duplicate toast for same error
    const errorMessage = name
      ? `Failed to generate: ${name}.tsx (${error.message})`
      : error.message;

    // Only show toast for specific file errors, not general errors
    if (name) {
      toast.error(errorMessage, {
        id: `error-${name}`, // Prevent duplicate toasts for same file
      });
    }

    return {
      success: false,
      name: name || "unknown",
      error: error.message,
    };
  }, []);

  const updateStateWithResults = useCallback((results: GeneratedResult[]) => {
    const successfulResults = results.filter((r) => r.success);
    const failedResults = results.filter((r) => !r.success);
    const totalFiles = results.length;

    // Group failures by error message for better reporting
    const failureGroups = failedResults.reduce((acc, result) => {
      const key = result.error || "Unknown error";
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(result.name);
      return acc;
    }, {} as Record<string, string[]>);

    setState((prev) => ({
      outputs: successfulResults.map((r) => r.output as string),
      logs: [
        ...successfulResults.map((r) => `Success: ${r.name}.tsx`),
        ...failedResults.map((r) => `Failed: ${r.name}.tsx`),
      ],
      error:
        failedResults.length > 0
          ? Object.entries(failureGroups)
              .map(
                ([error, names]) =>
                  `Failed to generate ${
                    names.length
                  } files (${error}): ${names.join(", ")}`
              )
              .join("\n")
          : null,
    }));

    // Show summary toast for failures if there are many
    if (failedResults.length > 0) {
      const failureSummary = Object.entries(failureGroups)
        .map(([error, names]) => `${names.length} files failed: ${error}`)
        .join("\n");

      toast.error(failureSummary, {
        id: "failure-summary", // Prevent duplicate summary toasts
      });
    }

    // Only show success toasts if total files are less than 20
    if (totalFiles < 20) {
      successfulResults.forEach((result) => {
        toast.success(`Generated: ${result.name}.tsx`, {
          id: `success-${result.name}`,
        });
      });
    } else if (successfulResults.length > 0) {
      toast.success(
        `Successfully generated ${successfulResults.length} components`
      );
    }
  }, []);

  // Add batch processing size
  const BATCH_SIZE = 5;

  const processInBatches = async (tasks: any[], batchSize: number) => {
    const results = [];
    const total = tasks.length;

    for (let i = 0; i < total; i += batchSize) {
      const batch = tasks.slice(i, i + batchSize);
      const batchResults = await Promise.all(batch);
      results.push(...batchResults);

      // Calculate progress including processing time
      const progress = Math.min(Math.round(((i + batchSize) / total) * 90), 90);
      setGenerateProgress(progress);
    }

    // Set to 100% only when actually complete
    setGenerateProgress(100);
    return results;
  };

  const generateComponents = useCallback(async () => {
    setIsProcessing(true);
    setGenerateProgress(0);
    setState((prev) => ({ ...prev, logs: [], error: null }));

    try {
      if (!strokeHandler.svgs.length || !duotoneHandler.svgs.length) {
        throw new Error("No SVG files loaded");
      }

      const tasks = strokeHandler.names.map(
        (name, index) => async (): Promise<GeneratedResult> => {
          if (
            !name ||
            !strokeHandler.svgs[index] ||
            !duotoneHandler.svgs[index]
          ) {
            return handleError(new Error("Missing required files"), name);
          }

          try {
            const strokeSvg = await replaceAttributes(
              strokeHandler.svgs[index],
              true
            );
            const duotoneSvg = await replaceAttributes(
              duotoneHandler.svgs[index]
            );

            return {
              name,
              success: true,
              output: generateComponentCode(
                `Icon${name}`,
                strokeSvg,
                duotoneSvg,
                iconPropsPath
              ),
            };
          } catch (error) {
            return handleError(
              error instanceof Error ? error : new Error("Unknown error"),
              name
            );
          }
        }
      );

      const results = await processInBatches(
        tasks.map((t) => t()),
        BATCH_SIZE
      );

      // Update results first
      await updateStateWithResults(results);

      // Brief delay before completion
      await new Promise((resolve) => setTimeout(resolve, 300));
    } catch (err) {
      handleError(
        err instanceof Error ? err : new Error("Failed to generate components")
      );
    } finally {
      // Ensure proper cleanup sequence
      setGenerateProgress(100);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setGenerateProgress(0);
      setIsProcessing(false);
    }
  }, [
    strokeHandler.names,
    strokeHandler.svgs,
    duotoneHandler.svgs,
    handleError,
    iconPropsPath,
  ]);

  const clearAll = useCallback(() => {
    // Clear all states
    setState({ outputs: [], logs: [], error: null });
    strokeHandler.clearFiles();
    duotoneHandler.clearFiles();
    setIconPropsPath(""); // Clear path input
    setGenerateProgress(0); // Reset progress

    // Show feedback toast
    toast.success("All files cleared successfully");
  }, [strokeHandler, duotoneHandler]);

  const { open, setOpen } = useContext(TrayContext) as TrayProviderProps;

  return (
    <ErrorBoundary
      fallback={<div>Something went wrong. Please try again.</div>}
    >
      <div className="relative flex flex-col justify-center gap-6 p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FileDropzone
            onDrop={strokeHandler.handleFiles}
            onReject={(rejections) => strokeHandler.handleRejected(rejections)}
            label="Line SVGs"
            accept={{ "image/svg+xml": [".svg"] }}
            disabled={isProcessing}
          />
          <FileDropzone
            onDrop={duotoneHandler.handleFiles}
            onReject={(rejections) => duotoneHandler.handleRejected(rejections)}
            label="Bulk SVGs"
            accept={{ "image/svg+xml": [".svg"] }}
            disabled={isProcessing}
          />
        </div>

        <div
          className={cn(
            "p-6 border rounded-4xl flex flex-col gap-6",
            "border-icu-300 bg-icu-100",
            "dark:border-icu-800/70 dark:bg-icu-1000/40"
          )}
        >
          <label
            htmlFor="iconPropsPath"
            className="flex items-center gap-2 font-medium dark:text-icu-500"
          >
            Path for &#60;IconProp&#62;
            <InformationCircleIcon
              className={cn(
                "size-8 p-1 rounded-xl cursor-pointer transition-colors duration-300",
                "text-icu-600 hover:text-icu-700",
                "dark:text-icu-700 dark:hover:text-icu-600"
              )}
              onClick={() => setOpen(!open)}
            />
            <Tray />
          </label>
          <div className="flex items-center justify-between gap-4">
            <input
              id="iconPropsPath"
              type="text"
              value={iconPropsPath}
              onChange={(e) => setIconPropsPath(e.target.value)}
              className={cn(
                "grow rounded-2xl py-4.5 px-3 border-[1.5px] w-max !ring-0 !outline-0 transition-colors duration-300",
                "bg-icu-200 border-icu-400/70 text-icu-800",
                "focus-visible:border-icu-600",
                "dark:bg-icu-900 dark:border-icu-800/70 dark:text-icu-400",
                "dark:focus-visible:border-icu-700/70"
              )}
              placeholder="Enter path for Type e.g: ../types"
            />
            <GenerateButton
              onClick={generateComponents}
              disabled={!isReady || !iconPropsPath.length}
              loading={isProcessing}
              progress={generateProgress}
            />
          </div>
        </div>
        {(strokeHandler.files.length > 0 ||
          duotoneHandler.files.length > 0) && (
          <div
            className={cn(
              "p-6 border rounded-4xl flex flex-col gap-6",
              "border-icu-300 bg-icu-100",
              "dark:border-icu-800/70 dark:bg-icu-1000/40"
            )}
          >
            <div>
              {strokeHandler.files.length > 0 && (
                <label
                  htmlFor="bulkIconsList"
                  className="pl-3 flex items-center gap-2 font-medium dark:text-icu-500"
                >
                  Line Icon Files
                </label>
              )}
              <FileList
                {...strokeHandler}
                type="stroke"
                disabled={isProcessing}
                onClear={clearAll} // Add onClear prop
              />
            </div>
            <div>
              {duotoneHandler.files.length > 0 && (
                <label
                  htmlFor="bulkIconsList"
                  className="pl-3 flex items-center gap-2 font-medium dark:text-icu-500"
                >
                  Bulk Icon Files
                </label>
              )}
              <FileList
                {...duotoneHandler}
                type="duotone"
                disabled={isProcessing}
                onClear={clearAll} // Add onClear prop
              />
            </div>
          </div>
        )}

        {state.logs.length > 0 && (
          <ResultsSection
            {...state}
            names={strokeHandler.names}
            onClear={clearAll}
            disabled={isProcessing}
          />
        )}
      </div>
    </ErrorBoundary>
  );
};

export default React.memo(IconConverter);
