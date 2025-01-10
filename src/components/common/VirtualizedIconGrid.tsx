import React, { memo, useCallback } from "react";
import type { Virtualizer, VirtualItem } from "@tanstack/react-virtual";
import type { IconMetadata, IconStyle } from "@/types";
import { toast } from "sonner";
import { VIRTUALIZATION_CONFIG, CONTAINER } from "@/constants/virtualization";
import { IconCard } from "./IconCard";

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
        <div ref={containerRef} className="relative w-full">
          <div
            style={{ height: virtualizer.getTotalSize(), position: "relative" }}
          >
            {virtualizer.getVirtualItems().map(renderVirtualRow)}
          </div>
          {isLoading && (
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
              Loading more icons...
            </div>
          )}
        </div>
      </div>
    );
  }
);

VirtualizedIconGrid.displayName = "VirtualizedIconGrid";
