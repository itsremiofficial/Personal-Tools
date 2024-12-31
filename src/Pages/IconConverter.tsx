/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useCallback, useMemo, useContext } from "react";
import { toast } from "sonner";
import { InformationCircleIcon } from "hugeicons-react";
import { GeneratedResult, IconConverterState } from "@/types";
import { useFileHandler } from "@/hooks/useFileHandler";
import { generateComponentCode, replaceAttributes } from "@/utils";
import {
  TrayContext,
  TrayProviderProps,
} from "@/components/ContextProvider/TrayProvider";
import {
  ErrorBoundary,
  FileDropzone,
  FileList,
  GenerateButton,
  ResultsSection,
} from "@/components";
import { cn } from "@/hooks";
import { Tray } from "@/components/common";

const IconConverter: React.FC = () => {
  const [state, setState] = useState<IconConverterState>({
    outputs: [],
    logs: [],
    error: null,
    missingFiles: {
      stroke: [],
      duotone: [],
    },
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

  const updateStateWithResults = useCallback(
    (
      results: GeneratedResult[],
      unmatched?: { stroke: string[]; duotone: string[] }
    ) => {
      const successfulResults = results.filter((r) => r.success);
      const failedResults = results.filter((r) => !r.success);
      const totalFiles = results.length;

      // Group failures by error message
      const failureGroups = failedResults.reduce((acc, result) => {
        const key = result.error || "Unknown error";
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(result.name);
        return acc;
      }, {} as Record<string, string[]>);

      // Create logs including missing files
      const logs = [
        // Successful generations
        ...successfulResults.map((r) => `Success: ${r.name}.tsx`),
        // Failed generations
        ...failedResults.map((r) => `Failed: ${r.name}.tsx`),
        // Missing stroke files
        ...(unmatched?.stroke.map(
          (name) => `Missing: ${name}.svg (Line Icon)`
        ) || []),
        // Missing duotone files
        ...(unmatched?.duotone.map(
          (name) => `Missing: ${name}.svg (Bulk Icon)`
        ) || []),
      ];

      setState((prev) => ({
        outputs: successfulResults.map((r) => r.output as string),
        logs,
        error:
          failedResults.length > 0
            ? `Failed to generate ${failedResults.length} components`
            : null,
        missingFiles: unmatched || { stroke: [], duotone: [] },
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
    },
    []
  );

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

  // Add new validation function
  const validateFileMatches = useCallback(() => {
    // Convert to lowercase and remove special characters for comparison
    const normalizeFileName = (name: string) =>
      name.toLowerCase().replace(/[^a-z0-9]/g, "");

    const strokeFiles = new Map(
      strokeHandler.names.map((name, i) => [
        normalizeFileName(name),
        { name, index: i },
      ])
    );

    const duotoneFiles = new Map(
      duotoneHandler.names.map((name, i) => [
        normalizeFileName(name),
        { name, index: i },
      ])
    );

    // Find matching pairs
    const matchedPairs = Array.from(strokeFiles.keys())
      .filter((key) => duotoneFiles.has(key))
      .map((key) => ({
        name: strokeFiles.get(key)!.name,
        strokeIndex: strokeFiles.get(key)!.index,
        duotoneIndex: duotoneFiles.get(key)!.index,
      }));

    // Find missing files
    const missingInDuotone = Array.from(strokeFiles.keys())
      .filter((key) => !duotoneFiles.has(key))
      .map((key) => strokeFiles.get(key)!.name);

    const missingInStroke = Array.from(duotoneFiles.keys())
      .filter((key) => !strokeFiles.has(key))
      .map((key) => duotoneFiles.get(key)!.name);

    return {
      matchedPairs,
      unmatched: {
        stroke: missingInStroke,
        duotone: missingInDuotone,
      },
    };
  }, [strokeHandler.names, duotoneHandler.names]);

  // Update generate components to use matching pairs
  const generateComponents = useCallback(async () => {
    setIsProcessing(true);
    setGenerateProgress(0);
    setState((prev) => ({ ...prev, logs: [], error: null }));

    try {
      if (!strokeHandler.svgs.length || !duotoneHandler.svgs.length) {
        throw new Error("No SVG files loaded");
      }

      // Get matched and unmatched files
      const { matchedPairs, unmatched } = validateFileMatches();

      // Show only the count in toast
      if (unmatched.stroke.length || unmatched.duotone.length) {
        const totalMissing = unmatched.stroke.length + unmatched.duotone.length;
        toast.warning(`${totalMissing} files are missing their counterparts`, {
          duration: 5000,
        });
      }

      // Update state with missing files
      setState((prev) => ({
        ...prev,
        missingFiles: unmatched,
      }));

      if (!matchedPairs.length) {
        throw new Error("No matching icon pairs found");
      }

      // Process only matched files
      const tasks = matchedPairs.map(
        ({ name, strokeIndex, duotoneIndex }) =>
          async (): Promise<GeneratedResult> => {
            try {
              // console.log(`Processing pair: ${name}`, {
              //   stroke: strokeHandler.svgs[strokeIndex],
              //   duotone: duotoneHandler.svgs[duotoneIndex],
              // });

              const strokeSvg = await replaceAttributes(
                strokeHandler.svgs[strokeIndex],
                true
              );
              const duotoneSvg = await replaceAttributes(
                duotoneHandler.svgs[duotoneIndex]
              );

              return {
                name,
                success: true,
                output: generateComponentCode(
                  name,
                  strokeSvg,
                  duotoneSvg,
                  iconPropsPath
                ),
              };
            } catch (error) {
              console.error(`Error generating component for ${name}:`, error);
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
      await updateStateWithResults(results, unmatched);

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
    duotoneHandler.names,
    duotoneHandler.svgs,
    handleError,
    iconPropsPath,
    validateFileMatches,
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
            Path for &#60;IconProps&#62;
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
                  <kbd className="px-2 rounded-lg dark:bg-icu-1000 dark:text-icu-500">
                    {strokeHandler.files.length}
                  </kbd>
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
                  <kbd className="px-2 rounded-lg dark:bg-icu-1000 dark:text-icu-500">
                    {duotoneHandler.files.length}
                  </kbd>
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
