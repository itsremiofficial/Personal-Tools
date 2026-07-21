import React, { useState, useEffect } from "react";
import { cn } from "@/lib";
import * as iv02 from "@/components/icons/version02";
import * as iv01 from "@/components/icons/version01";
import { LoadingSpinner } from "./LoadingSpinner";
import { motion, AnimatePresence } from "motion/react";

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
      "w-full h-14 pl-12 pr-10 text-sm transition-colors border border-border rounded-full",
      "bg-background",
      "placeholder:text-muted-foreground",
      "text-foreground",
      "focus-visible:outline-none focus-visible:ring focus-visible:ring-ring focus-visible:border-ring",
    ),
    minimal: cn(
      "w-full h-9 pl-9 pr-9 rounded-lg text-sm transition-colors",
      "bg-muted border-none",
      "placeholder:text-muted-foreground",
      "text-foreground",
      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
    ),
    embedded: cn(
      "w-full h-14 pl-10 pr-10 text-sm transition-colors border-b border-border/40",
      "bg-transparent",
      "placeholder:text-muted-foreground",
      "text-foreground",
      "focus-visible:outline-none",
    ),
  };

  return (
    <div className={cn("relative w-full", className)}>
      <form
        className={cn(
          "relative w-full transition-opacity duration-200",
          isVisible ? "opacity-100" : "hidden sm:block opacity-90",
          isFocused && "opacity-100",
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
            aria-label={placeholder}
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value.toLowerCase())}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <div className="absolute left-2 top-0 bottom-0 flex items-center pointer-events-none">
            {isLoading ? (
              <LoadingSpinner className="size-5 text-muted-foreground" />
            ) : (
              <iv02.IconSearchStatus
                duotone={variant === "embedded" && false}
                className={cn(
                  "size-5 text-muted-foreground",
                  variant === "embedded" && "size-5.5",
                )}
              />
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
                {(variant === "minimal" || variant === "default") && (
                  <button
                    onClick={() => onSearch("")}
                    aria-label="Clear search"
                    className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors duration-300"
                  >
                    <iv01.IconClose className="w-5 h-5" />
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>
    </div>
  );
};
