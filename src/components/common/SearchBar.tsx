import React, { useState, useEffect } from "react";
import { cn } from "@/hooks";
import * as iv02 from "@/components/icons/version02";
import * as iv01 from "@/components/icons/version01";
import { LoadingSpinner } from "./LoadingSpinner";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";

interface SearchBarProps {
  searchQuery: string;
  onSearch: (query: string) => void;
  isVisible: boolean;
  onToggleVisibility: (visible: boolean) => void;
  isLoading?: boolean;
  placeholder?: string;
  className?: string;
  variant?: "default" | "minimal" | "embedded";
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearch,
  isVisible,
  onToggleVisibility,
  isLoading = false,
  placeholder = "Search icons...",
  className,
  variant = "default",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  // Auto-focus on visibility change
  useEffect(() => {
    if (isVisible && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }, [isVisible]);

  const variantClasses = {
    default: cn(
      "w-full h-10 pl-10 pr-10 rounded-xl border text-sm transition-colors",
      "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700",
      "placeholder:text-gray-500 dark:placeholder:text-gray-500",
      "text-gray-900 dark:text-gray-300",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-gray-600 focus-visible:border-gray-300 dark:focus-visible:border-gray-600"
    ),
    minimal: cn(
      "w-full h-9 pl-9 pr-9 rounded-lg text-sm transition-colors",
      "bg-gray-50 dark:bg-gray-800 border-none",
      "placeholder:text-gray-500 dark:placeholder:text-gray-500",
      "text-gray-900 dark:text-gray-300",
      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 dark:focus-visible:ring-gray-700"
    ),
    embedded: cn(
      "w-full h-10 pl-10 pr-10 rounded-lg text-sm transition-colors",
      "bg-transparent border-none",
      "placeholder:text-gray-400 dark:placeholder:text-gray-500",
      "text-gray-900 dark:text-gray-300",
      "focus-visible:outline-none"
    ),
  };

  return (
    <div className={cn("relative w-full", className)}>
      <form
        className={cn(
          "relative w-full transition-opacity duration-200",
          isVisible ? "opacity-100" : "hidden sm:block opacity-90",
          isFocused && "opacity-100"
        )}
        onSubmit={(e) => {
          e.preventDefault();
          onToggleVisibility(false);
        }}
      >
        <div className="relative">
          <input
            type="text"
            className={variantClasses[variant]}
            autoFocus={isVisible}
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value.toLowerCase())}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <div className="absolute left-3 top-0 bottom-0 flex items-center pointer-events-none">
            {isLoading ? (
              <LoadingSpinner className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            ) : (
              <iv02.IconSearchStatus className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            )}
          </div>

          <AnimatePresence>
            {searchQuery.length > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
                className="absolute right-2 top-0 bottom-0 flex items-center"
              >
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => onSearch("")}
                  className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-400"
                  aria-label="Clear search"
                >
                  <iv01.IconClose className="w-3 h-3" />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>
    </div>
  );
};
