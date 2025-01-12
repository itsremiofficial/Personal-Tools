import React, { memo, useCallback } from "react";
import type { Virtualizer, VirtualItem } from "@tanstack/react-virtual";
import { toast } from "sonner";
import { VIRTUALIZATION_CONFIG, CONTAINER } from "@/constants/virtualization";
import { IconCard } from "./IconCard";
import { LoadingSpinner } from "./LoadingSpinner"; // Add this import

interface VirtualizedIconGridProps {
  parentRef: React.RefObject<HTMLDivElement>;
  containerRef: React.RefObject<HTMLDivElement>;
  virtualizer: Virtualizer<HTMLDivElement, Element>;
  filteredIcons: IconMetadata[];
  columns: number;
  isLoading: boolean;
  onScroll: () => void;
  globalStyle: IconStyle;
  onStyleChange: (name: string, style: IconStyle) => void;
  onDownload: (name: string, version: string) => Promise<void>;
  isSearching?: boolean; // Add this prop
  searchQuery?: string; // Add this line
}

export const VirtualizedIconGrid = memo(
  ({
    parentRef,
    containerRef,
    virtualizer,
    filteredIcons,
    columns,
    isLoading,
    onScroll,
    globalStyle,
    onStyleChange,
    onDownload,
    isSearching = false,
    searchQuery = "",
  }: VirtualizedIconGridProps) => {
    const handleCopy = useCallback(async (name: string, style: IconStyle) => {
      const componentCode = `<${name} ${
        style === "line"
          ? ""
          : style === "bulk"
            ? "fill={true}"
            : "duotone={false} fill={true}"
      }/>`;

      try {
        await navigator.clipboard.writeText(componentCode);
        toast.success(`${name} copied!`);
      } catch {
        toast.error("Failed to copy");
      }
    }, []);

    const renderVirtualRow = useCallback(
      (virtualRow: VirtualItem) => {
        const startIndex = virtualRow.index * columns;
        const rowIcons = filteredIcons.slice(startIndex, startIndex + columns);

        return (
          <div
            key={virtualRow.index}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              transform: `translateY(${virtualRow.start}px)`,
              display: "grid",
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
              gap: VIRTUALIZATION_CONFIG.GAP,
            }}
            data-index={virtualRow.index}
          >
            {rowIcons.map((icon) => (
              <IconCard
                key={`${icon.name}-${icon.version}`}
                {...icon}
                currentStyle={globalStyle}
                onStyleChange={(style) => onStyleChange(icon.name, style)}
                onCopy={() => handleCopy(icon.name, globalStyle)}
                onDownload={() => onDownload(icon.name, icon.version)}
              />
            ))}
          </div>
        );
      },
      [
        columns,
        filteredIcons,
        globalStyle,
        handleCopy,
        onStyleChange,
        onDownload,
      ]
    );

    return (
      <div
        ref={parentRef}
        style={CONTAINER}
        onScroll={onScroll}
        className="scroll-smooth"
      >
        {isSearching ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center flex items-center flex-col gap-2">
              <LoadingSpinner className="w-8 h-8 mb-2" />
              <p className="text-icu-600 dark:text-icu-500">
                {searchQuery ? "Searching Icons" : "Loading All Icons"}
              </p>
            </div>
          </div>
        ) : isLoading && filteredIcons.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <LoadingSpinner className="w-8 h-8" />
          </div>
        ) : (
          <div ref={containerRef} className="relative w-full">
            <div
              style={{
                height: virtualizer.getTotalSize(),
                position: "relative",
              }}
            >
              {virtualizer.getVirtualItems().map(renderVirtualRow)}
            </div>
            {isLoading && (
              <div className="sticky bottom-0 left-0 right-0 p-4 text-center bg-gradient-to-t from-icu-100/90 to-transparent dark:from-icu-1000/90">
                <LoadingSpinner className="w-6 h-6 inline-block mr-2" />
                Loading more icons...
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

VirtualizedIconGrid.displayName = "VirtualizedIconGrid";
