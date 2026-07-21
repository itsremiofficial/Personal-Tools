/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useCallback, useMemo, useContext } from "react";
import { toast } from "sonner";
import { useFileHandler } from "@/hooks/useFileHandler";
import { generateComponentCode, replaceAttributes, validateFiles } from "@/lib";
import { TrayProviderProps } from "@/components/context/TrayProvider";
import { ErrorBoundary } from "react-error-boundary";
import {
  FileDropzone,
  FileList,
  GenerateButton,
  ResultsSection,
  Tray,
  Card,
  Toggle,
  Button,
} from "@/components";
import { cn } from "@/lib";
import {
  IconDocumentText,
  IconInfoCircle,
  IconTrashBin2,
} from "@/components/icons/version01";
import { IconPenTool } from "@/components/icons/version02";
import { TrayContext } from "@/components/context/TrayContext";
import PageHeader from "@/components/PageHeader";

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
    ],
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
    [],
  );

  const handleError = useCallback(
    (error: Error, name?: string) => {
      const errorMessage = name
        ? `Failed to generate: ${name}.tsx (${error.message})`
        : error.message;

      if (name) {
        toast.error(errorMessage, {
          id: `error-${name}`,
        });
      }

      return createErrorResult(error, name);
    },
    [createErrorResult],
  );

  const updateStateWithResults = useCallback(
    (
      results: GeneratedResult[],
      unmatched?: {
        lineDuotone: string[];
        boldDuotone: string[];
        bold: string[];
      },
    ) => {
      const successfulResults = results.filter((r) => r.success);
      const failedResults = results.filter((r) => !r.success);
      const totalFiles = results.length;

      // Group failures by error message
      const failureGroups = failedResults.reduce(
        (acc, result) => {
          const key = result.error || "Unknown error";
          if (!acc[key]) {
            acc[key] = [];
          }
          acc[key].push(result.name);
          return acc;
        },
        {} as Record<string, string[]>,
      );

      // Create logs including missing files
      const logs: LogEntry[] = [
        // Successful generations
        ...successfulResults.map((r) => ({
          message: `${r.name}.tsx`,
          type: null as null,
          status: "success" as const,
        })),
        // Failed generations
        ...failedResults.map((r) => ({
          message: `${r.name}.tsx`,
          type: null as null,
          status: "error" as const,
        })),
        // Missing stroke files
        ...(unmatched?.lineDuotone.map((name) => ({
          message: `${name}.svg`,
          type: "lineDuotone" as const,
          status: "warning" as const,
        })) || []),
        // Missing duotone files
        ...(unmatched?.boldDuotone.map((name) => ({
          message: `${name}.svg`,
          type: "boldDuotone" as const,
          status: "warning" as const,
        })) || []),
        ...(unmatched?.bold.map((name) => ({
          message: `${name}.svg`,
          type: "bold" as const,
          status: "warning" as const,
        })) || []),
      ];

      setState((_prev) => ({
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
          `Successfully generated ${successfulResults.length} components`,
        );
      }
    },
    [],
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
      const { matchedSets, unmatched } = validateFiles(
        lineDuotoneHandler.names,
        boldDuotoneHandler.names,
        boldHandler.names,
      );

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
          (): GeneratedResult => {
            try {
              const lineDuotoneSvg = replaceAttributes(
                lineDuotoneHandler.svgs[lineDuotoneIndex],
                true,
              );
              const boldDuotoneSvg = replaceAttributes(
                boldDuotoneHandler.svgs[boldDuotoneIndex],
              );
              const boldSvg = replaceAttributes(boldHandler.svgs[boldIndex]);

              const result = generateComponentCode(
                name,
                lineDuotoneSvg,
                boldDuotoneSvg,
                boldSvg,
                includeKeywords,
              );

              return result;
            } catch (error) {
              console.error(`Error generating component for ${name}:`, error);
              return handleError(
                error instanceof Error ? error : new Error("Unknown error"),
                name,
              );
            }
          },
      );

      const results = await processInBatches(
        tasks.map((t) => t()),
        BATCH_SIZE,
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
    lineDuotoneHandler.svgs,
    lineDuotoneHandler.names,
    boldDuotoneHandler.svgs,
    boldDuotoneHandler.names,
    boldHandler.svgs,
    boldHandler.names,
    handleError,
    createErrorResult,
    includeKeywords,
    updateStateWithResults,
  ]);

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
    [lineDuotoneHandler, boldDuotoneHandler, boldHandler],
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

  const { openTray } = useContext(TrayContext) as TrayProviderProps;

  return (
    <ErrorBoundary
      fallbackRender={({ error }) => (
        <div>Something went wrong: {error.message}</div>
      )}
    >
      <div className="p-2">
        <PageHeader
          title="Svg to React Icon Converter"
          description="This tool is to create react component (.tsx) from 3 types of svg
              icons twotone, bulk and bold."
          icon={IconPenTool}
        />
        <div className="relative flex flex-col justify-center gap-6 mt-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <FileDropzone
              onDrop={lineDuotoneHandler.handleFiles}
              onReject={(rejections) =>
                lineDuotoneHandler.handleRejected(rejections)
              }
              label="Two Tone Line SVGs"
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
                className="flex items-center gap-2 font-medium text-foreground"
              >
                Path for{" "}
                <kbd className="px-2 rounded-lg py-1 dark:bg-muted dark:text-muted-foreground">
                  &#60;IconProps&#62;
                </kbd>
                <Button
                  className="!p-1 rounded-xl"
                  variant={"subtle"}
                  size={"icon"}
                  onClick={() => {
                    openTray();
                  }}
                >
                  <IconInfoCircle className="size-8 p-1 rounded-xl cursor-pointer transition-colors duration-300" />
                </Button>
              </label>

              <div className="flex items-center gap-4">
                <Toggle
                  label="Keywords"
                  size="lg"
                  className="h-12"
                  pressed={includeKeywords}
                  onPressedChange={setIncludeKeywords}
                  disabled={!isReady || isProcessing}
                  icon={
                    includeKeywords ? (
                      <IconDocumentText className="size-5" fill />
                    ) : (
                      <IconDocumentText className="size-5" />
                    )
                  }
                />
                <GenerateButton
                  onClick={generateComponents}
                  disabled={!isReady || isProcessing}
                  loading={isProcessing}
                  progress={generateProgress}
                />
              </div>
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
                        className="pl-3 flex items-center gap-2 font-medium text-foreground"
                      >
                        Line Icon Files
                        <kbd className="px-2 rounded-lg dark:bg-muted dark:text-muted-foreground">
                          {lineDuotoneHandler.files.length}
                        </kbd>
                      </label>
                      <Button
                        onClick={() => clearType("lineDuotone")}
                        variant="danger"
                        className="h-fit gap-2 whitespace-nowrap"
                        disabled={isProcessing}
                      >
                        Clear Line{" "}
                        <IconTrashBin2 className="size-5" duotone={false} />
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
                        className="pl-3 flex items-center gap-2 font-medium text-foreground"
                      >
                        Bulk Icon Files
                        <kbd className="px-2 rounded-lg dark:bg-muted dark:text-muted-foreground">
                          {boldDuotoneHandler.files.length}
                        </kbd>
                      </label>
                      <Button
                        onClick={() => clearType("boldDuotone")}
                        variant="danger"
                        className="h-fit gap-2 whitespace-nowrap"
                        disabled={isProcessing}
                      >
                        Clear Bulk{" "}
                        <IconTrashBin2 className="size-5" duotone={false} />
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
                        className="pl-3 flex items-center gap-2 font-medium text-foreground"
                      >
                        Bold Files
                        <kbd className="px-2 rounded-lg dark:bg-muted dark:text-muted-foreground">
                          {boldHandler.files.length}
                        </kbd>
                      </label>
                      <Button
                        onClick={() => clearType("bold")}
                        variant="danger"
                        className="h-fit gap-2 whitespace-nowrap"
                        disabled={isProcessing}
                      >
                        Clear Bold
                        <IconTrashBin2 className="size-5" duotone={false} />
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
              onClear={clearGenerated}
              disabled={isProcessing}
            />
          )}
        </div>

        <Tray />
      </div>
    </ErrorBoundary>
  );
};

export default React.memo(IconConverter);
