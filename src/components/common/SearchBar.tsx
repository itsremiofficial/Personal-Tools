import React from "react";
import { cn } from "@/hooks";
import * as iv02 from "@/components/icon/version02";
import * as iv01 from "@/components/icon/version01";

interface SearchBarProps {
  searchQuery: string;
  onSearch: (query: string) => void;
  isVisible: boolean;
  onToggleVisibility: (visible: boolean) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearch,
  isVisible,
  onToggleVisibility,
}) => (
  <div>
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
            "grow rounded-3xl py-4.5 pl-14 border-[1.5px] peer w-max !ring-0 !outline-0 transition-colors duration-300",
            "bg-icu-200 border-icu-400/70 text-icu-800",
            "focus-visible:border-icu-600",
            "dark:bg-icu-900 dark:border-icu-800/70 dark:text-icu-400",
            "dark:focus-visible:border-icu-700/70 "
          )}
          autoFocus
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value.toLowerCase())}
        />
        <button
          type="button"
          className="absolute h-full w-10 pl-4 inset-0 appearance-none text-icu-800 peer-focus:text-icu-600 transition duration-300"
        >
          <iv02.IconSearchStatus className="w-7 h-7" />
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
