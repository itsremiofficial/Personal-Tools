import React from "react";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib";
import { Card } from "./common/Card";
import { toast } from "sonner";
import { IconCloudUpload } from "./icons/version01";

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
      onDrop: (acceptedFiles, _rejectedFiles) => {
        // Check for folders (size 0 and type '')
        const folders = acceptedFiles.filter(
          (file) => file.size === 0 || !file.type,
        );
        if (folders.length > 0) {
          toast.error("Folders are not allowed. Please upload SVG files only.");
          return;
        }

        // Handle valid files
        if (acceptedFiles.length > 0) {
          onDrop(acceptedFiles);
        }
      },
      onDropRejected: (rejectedFiles) => {
        // Show error for each rejected file
        rejectedFiles.forEach((rejection) => {
          const error = rejection.errors[0];
          if (error.code === "file-invalid-type") {
            toast.error(
              `"${rejection.file.name}" is not allowed. Please upload SVG files only.`,
            );
          } else {
            toast.error(`Error: ${error.message}`);
          }
        });
        onReject(rejectedFiles);
      },
      accept,
      multiple: true,
      disabled,
      noClick: disabled,
      noDrag: disabled,
      validator: (file) => {
        if (!file.type.includes("svg")) {
          return {
            code: "file-invalid-type",
            message: "Only SVG files are allowed",
          };
        }
        return null;
      },
    });

    return (
      <Card className={cn("p-2 bg-muted/20 rounded-3xl flex flex-col gap-6 grow")}>
        <div
          {...getRootProps()}
          className={cn(
            "border-2 border-dashed p-6 pb-10 rounded-3xl cursor-pointer transition-colors duration-300 group/input",
            "border-border/70 hover:border-muted-foreground/50",
            "hover:bg-muted/70",
            isDragActive &&
              "border-border bg-accent/70",
            disabled && "cursor-not-allowed opacity-50",
            !disabled && "cursor-pointer",
            className,
          )}
        >
          <input {...getInputProps()} className="hidden" />
          <label
            className={cn(
              "px-3 py-1 rounded-full text-sm border tracking-widest",
              "border-border group-hover/input:border-muted-foreground/60",
              "text-muted-foreground group-hover/input:!text-foreground",
              "transition-colors duration-300",
              isDragActive &&
                "!text-foreground border-muted-foreground/60",
            )}
          >
            {label}
          </label>
          <div
            className={cn(
              "flex gap-2 flex-col items-center justify-center text-center",
              "text-foreground group-hover/input:text-foreground",
              "transition-colors duration-300",
              isDragActive && "text-foreground",
            )}
          >
            <IconCloudUpload className="size-14" />
            <p>Drag and drop files here, or click to select files</p>
            <p className="text-sm text-muted-foreground">
              Supports SVG files only
            </p>
          </div>
        </div>
      </Card>
    );
  },
);

FileDropzone.displayName = "FileDropzone";
