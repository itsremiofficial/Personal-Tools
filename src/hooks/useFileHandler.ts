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

  const actions: FileHandlerActions = {
    handleFiles: useCallback((acceptedFiles: File[]) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result as string;
          setState((prev) => ({
            ...prev,
            svgs: [...prev.svgs, cleanupSvg(content)],
            names: [...prev.names, sanitizeFileName(file.name)],
          }));
        };
        reader.readAsText(file);
      });

      setState((prev) => ({
        ...prev,
        files: [...prev.files, ...acceptedFiles],
      }));
    }, []),

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
