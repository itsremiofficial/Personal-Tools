import { sanitizeFileName } from "@/utils";
import { useState, useCallback } from "react";
import { FileRejection } from "react-dropzone";
import cleanupSvg from "./cleanupSvg";
import { toast } from "sonner";

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

export type FileHandlerType = {
  files: File[];
  names: string[];
  svgs: string[];
  type: "lineDuotone" | "boldDuotone" | "bold";
  handleFiles: (acceptedFiles: File[]) => void;
  handleRejected: (fileRejections: FileRejection[]) => void;
  removeFile: (index: number) => void;
  clearFiles: () => void;
};

export const useFileHandler = (
  type: "lineDuotone" | "boldDuotone" | "bold"
): FileHandlerType => {
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
          // console.log(
          //   `Processing ${type} files:`,
          //   files.map((f) => f.name)
          // );

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
          // console.log(
          //   `Sorted ${type} files:`,
          //   fileQueue.map((f) => ({
          //     original: f.originalName,
          //     sanitized: f.name,
          //   }))
          // );

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
                // console.log(`Final ${type} state:`, {
                //   files: newState.files.length,
                //   names: newState.names,
                //   svgs: newState.svgs.length,
                // });

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
        try {
          // Validate files before processing
          const invalidFiles = acceptedFiles.filter(
            (file) => !file.type.includes("svg")
          );

          if (invalidFiles.length > 0) {
            toast.error(
              `Invalid file type${
                invalidFiles.length > 1 ? "s" : ""
              }. Please upload SVG files only.`
            );
            return;
          }

          // Sort and merge with existing files
          const sortedNewFiles = [...acceptedFiles].sort((a, b) =>
            sanitizeFileName(a.name).localeCompare(sanitizeFileName(b.name))
          );

          // Process files
          await processFiles(sortedNewFiles);
        } catch (error) {
          toast.error("Error processing files. Please try again.");
          console.error("File handling error:", error);
        }
      },
      [processFiles]
    ),

    handleRejected: useCallback((rejections: FileRejection[]) => {
      setState((prev) => ({
        ...prev,
        error: "Invalid file type. Please upload SVG files only.",
      }));

      // Show error toast for rejected files
      if (rejections.length > 0) {
        toast.error(
          `${rejections.length} file${
            rejections.length > 1 ? "s" : ""
          } rejected. Only SVG files are allowed.`
        );
      }
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

  return {
    ...state,
    ...actions,
    type, // Add the type property here
  };
};
