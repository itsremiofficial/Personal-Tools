import React from "react";
import { cn } from "@/hooks";
import { IconClose } from "./icons/version01";

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
            {files.map((file: File, index: number) => (
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
        "absolute -right-2.5 -top-2 rounded-full p-0.5 z-1 transition-colors duration-300",
        "bg-icu-400/50 hover:bg-icu-400/80",
        "dark:bg-rose-950/30 dark:hover:bg-rose-900/40",
        "dark:text-rose-500 dark:hover:text-rose-400",
        !disabled && "cursor-pointer"
      )}
    >
      <IconClose className="size-5 stroke-3" duotone={false} />
    </button>
  </div>
));

FileList.displayName = "FileList";
FileItem.displayName = "FileItem";
