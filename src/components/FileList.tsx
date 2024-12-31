import React from "react";
import { Button } from "./ui/button";
import { Cancel01Icon, Delete03Icon } from "hugeicons-react";
import { FileHandlerType } from "../hooks/useFileHandler";
import { cn } from "../hooks";

interface FileListProps extends Omit<FileHandlerType, "handleRejected"> {
  type: "stroke" | "duotone";
  disabled?: boolean;
  onClear: () => void;
}

export const FileList = React.memo(
  ({ files, disabled, removeFile, clearFiles, onClear }: FileListProps) => {
    if (!files.length) return null;

    const handleClear = () => {
      clearFiles();
      onClear();
    };

    return (
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "grow border border-dashed mt-2 flex py-4 px-4 rounded-2xl gap-6 overflow-auto",
            "border-icu-300/70 dark:border-icu-800/40",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          {files.map((file, index) => (
            <FileItem
              key={`${file.name}-${index}`}
              file={file}
              onRemove={() => !disabled && removeFile(index)}
              disabled={disabled}
            />
          ))}
        </div>
        <Button
          onClick={handleClear} // Use the combined clear function
          variant="danger"
          className="h-fit py-4 gap-2 whitespace-nowrap"
          disabled={disabled}
        >
          Clear All <Delete03Icon className="size-5" />
        </Button>
      </div>
    );
  }
);

interface FileItemProps {
  file: File;
  onRemove: () => void;
  disabled?: boolean;
}

const FileItem = React.memo(({ file, onRemove, disabled }: FileItemProps) => (
  <div
    className={cn(
      "relative py-4 px-8 rounded-2xl text-sm flex items-center whitespace-nowrap",
      "bg-icu-300/70 dark:bg-icu-800/50",
      "text-icu-900 dark:text-icu-500",
      disabled && "opacity-50"
    )}
  >
    {file.name}
    <button
      onClick={onRemove}
      disabled={disabled}
      className={cn(
        "absolute -right-1 -top-1 rounded-full p-1.5",
        "bg-icu-400/50 hover:bg-icu-400/80",
        "dark:bg-icu-1100/30 dark:hover:bg-icu-1100/40",
        !disabled && "cursor-pointer"
      )}
    >
      <Cancel01Icon className="size-3.5 stroke-3" />
    </button>
  </div>
));

FileList.displayName = "FileList";
FileItem.displayName = "FileItem";
