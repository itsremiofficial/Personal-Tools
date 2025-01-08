import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { IconCard } from "./IconCard";
import type { Virtualizer, VirtualItem } from "@tanstack/react-virtual";
import type { IconMetadata, IconStyle } from "@/types";
import { toast } from "sonner";
import { VIRTUALIZATION_CONFIG, CONTAINER } from "@/constants/virtualization";

interface VirtualizedIconGridProps {
  parentRef: React.RefObject<HTMLDivElement>;
  containerRef: React.RefObject<HTMLDivElement>;
  virtualizer: Virtualizer<HTMLDivElement, Element>;
  filteredIcons: IconMetadata[];
  columns: number;
  iconStyles: Record<string, IconStyle>;
  setIconStyles: React.Dispatch<
    React.SetStateAction<Record<string, IconStyle>>
  >;
}

export const VirtualizedIconGrid = memo(
  ({
    parentRef,
    containerRef,
    virtualizer,
    filteredIcons,
    columns,
    iconStyles,
    setIconStyles,
  }: VirtualizedIconGridProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [renderedItems, setRenderedItems] = useState<Map<number, boolean>>(
      new Map()
    );
    const lastScrollTime = useRef(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
        virtualizer.measure(); // Force measure after loading
      }, 500);
      return () => clearTimeout(timer);
    }, [virtualizer]);

    const handleScroll = useCallback(
      (e: Event) => {
        const now = performance.now();
        if (
          now - lastScrollTime.current <
          VIRTUALIZATION_CONFIG.SCROLL_UPDATE_INTERVAL
        )
          return;

        lastScrollTime.current = now;
        virtualizer.measure();

        // Update rendered items map
        const visibleIndexes = virtualizer
          .getVirtualItems()
          .map((item) => item.index);
        setRenderedItems((prev) => {
          const next = new Map(prev);
          visibleIndexes.forEach((index) => next.set(index, true));
          return next;
        });
      },
      [virtualizer]
    );

    useEffect(() => {
      const parent = parentRef.current;
      if (!parent) return;

      const options = { passive: true };
      parent.addEventListener("scroll", handleScroll, options);
      return () => parent.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const handleCopy = useCallback(
      async (iconName: string, style: IconStyle) => {
        const props = {
          line: "",
          bulk: "fill={true}",
          bold: "duotone={false} fill={true}",
        };
        const code = `<${iconName} ${props[style]}/>`;

        try {
          await navigator.clipboard.writeText(code);
          toast.success(`${iconName} copied!`);
        } catch (err) {
          toast.error("Failed to copy");
        }
      },
      []
    );
    const handleDownload = useCallback(async (iconName: string, version: string) => {
      try {
        const cleanIconName = iconName.replace("Icon", "");
        const baseUrl = import.meta.env.BASE_URL.endsWith('/') 
          ? import.meta.env.BASE_URL 
          : `${import.meta.env.BASE_URL}/`;
        
        const formattedVersion = version.replace(
          /^v(\d+)$/,
          (_, num) => `version${num.padStart(2, '0')}`
        );
        
        // This will resolve to /Personal-Tools/icons/version01/MyIcon.tsx in production
        const iconUrl = `${baseUrl}icons/${formattedVersion}/${cleanIconName}.tsx`;
        
        const response = await fetch(iconUrl);

          if (!response.ok) {
            throw new Error(`Failed to download: ${response.statusText}`);
          }

          const content = await response.text();
          const blob = new Blob([content], { type: "text/typescript" });
          const url = URL.createObjectURL(blob);

          const a = document.createElement("a");
          a.href = url;
          a.download = `${cleanIconName}.tsx`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);

          toast.success(`${iconName} downloaded!`);
        } catch (err) {
          console.error("Download error:", err);
          toast.error("Failed to download icon");
        }
      },
      []
    );

    const getRowStyle = useCallback(
      (virtualRow: VirtualItem): React.CSSProperties => ({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        transform: `translateY(${virtualRow.start}px)`,
        height: VIRTUALIZATION_CONFIG.ROW_HEIGHT,
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, minmax(${VIRTUALIZATION_CONFIG.MIN_COLUMN_WIDTH}px, 1fr))`,
        gap: VIRTUALIZATION_CONFIG.GAP,
        padding: `${VIRTUALIZATION_CONFIG.ROW_GAP}px 0`,
      }),
      [columns]
    );

    // Add style change handler
    const handleStyleChange = useCallback(
      (name: string, style: IconStyle) => {
        setIconStyles((prev) => ({
          ...prev,
          [name]: style,
        }));
      },
      [setIconStyles]
    );

    return (
      <div ref={parentRef} style={CONTAINER} className="scroll-smooth">
        <div ref={containerRef} className="relative w-full">
          <div
            style={{
              height: virtualizer.getTotalSize(),
              width: "100%",
              position: "relative",
            }}
          >
            {virtualizer.getVirtualItems().map((virtualRow) => {
              const startIndex = virtualRow.index * columns;
              const endIndex = Math.min(
                startIndex + columns,
                filteredIcons.length
              );
              const rowIcons = filteredIcons.slice(startIndex, endIndex);

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
                >
                  {rowIcons.map((icon) => {
                    // console.log(icon);
                    return (
                      <IconCard
                        key={`${icon.name}-${icon.version}`}
                        {...icon}
                        currentStyle={iconStyles[icon.name] || "line"}
                        onStyleChange={(style) =>
                          handleStyleChange(icon.name, style)
                        }
                        onCopy={() =>
                          handleCopy(icon.name, iconStyles[icon.name] || "line")
                        }
                        onDownload={() =>
                          handleDownload(icon.name, icon.version)
                        }
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
);

VirtualizedIconGrid.displayName = "VirtualizedIconGrid";
