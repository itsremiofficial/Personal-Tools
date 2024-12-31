import React from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import { CloudUploadIcon } from "hugeicons-react";
import { cn } from "../hooks";

interface FileDropzoneProps {
  onDrop: (files: File[]) => void;
  onReject: (rejections: FileRejection[]) => void; // Update type to match handler
  label: string;
  accept: Record<string, string[]>;
  disabled?: boolean;
  className?: string;
}

export const FileDropzone = React.memo(
  ({
    onDrop,
    onReject,
    label,
    accept,
    disabled = false,
    className,
  }: FileDropzoneProps) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      onDropRejected: onReject, // Match the handler type
      accept,
      multiple: true,
      disabled,
    });

    return (
      <div
        className={cn(
          "p-6 border rounded-4xl flex flex-col gap-6 grow",
          "border-icu-300 bg-icu-100",
          "dark:border-icu-800/70 dark:bg-icu-1000/40"
        )}
      >
        <div
          {...getRootProps()}
          className={cn(
            "border-2 border-dashed p-6 pb-10 rounded-3xl cursor-pointer transition-colors duration-500 group/input",
            "border-icu-300/70 hover:border-icu-400",
            "dark:border-icu-800/70 dark:hover:border-icu-800",
            "hover:bg-icu-300/70",
            "dark:hover:bg-icu-800/40",
            isDragActive &&
              "border-icu-400 bg-icu-300/70 dark:border-icu-800 dark:bg-icu-800/40",
            disabled && "cursor-not-allowed opacity-50",
            !disabled && "cursor-pointer",
            className
          )}
        >
          <input {...getInputProps()} className="hidden" />
          <label
            className={cn(
              "px-3 py-1 rounded-full text-sm border tracking-widest",
              "border-icu-400 group-hover/input:border-icu-600/60",
              "text-icu-600 group-hover/input:!text-icu-700",
              "dark:border-icu-800/70 group-hover/input:dark:border-icu-700/60",
              "dark:!text-icu-600/80 group-hover/input:dark:!text-icu-500",
              "transition-colors duration-500",
              isDragActive &&
                "!text-icu-700 border-icu-600/60 dark:!text-icu-500 dark:border-icu-700/60"
            )}
          >
            {label}
          </label>
          <div
            className={cn(
              "flex gap-2 flex-col items-center justify-center text-center",
              "text-icu-700 group-hover/input:text-icu-900",
              "dark:text-icu-700 dark:group-hover/input:text-icu-500",
              "transition-colors duration-500",
              isDragActive && "text-icu-900 dark:text-icu-500"
            )}
          >
            <CloudUploadIcon className="size-14" />
            <p>Drag and drop files here, or click to select files</p>
            <p className="text-sm text-icu-600 dark:text-icu-500">
              Supports SVG files only
            </p>
          </div>
        </div>
      </div>
    );
  }
);

FileDropzone.displayName = "FileDropzone";
