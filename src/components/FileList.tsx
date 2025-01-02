import React from "react";
import { Cancel01Icon } from "hugeicons-react";
import { FileItemProps, FileListProps } from "@/types";
import { cn } from "@/hooks";

export const FileList = React.memo(
  ({ files, disabled, removeFile }: FileListProps) => {
    if (!files.length) return null;

    return (
      <div
        className={cn(
          "relative rounded-2xl overflow-hidden",
          "border-2 border-dashed border-icu-300/70 dark:border-icu-800/40"
        )}
      >
        <div
          className={cn(
            "absolute w-32 inset-y-0 right-0 bg-gradient-to-r z-1 from-0% via-80% to-100%",
            "from-transparent via-icu-100 to-icu-100",
            "dark:via-icu-1000 dark:to-icu-1000"
          )}
        />
        <div
          className={cn(
            "px-4 py-2",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          <div className="flex overflow-auto py-2 gap-4 ">
            {files.map((file, index) => (
              <FileItem
                key={`${file.name}-${index}`}
                file={file}
                onRemove={() => !disabled && removeFile(index)}
                disabled={disabled}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
);

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
        "absolute -right-1 -top-1 rounded-full p-1.5 z-1",
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
