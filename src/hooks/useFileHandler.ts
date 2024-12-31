import { useState, useCallback } from "react";
import { FileRejection } from "react-dropzone";

import { sanitizeFileName } from "../utils/fileUtils";
import cleanupSvg from "./cleanupSvg";

export interface FileHandlerState {
  files: File[];
  svgs: string[];
  names: string[];
  error: string | null;
}

export interface FileHandlerActions {
  handleFiles: (files: File[]) => void;
  handleRejected: (rejections: FileRejection[]) => void;
  clearFiles: () => void;
  removeFile: (index: number) => void;
}

export type FileHandlerType = FileHandlerState & FileHandlerActions;

export const useFileHandler = (type: "stroke" | "duotone"): FileHandlerType => {
  const [state, setState] = useState<FileHandlerState>({
    files: [],
    svgs: [],
    names: [],
    error: null,
  });

  const processFiles = useCallback(
    (files: File[]): Promise<void> => {
      return new Promise((resolve) => {
        try {
          console.log(
            `Processing ${type} files:`,
            files.map((f) => f.name)
          );

          const fileQueue = files
            .filter((file) => {
              if (!file || !file.name) {
                console.warn("Invalid file:", file);
                return false;
              }
              return file.name.toLowerCase().endsWith(".svg");
            })
            .map((file) => {
              try {
                // Debug log before sanitization
                // console.log(`Sanitizing ${type} file:`, file.name);

                const sanitizedName = sanitizeFileName(file.name);

                // Debug log after sanitization
                // console.log(`Sanitized name:`, sanitizedName);

                if (!sanitizedName) {
                  console.warn("Failed to sanitize filename:", file.name);
                  return null;
                }
                return { file, name: sanitizedName, originalName: file.name };
              } catch (error) {
                console.error(
                  `Error processing ${type} file:`,
                  file.name,
                  error
                );
                return null;
              }
            })
            .filter(
              (
                item
              ): item is { file: File; name: string; originalName: string } => {
                if (!item) {
                  return false;
                }
                // Additional validation
                const isValid = Boolean(
                  item.name && item.file && item.originalName
                );
                if (!isValid) {
                  console.warn("Invalid file entry:", item);
                }
                return isValid;
              }
            );

          // Sort files by name
          fileQueue.sort((a, b) => a.name.localeCompare(b.name));

          // Debug log sorted files
          console.log(
            `Sorted ${type} files:`,
            fileQueue.map((f) => ({
              original: f.originalName,
              sanitized: f.name,
            }))
          );

          const newState = {
            files: [] as File[],
            svgs: [] as string[],
            names: [] as string[],
          };

          let processed = 0;
          const total = fileQueue.length;

          if (total === 0) {
            console.warn(`No valid ${type} SVG files found`);
            setState((prev) => ({
              ...prev,
              error: "No valid SVG files found",
            }));
            resolve();
            return;
          }

          fileQueue.forEach(({ file, name }) => {
            const reader = new FileReader();

            reader.onload = (e) => {
              try {
                const content = e.target?.result;
                if (typeof content === "string") {
                  newState.files.push(file);
                  newState.svgs.push(cleanupSvg(content));
                  newState.names.push(name);
                }
              } catch (error) {
                console.error(`Error processing ${type} SVG:`, name, error);
              }

              processed++;
              if (processed === total) {
                // Debug log final state
                console.log(`Final ${type} state:`, {
                  files: newState.files.length,
                  names: newState.names,
                  svgs: newState.svgs.length,
                });

                setState((prev) => ({
                  ...prev,
                  ...newState,
                  error: null,
                }));
                resolve();
              }
            };

            reader.onerror = () => {
              console.error(`Error reading ${type} file:`, name);
              processed++;
            };

            reader.readAsText(file);
          });
        } catch (error) {
          console.error(`Error in ${type} processFiles:`, error);
          setState((prev) => ({ ...prev, error: "Failed to process files" }));
          resolve();
        }
      });
    },
    [type]
  );

  const actions: FileHandlerActions = {
    handleFiles: useCallback(
      async (acceptedFiles: File[]) => {
        const sortedFiles = [...acceptedFiles].sort((a, b) =>
          sanitizeFileName(a.name).localeCompare(sanitizeFileName(b.name))
        );
        await processFiles(sortedFiles);
      },
      [processFiles]
    ),

    handleRejected: useCallback((rejections: FileRejection[]) => {
      setState((prev) => ({
        ...prev,
        error: "Invalid file type. Please upload SVG files.",
      }));
    }, []),

    clearFiles: useCallback(() => {
      setState({
        files: [],
        svgs: [],
        names: [],
        error: null,
      });
    }, []),

    removeFile: useCallback((index: number) => {
      setState((prev) => ({
        ...prev,
        files: prev.files.filter((_, i) => i !== index),
        svgs: prev.svgs.filter((_, i) => i !== index),
        names: prev.names.filter((_, i) => i !== index),
      }));
    }, []),
  };

  return { ...state, ...actions };
};
