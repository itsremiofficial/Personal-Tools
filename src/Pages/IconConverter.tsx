/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useCallback, useMemo, useContext } from "react";
import { toast } from "sonner";
import { Delete03Icon, InformationCircleIcon } from "hugeicons-react";
import { GeneratedResult, IconConverterState } from "@/types";
import { useFileHandler } from "@/hooks/useFileHandler";
import { generateComponentCode, replaceAttributes } from "@/utils";
import {
  TrayContext,
  TrayProviderProps,
} from "@/components/context/TrayProvider";
import {
  ErrorBoundary,
  FileDropzone,
  FileList,
  GenerateButton,
  ResultsSection,
} from "@/components";
import { cn } from "@/hooks";
import Tray from "@/components/common/TrayDrawer";
import { generateComponentCodeSync } from "@/utils/generateComponentCode";
import { Card } from "@/components/common/Card";
import { Toggle } from "@/components/common/Toggle";
import { IconDocumentText } from "@/components/icons/version01";
import { Button } from "@/components/common/Button";

const IconConverter: React.FC = () => {
  const [state, setState] = useState<IconConverterState>({
    outputs: [],
    logs: [],
    error: null,
    missingFiles: {
      lineDuotone: [],
      boldDuotone: [],
      bold: [],
    },
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [iconPropsPath, setIconPropsPath] = useState(""); // Add this state
  const [generateProgress, setGenerateProgress] = useState(0);
  const [includeKeywords, setIncludeKeywords] = useState(false);

  const lineDuotoneHandler = useFileHandler("lineDuotone");
  const boldDuotoneHandler = useFileHandler("boldDuotone");
  const boldHandler = useFileHandler("bold");

  const isReady = useMemo(
    () =>
      lineDuotoneHandler.files.length > 0 &&
      boldDuotoneHandler.files.length > 0 &&
      boldHandler.files.length > 0 &&
      !isProcessing,
    [
      lineDuotoneHandler.files.length,
      boldDuotoneHandler.files.length,
      boldHandler.files.length,
      isProcessing,
    ]
  );

  const createErrorResult = useCallback(
    (error: Error, name: string = "unknown"): GeneratedResult => {
      return {
        fileName: `Icon${name}.tsx`,
        output: "",
        success: false,
        error: error.message,
        name,
      };
    },
    []
  );

  const handleError = useCallback((error: Error, name?: string) => {
    const errorMessage = name
      ? `Failed to generate: ${name}.tsx (${error.message})`
      : error.message;

    if (name) {
      toast.error(errorMessage, {
        id: `error-${name}`,
      });
    }

    return createErrorResult(error, name);
  }, []);

  const updateStateWithResults = useCallback(
    (
      results: GeneratedResult[],
      unmatched?: {
        lineDuotone: string[];
        boldDuotone: string[];
        bold: string[];
      }
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
        ...(unmatched?.lineDuotone.map(
          (name) => `Missing: ${name}.svg (Line Icon)`
        ) || []),
        // Missing duotone files
        ...(unmatched?.boldDuotone.map(
          (name) => `Missing: ${name}.svg (Bulk Icon)`
        ) || []),
        ...(unmatched?.bold.map((name) => `Missing: ${name}.svg (Bold Icon)`) ||
          []),
      ];

      setState((prev) => ({
        outputs: successfulResults.map((r) => r.output as string),
        logs,
        error:
          failedResults.length > 0
            ? `Failed to generate ${failedResults.length} components`
            : null,
        missingFiles: unmatched || {
          lineDuotone: [],
          boldDuotone: [],
          bold: [],
        },
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

    const lineDuotoneFiles = new Map(
      lineDuotoneHandler.names.map((name, i) => [
        normalizeFileName(name),
        { name, index: i },
      ])
    );

    const boldDuotoneFiles = new Map(
      boldDuotoneHandler.names.map((name, i) => [
        normalizeFileName(name),
        { name, index: i },
      ])
    );

    const boldFiles = new Map(
      boldHandler.names.map((name, i) => [
        normalizeFileName(name),
        { name, index: i },
      ])
    );

    // Find matching pairs
    const matchedSets = Array.from(lineDuotoneFiles.keys())
      .filter((key) => boldDuotoneFiles.has(key) && boldFiles.has(key))
      .map((key) => ({
        name: lineDuotoneFiles.get(key)!.name,
        lineDuotoneIndex: lineDuotoneFiles.get(key)!.index,
        boldDuotoneIndex: boldDuotoneFiles.get(key)!.index,
        boldIndex: boldFiles.get(key)!.index,
      }));

    // Find missing files
    const missingInBoldDuotone = Array.from(lineDuotoneFiles.keys())
      .filter((key) => !boldDuotoneFiles.has(key))
      .map((key) => lineDuotoneFiles.get(key)!.name);

    const missingInBold = Array.from(boldDuotoneFiles.keys())
      .filter((key) => !boldFiles.has(key))
      .map((key) => boldDuotoneFiles.get(key)!.name);

    return {
      matchedSets,
      unmatched: {
        lineDuotone: missingInBoldDuotone,
        boldDuotone: missingInBold,
        bold: Array.from(boldFiles.keys())
          .filter(
            (key) => !lineDuotoneFiles.has(key) || !boldDuotoneFiles.has(key)
          )
          .map((key) => boldFiles.get(key)!.name),
      },
    };
  }, [lineDuotoneHandler.names, boldDuotoneHandler.names, boldHandler.names]);

  // Update generate components to use matching pairs
  const generateComponents = useCallback(async () => {
    setIsProcessing(true);
    setGenerateProgress(0);
    setState((prev) => ({ ...prev, logs: [], error: null }));

    try {
      if (
        !lineDuotoneHandler.svgs.length ||
        !boldDuotoneHandler.svgs.length ||
        !boldHandler.svgs.length
      ) {
        throw new Error("No SVG files loaded");
      }

      // Get matched and unmatched files
      const { matchedSets, unmatched } = validateFileMatches();

      // Show only the count in toast
      if (
        unmatched.lineDuotone.length ||
        unmatched.boldDuotone.length ||
        unmatched.bold.length
      ) {
        const totalMissing =
          unmatched.lineDuotone.length +
          unmatched.boldDuotone.length +
          unmatched.bold.length;
        toast.warning(`${totalMissing} files are missing their counterparts`, {
          duration: 5000,
        });
      }

      // Update state with missing files
      setState((prev) => ({
        ...prev,
        missingFiles: unmatched,
      }));

      if (!matchedSets.length) {
        throw new Error("No matching icon pairs found");
      }

      // Process only matched files
      const tasks = matchedSets.map(
        ({ name, lineDuotoneIndex, boldDuotoneIndex, boldIndex }) =>
          async (): Promise<GeneratedResult> => {
            try {
              const lineDuotoneSvg = await replaceAttributes(
                lineDuotoneHandler.svgs[lineDuotoneIndex],
                true
              );
              const boldDuotoneSvg = await replaceAttributes(
                boldDuotoneHandler.svgs[boldDuotoneIndex]
              );
              const boldSvg = await replaceAttributes(
                boldHandler.svgs[boldIndex]
              );

              // Use generateComponentCode or generateComponentCodeSync based on includeKeywords
              const result = includeKeywords
                ? await generateComponentCode(
                    name,
                    lineDuotoneSvg,
                    boldDuotoneSvg,
                    boldSvg,
                    iconPropsPath
                  )
                : generateComponentCodeSync(
                    name,
                    lineDuotoneSvg,
                    boldDuotoneSvg,
                    boldSvg,
                    iconPropsPath
                  );

              return result;
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
      const error =
        err instanceof Error ? err : new Error("Failed to generate components");
      return createErrorResult(error);
    } finally {
      // Ensure proper cleanup sequence
      setGenerateProgress(100);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setGenerateProgress(0);
      setIsProcessing(false);
    }
  }, [
    lineDuotoneHandler.names,
    lineDuotoneHandler.svgs,
    boldDuotoneHandler.names,
    boldDuotoneHandler.svgs,
    boldHandler.names,
    boldHandler.svgs,
    handleError,
    iconPropsPath,
    validateFileMatches,
    createErrorResult,
    includeKeywords,
  ]);

  const clearAll = useCallback(() => {
    // Clear all states with the correct shape
    setState({
      outputs: [],
      logs: [],
      error: null,
      missingFiles: {
        lineDuotone: [],
        boldDuotone: [],
        bold: [],
      },
    });

    lineDuotoneHandler.clearFiles();
    boldDuotoneHandler.clearFiles();
    boldHandler.clearFiles();
    setIconPropsPath("");
    setGenerateProgress(0);

    toast.success("All files cleared successfully");
  }, [lineDuotoneHandler, boldDuotoneHandler, boldHandler]);

  const clearType = useCallback(
    (type: "lineDuotone" | "boldDuotone" | "bold") => {
      // Clear generated content since we're modifying the file set
      setState({
        outputs: [],
        logs: [],
        error: null,
        missingFiles: {
          lineDuotone: [],
          boldDuotone: [],
          bold: [],
        },
      });

      // Clear specific file type
      switch (type) {
        case "lineDuotone":
          lineDuotoneHandler.clearFiles();
          toast.success("Line SVG files cleared");
          break;
        case "boldDuotone":
          boldDuotoneHandler.clearFiles();
          toast.success("Bold Duotone SVG files cleared");
          break;
        case "bold":
          boldHandler.clearFiles();
          toast.success("Bold SVG files cleared");
          break;
      }
    },
    [lineDuotoneHandler, boldDuotoneHandler, boldHandler]
  );

  const clearGenerated = useCallback(() => {
    // Clear only generated content
    setState({
      outputs: [],
      logs: [],
      error: null,
      missingFiles: {
        lineDuotone: [],
        boldDuotone: [],
        bold: [],
      },
    });

    toast.success("Generated files cleared");
  }, []);

  const { open, setOpen } = useContext(TrayContext) as TrayProviderProps;

  return (
    <ErrorBoundary
      fallback={<div>Something went wrong. Please try again.</div>}
    >
      <div className="relative flex flex-col justify-center gap-6 p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <FileDropzone
            onDrop={lineDuotoneHandler.handleFiles}
            onReject={(rejections) =>
              lineDuotoneHandler.handleRejected(rejections)
            }
            label="Line SVGs"
            accept={{ "image/svg+xml": [".svg"] }}
            disabled={isProcessing}
          />
          <FileDropzone
            onDrop={boldDuotoneHandler.handleFiles}
            onReject={(rejections) =>
              boldDuotoneHandler.handleRejected(rejections)
            }
            label="Bulk SVGs"
            accept={{ "image/svg+xml": [".svg"] }}
            disabled={isProcessing}
          />
          <FileDropzone
            onDrop={boldHandler.handleFiles}
            onReject={(rejections) => boldHandler.handleRejected(rejections)}
            label="Bold SVGs"
            accept={{ "image/svg+xml": [".svg"] }}
            disabled={isProcessing}
          />
        </div>

        <Card className={cn("p-6 border rounded-4xl flex flex-col gap-6")}>
          <div className="flex items-center justify-between">
            <label
              htmlFor="iconPropsPath"
              className="flex items-center gap-2 font-medium text-icu-900 dark:text-icu-500"
            >
              Path for{" "}
              <kbd className="px-2 rounded-lg py-1 dark:bg-icu-1000 dark:text-icu-500">
                &#60;IconProps&#62;
              </kbd>
              <InformationCircleIcon
                className={cn(
                  "size-8 p-1 rounded-xl cursor-pointer transition-colors duration-300",
                  "text-icu-600 hover:text-icu-700",
                  "dark:text-icu-700 dark:hover:text-icu-600"
                )}
                onClick={() => setOpen(!open)}
              />
            </label>

            <Toggle
              label="Keywords"
              pressed={includeKeywords}
              onPressedChange={setIncludeKeywords}
              size="sm"
              disabled={!isReady || !iconPropsPath.length || isProcessing}
              icon={
                includeKeywords ? (
                  <IconDocumentText className="size-5" fill />
                ) : (
                  <IconDocumentText className="size-5" />
                )
              }
            />
          </div>
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

          {(lineDuotoneHandler.files.length > 0 ||
            boldDuotoneHandler.files.length > 0 ||
            boldHandler.files.length > 0) && (
            <>
              {lineDuotoneHandler.files.length > 0 && (
                <div className="flex justify-center-center flex-col gap-2">
                  <div className="flex items-end justify-between">
                    <label
                      htmlFor="bulkIconsList"
                      className="pl-3 flex items-center gap-2 font-medium text-icu-900 dark:text-icu-500"
                    >
                      Line Icon Files
                      <kbd className="px-2 rounded-lg dark:bg-icu-1000 dark:text-icu-500">
                        {lineDuotoneHandler.files.length}
                      </kbd>
                    </label>
                    <Button
                      onClick={() => clearType("lineDuotone")}
                      variant="danger"
                      className="h-fit gap-2 whitespace-nowrap"
                      disabled={isProcessing}
                    >
                      Clear Line <Delete03Icon className="size-5" />
                    </Button>
                  </div>
                  <FileList
                    {...lineDuotoneHandler}
                    type="lineDuotone"
                    disabled={isProcessing}
                    onClear={() => clearType("lineDuotone")}
                  />
                </div>
              )}

              {boldDuotoneHandler.files.length > 0 && (
                <div className="flex justify-center-center flex-col gap-2">
                  <div className="flex items-end justify-between">
                    <label
                      htmlFor="bulkIconsList"
                      className="pl-3 flex items-center gap-2 font-medium text-icu-900 dark:text-icu-500"
                    >
                      Bulk Icon Files
                      <kbd className="px-2 rounded-lg dark:bg-icu-1000 dark:text-icu-500">
                        {boldDuotoneHandler.files.length}
                      </kbd>
                    </label>
                    <Button
                      onClick={() => clearType("boldDuotone")}
                      variant="danger"
                      className="h-fit gap-2 whitespace-nowrap"
                      disabled={isProcessing}
                    >
                      Clear Bulk <Delete03Icon className="size-5" />
                    </Button>
                  </div>
                  <FileList
                    {...boldDuotoneHandler}
                    type="boldDuotone"
                    disabled={isProcessing}
                    onClear={() => clearType("boldDuotone")}
                  />
                </div>
              )}

              {boldHandler.files.length > 0 && (
                <div className="flex justify-center-center flex-col gap-2">
                  <div className="flex items-end justify-between">
                    <label
                      htmlFor="bulkIconsList"
                      className="pl-3 flex items-center gap-2 font-medium text-icu-900 dark:text-icu-500"
                    >
                      Bold Files
                      <kbd className="px-2 rounded-lg dark:bg-icu-1000 dark:text-icu-500">
                        {boldHandler.files.length}
                      </kbd>
                    </label>
                    <Button
                      onClick={() => clearType("bold")}
                      variant="danger"
                      className="h-fit gap-2 whitespace-nowrap"
                      disabled={isProcessing}
                    >
                      Clear Bold <Delete03Icon className="size-5" />
                    </Button>
                  </div>
                  <FileList
                    {...boldHandler}
                    type="bold"
                    disabled={isProcessing}
                    onClear={() => clearType("bold")}
                  />
                </div>
              )}
            </>
          )}
        </Card>

        {state.logs.length > 0 && (
          <ResultsSection
            {...state}
            names={lineDuotoneHandler.names}
            onClear={clearGenerated} // Changed from clearAll to clearGenerated
            disabled={isProcessing}
          />
        )}
      </div>

      <Tray />
    </ErrorBoundary>
  );
};

export default React.memo(IconConverter);
