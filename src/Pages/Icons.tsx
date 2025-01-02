/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/hooks";
import React, { useState, useMemo, useCallback } from "react";
import { toast } from "sonner";
import * as iv01 from "@/components/icon/version01";
import * as iv02 from "@/components/icon/version02";
import { Button } from "@/components/common/Button";

type IconsType = typeof iv01;
type IconKey = keyof IconsType;

const TOAST_MESSAGES = {
  success: (iconName: string) => `${iconName} copied!`,
  error: (iconName: string) => `Failed to copy ${iconName}`,
};

interface SearchBarProps {
  searchQuery: string;
  onSearch: (query: string) => void;
  isVisible: boolean;
  onToggleVisibility: (visible: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearch,
  isVisible,
  onToggleVisibility,
}) => (
  <div className="mb-5">
    <form
      className={`${
        isVisible && "!block"
      } sm:relative absolute inset-x-0 sm:top-0 top-1/2 sm:translate-y-0 -translate-y-1/2 sm:mx-0 mx-4 z-10 sm:block hidden`}
      onSubmit={(e) => {
        e.preventDefault();
        onToggleVisibility(false);
      }}
    >
      <div className="relative">
        <input
          type="text"
          className={cn(
            "grow rounded-3xl py-4.5 pl-10 border-[1.5px] peer w-max !ring-0 !outline-0 transition-colors duration-300",
            "bg-icu-200 border-icu-400/70 text-icu-800",
            "focus-visible:border-icu-600",
            "dark:bg-icu-900 dark:border-icu-800/70 dark:text-icu-400",
            "dark:focus-visible:border-icu-700/70"
          )}
          autoFocus
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value.toLowerCase())}
        />
        <button
          type="button"
          className="absolute h-full w-8 pl-3 inset-0 appearance-none text-icu-800 peer-focus:text-icu-600 transition duration-300"
        >
          <iv01.IconCardSearch className="mx-auto w-5 h-5" />
        </button>
      </div>
    </form>
    <button
      type="button"
      onClick={() => onToggleVisibility(!isVisible)}
      className="search_btn sm:hidden p-4 rounded-full bg-icu-600 dark:bg-icu-500 hover:bg-icu-500 dark:hover:bg-icu-500"
    >
      <iv01.IconCardSearch className="w-3.5 h-3.5 mx-auto dark:text-icu-200" />
    </button>
  </div>
);

const IconsList = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const copyIconCode = useCallback((iconName = "", fill = false) => {
    const code = `<${iconName} ${fill ? "fill={true}" : ""}/>`;

    const copyToClipboard = async () => {
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(code);
          toast.success(TOAST_MESSAGES.success(iconName));
        } else {
          throw new Error("Clipboard API not available");
        }
      } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = code;
        document.body.appendChild(textArea);

        try {
          textArea.select();
          document.execCommand("copy");
          toast.success(TOAST_MESSAGES.success(iconName));
        } catch (fallbackErr) {
          toast.error(TOAST_MESSAGES.error(iconName));
          console.error("Copy failed:", fallbackErr);
        } finally {
          document.body.removeChild(textArea);
        }
      }
    };

    copyToClipboard();
  }, []);

  const downloadIcon = useCallback(async (iconName: string) => {
    try {
      const cleanIconName = iconName.replace("Icon", "");
      const baseUrl = import.meta.env.DEV ? "" : import.meta.env.BASE_URL;
      const response = await fetch(`${baseUrl}/api/icons/${cleanIconName}`, {
        headers: {
          Accept: "text/plain",
        },
      });

      if (!response.ok) {
        throw new Error(
          response.status === 404 ? "Icon not found" : "Failed to download"
        );
      }

      const content = await response.text();
      const blob = new Blob([content], { type: "text/typescript" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${cleanIconName}.tsx`;
      a.click();

      URL.revokeObjectURL(url);
      toast.success(`${cleanIconName} downloaded!`);
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Failed to download icon"
      );
      console.error("Download failed:", err);
    }
  }, []);

  const filteredIcons = useMemo(() => {
    const searchTerms = searchQuery.split(" ");
    return Object.entries(iv01).filter(([name, Icon]) => {
      const iconComponent = Icon as any;
      const keywords = iconComponent.keywords || [];

      return searchTerms.every(
        (term) =>
          name.toLowerCase().includes(term) ||
          keywords.some((keyword: string) =>
            keyword.toLowerCase().includes(term)
          )
      );
    });
  }, [searchQuery]);

  const renderIconGroup = (icons: [string, any][], fill: boolean = false) => (
    <div className="flex items-center flex-wrap gap-lg-5 gap-3 mb-5">
      {icons.length > 0 ? (
        icons.map(([name, Icon]) => (
          <div
            key={name}
            className={cn("grow relative grid place-content-center")}
            title={`Keywords: ${
              (Icon as any).keywords?.join(", ") || "No keywords"
            }`}
          >
            <div
              className={cn(
                "flex flex-col p-2 rounded-2xl gap-2",
                "bg-gray-200 text-icu-600",
                "dark:bg-icu-1100/30 dark:text-icu-600"
              )}
            >
              <Icon
                className={cn(
                  "grow w-full h-20 rounded-2xl text-2xl transition-all duration-300 linear p-4",
                  "bg-gray-200 text-icu-600",
                  "dark:bg-icu-800/30 dark:text-icu-600"
                )}
                fill={fill}
                width={1.3}
              />
              <div
                className={cn(
                  "grow flex items-center justify-center gap-2 py-1"
                )}
              >
                <Button
                  onClick={() => copyIconCode(name, fill)}
                  size={"sm"}
                  className={cn(
                    "p-2 rounded-lg bg-white/90 hover:bg-white",
                    "dark:!text-icu-700/70 dark:hover:!text-icu-500",
                    "dark:!bg-icu-800/50 dark:hover:!bg-icu-800",
                    "transition-colors duration-200 cursor-pointer"
                  )}
                  title="Copy component"
                >
                  <iv01.IconCopy className="size-5" width={2} />
                </Button>
                <Button
                  onClick={() => downloadIcon(name)}
                  size={"sm"}
                  className={cn(
                    "p-2 rounded-lg bg-white/90 hover:bg-white",
                    "dark:!text-icu-700/70 dark:hover:!text-icu-400",
                    "dark:!bg-icu-800/50 dark:hover:!bg-icu-800",
                    "transition-colors duration-200 cursor-pointer"
                  )}
                  title="Download icon"
                >
                  <iv01.IconDownloadMinimalistic className="size-5" width={2} />
                </Button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex w-full p-2 text-center">
          <p className="text-center text-gray-500 w-full">No icons found.</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="relative flex flex-col justify-center gap-6 p-4">
      <div
        className={cn(
          "p-6 border rounded-4xl flex flex-col gap-4",
          "border-icu-300 bg-icu-100",
          "dark:border-icu-800/70 dark:bg-icu-1000/40"
        )}
      >
        <div className="panel-header flex w-full justify-between">
          <h5 className="mt-5 text-xl font-semibold dark:text-icu-500">
            Icons List
          </h5>
          <SearchBar
            searchQuery={searchQuery}
            onSearch={setSearchQuery}
            isVisible={isSearchVisible}
            onToggleVisibility={setIsSearchVisible}
          />
        </div>

        <div className="mb-5">
          <div className="bg-[#03bd87]/[.16] text-[#03bd87] py-1 px-3 rounded-xl inline-block text-base mb-5">
            Line Duotone {Object.entries(iv01).length}
          </div>
          {renderIconGroup(filteredIcons)}
        </div>
      </div>
    </div>
  );
};

export default IconsList;
