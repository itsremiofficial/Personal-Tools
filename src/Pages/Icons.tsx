/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/hooks";
import React, { useState, useMemo } from "react";
import { toast } from "sonner";
import * as Iconss from "@/components/icons";

const IconsList = () => {
  const copyIconCode = (iconName = "", fill = false) => {
    const code = `<${iconName} ${fill ? "fill={true}" : ""}/>`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          showSuccessToast(iconName, "success");
        })
        .catch((err) => {
          showSuccessToast(iconName, "error");
          console.error("Failed to copy: ", err);
        });
    } else {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        showSuccessToast(iconName, "success");
      } catch (err) {
        showSuccessToast(iconName, "error");
        console.error("Fallback copy failed: ", err);
      }
      document.body.removeChild(textArea);
    }
  };

  const showSuccessToast = (iconName: string, type: string) => {
    if (type === "success") {
      return toast.success(`${iconName} copied!`);
    } else if (type === "error") {
      return toast.error(`${iconName} copied!`);
    }
  };

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredIcons = useMemo(() => {
    return Object.entries(Iconss).filter(([name, Icon]) => {
      const iconComponent = Icon as any;
      const keywords = iconComponent.keywords || [];
      const searchTerms = searchQuery.toLowerCase().split(" ");

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
    <div className="flex items-center max-[600px]:justify-between flex-wrap gap-lg-5 gap-3 mb-5">
      {icons.length > 0 ? (
        icons.map(([name, Icon]) => (
          <div
            key={name}
            className="grid place-content-center"
            onClick={() => copyIconCode(name, fill)}
            title={`Keywords: ${
              (Icon as any).keywords?.join(", ") || "No keywords"
            }`}
          >
            <Icon
              className={cn(
                "w-16 h-16 rounded-2xl text-2xl cursor-pointer transition-all duration-300 linear p-4",
                "bg-gray-200 hover:bg-gray-300 text-icu-600 hover:text-icu-800",
                "dark:bg-icu-800/30 dark:text-icu-600 dark:hover:bg-icu-800/70 dark:hover:text-icu-200"
              )}
              fill={fill}
            />
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
          <div className="mb-5">
            <form
              className={`${
                isSearchVisible && "!block"
              } sm:relative absolute inset-x-0 sm:top-0 top-1/2 sm:translate-y-0 -translate-y-1/2 sm:mx-0 mx-4 z-10 sm:block hidden`}
              onSubmit={(e) => {
                e.preventDefault();
                setIsSearchVisible(false);
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
                  placeholder={`${"Search"}...`}
                  value={searchQuery}
                  onInput={handleInputChange}
                />
                <button
                  type="button"
                  className="absolute h-full w-8 pl-3 inset-0 appearance-none text-icu-800 peer-focus:text-icu-600 transition duration-300"
                >
                  <Iconss.IconActivity className="mx-auto w-5 h-5" />
                </button>
              </div>
            </form>
            <button
              type="button"
              onClick={() => setIsSearchVisible(!isSearchVisible)}
              className="search_btn sm:hidden p-4 rounded-full bg-icu-600 dark:bg-icu-500 hover:bg-icu-500 dark:hover:bg-icu-500"
            >
              <Iconss.IconActivity className="w-3.5 h-3.5 mx-auto dark:text-icu-200" />
            </button>
          </div>
        </div>

        <div className="mb-5">
          <div className="bg-[#03bd87]/[.16] text-[#03bd87] py-1 px-3 rounded-xl inline-block text-base mb-5">
            Line Duotone {Object.entries(Iconss).length}
          </div>
          {renderIconGroup(filteredIcons)}

          <div className="bg-[#03bd87]/[.16] text-[#03bd87] py-1 px-3 rounded-xl inline-block text-base mb-5">
            Bold Duotone
          </div>
          {renderIconGroup(filteredIcons, true)}
        </div>
      </div>
    </div>
  );
};

export default IconsList;
