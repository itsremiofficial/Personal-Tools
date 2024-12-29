"use client";
import React, { useState, useCallback, useMemo } from "react";
import { useFileHandler } from "../hooks/useFileHandler";
import { generateComponentCode } from "../utils/componentGenerator";
import { FileDropzone } from "../components/FileDropzone";
import { FileList } from "../components/FileList";
import { GenerateButton } from "../components/GenerateButton";
import { ResultsSection } from "../components/ResultsSection";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { toast } from "sonner";
import replaceAttributes from "../utils/svgUtils";

interface GeneratedResult {
  name: string;
  success: boolean;
  output?: string;
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
    const message = name
      ? `Failed to process ${name}: ${error.message}`
      : error.message;
    toast.error(message);
    return { success: false, name: name || "unknown" };
  }, []);

  const generateComponents = useCallback(async () => {
    setIsProcessing(true);
    setState((prev) => ({ ...prev, logs: [], error: null }));

    try {
      if (!strokeHandler.svgs.length || !duotoneHandler.svgs.length) {
        throw new Error("No SVG files loaded");
      }

      const newOutputs = await Promise.all(
        strokeHandler.names.map(
          async (name, index): Promise<GeneratedResult> => {
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
                  duotoneSvg
                ),
              };
            } catch (error) {
              return handleError(
                error instanceof Error ? error : new Error("Unknown error"),
                name
              );
            }
          }
        )
      );

      updateStateWithResults(newOutputs);
    } catch (err) {
      handleError(
        err instanceof Error ? err : new Error("Failed to generate components")
      );
    } finally {
      setIsProcessing(false);
    }
  }, [
    strokeHandler.names,
    strokeHandler.svgs,
    duotoneHandler.svgs,
    handleError,
  ]);

  const updateStateWithResults = useCallback((results: GeneratedResult[]) => {
    const successfulResults = results.filter((r) => r.success);
    const failedResults = results.filter((r) => !r.success);

    setState((prev) => ({
      outputs: successfulResults.map((r) => r.output as string),
      logs: [
        ...successfulResults.map((r) => `Success: ${r.name}.tsx`),
        ...failedResults.map((r) => `Failed: ${r.name}.tsx`),
      ],
      error:
        failedResults.length > 0
          ? `Failed to generate ${failedResults.length} components`
          : null,
    }));

    if (successfulResults.length > 0) {
      toast.success(
        `Successfully generated ${successfulResults.length} components`
      );
    }
  }, []);

  const clearAll = useCallback(() => {
    setState({ outputs: [], logs: [], error: null });
    strokeHandler.clearFiles();
    duotoneHandler.clearFiles();
  }, [strokeHandler, duotoneHandler]);

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

        {(strokeHandler.files.length > 0 ||
          duotoneHandler.files.length > 0) && (
          <>
            <FileList
              {...strokeHandler}
              type="stroke"
              disabled={isProcessing}
            />
            <FileList
              {...duotoneHandler}
              type="duotone"
              disabled={isProcessing}
            />
            <GenerateButton
              onClick={generateComponents}
              disabled={!isReady}
              loading={isProcessing}
            />
          </>
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
