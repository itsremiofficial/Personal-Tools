import React, { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib";
import * as iv02 from "@/components/icons/version02";
import * as iv01 from "@/components/icons/version01";
import { LoadingSpinner } from "./LoadingSpinner";
import { motion, AnimatePresence } from "motion/react";
import { getSuggestions } from "@/lib/aiSearch";

interface SearchBarProps {
  searchQuery: string;
  onSearch: (query: string) => void;
  isVisible: boolean;
  onToggleVisibility: (visible: boolean) => void;
  isLoading?: boolean;
  placeholder?: string;
  className?: string;
  variant?: "default" | "minimal" | "embedded";
  resultCount?: number;
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
  resultCount,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<
    { name: string; version: string }[]
  >([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const suggestionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const announcementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isVisible]);

  const loadSuggestions = useCallback(async (query: string) => {
    if (suggestionTimerRef.current) clearTimeout(suggestionTimerRef.current);
    if (query.length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    suggestionTimerRef.current = setTimeout(async () => {
      try {
        const results = await getSuggestions(query);
        setSuggestions(results);
        setShowSuggestions(results.length > 0);
        setSelectedSuggestionIndex(-1);
      } catch {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 150);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    onSearch(value);
    loadSuggestions(value);
  };

  const selectSuggestion = (name: string) => {
    const displayName = name
      .replace(/^Icon/, "")
      .replace(/([A-Z])/g, " $1")
      .trim();
    onSearch(displayName.toLowerCase());
    setSuggestions([]);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions || suggestions.length === 0) {
      if (e.key === "Escape") {
        inputRef.current?.blur();
        onToggleVisibility(false);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedSuggestionIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : 0,
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedSuggestionIndex((prev) =>
          prev > 0 ? prev - 1 : suggestions.length - 1,
        );
        break;
      case "Enter":
        e.preventDefault();
        if (selectedSuggestionIndex >= 0) {
          selectSuggestion(suggestions[selectedSuggestionIndex].name);
        } else {
          onToggleVisibility(false);
          setShowSuggestions(false);
        }
        break;
      case "Escape":
        e.preventDefault();
        setShowSuggestions(false);
        setSelectedSuggestionIndex(-1);
        inputRef.current?.blur();
        onToggleVisibility(false);
        break;
      case "Tab":
        setShowSuggestions(false);
        break;
    }
  };

  const clear = () => {
    onSearch("");
    setSuggestions([]);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  useEffect(() => {
    return () => {
      if (suggestionTimerRef.current) clearTimeout(suggestionTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const announceSearchResults = useCallback((count: number, query: string) => {
    if (announcementRef.current) {
      announcementRef.current.textContent = `${count} results for ${query}`;
    }
  }, []);

  useEffect(() => {
    if (resultCount !== undefined && searchQuery) {
      announceSearchResults(resultCount, searchQuery);
    }
  }, [resultCount, searchQuery, announceSearchResults]);

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
      "w-full h-18 pl-12 pr-10 text-base transition-colors",
      "bg-transparent",
      "placeholder:text-muted-foreground",
      "text-foreground",
      "focus-visible:outline-none",
    ),
  };

  const listboxId = "search-suggestions";

  return (
    <div className={cn("relative w-full", className)}>
      <div
        className={cn(
          "relative w-full transition-opacity duration-200",
          isVisible ? "opacity-100" : "hidden sm:block opacity-90",
          isFocused && "opacity-100",
        )}
      >
        <div
          className="relative"
          role="combobox"
          aria-expanded={showSuggestions}
          aria-haspopup="listbox"
          aria-controls={listboxId}
        >
          <input
            ref={inputRef}
            type="text"
            className={variantClasses[variant]}
            autoFocus={isVisible}
            placeholder={placeholder}
            aria-label={placeholder}
            aria-autocomplete="list"
            aria-controls={listboxId}
            aria-activedescendant={
              selectedSuggestionIndex >= 0
                ? `suggestion-${selectedSuggestionIndex}`
                : undefined
            }
            value={searchQuery}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              setIsFocused(true);
              if (suggestions.length > 0) setShowSuggestions(true);
            }}
            onBlur={() => setIsFocused(false)}
          />
          <div className="absolute left-2 top-0 bottom-0 flex items-center pointer-events-none">
            {isLoading ? (
              <LoadingSpinner className="size-6 text-muted-foreground" />
            ) : (
              <iv02.IconSearchStatus
                duotone={variant === "embedded" && false}
                className={cn(
                  "size-5 text-muted-foreground",
                  variant === "embedded" && "size-6.5",
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
                    onClick={clear}
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
      </div>

      <AnimatePresence>
        {showSuggestions && (
          <motion.div
            ref={suggestionsRef}
            id={listboxId}
            role="listbox"
            aria-label="Search suggestions"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.12 }}
            className={cn(
              "absolute z-50 mt-1 w-full overflow-hidden rounded-2xl border border-border bg-background shadow-lg",
              variant === "embedded" && "mt-2",
            )}
          >
            <div className="px-3 py-1.5 text-[10px] font-medium text-muted-foreground/60 uppercase tracking-wider">
              Suggestions
            </div>
            {suggestions.map((suggestion, index) => {
              const displayName = suggestion.name
                .replace(/^Icon/, "")
                .replace(/([A-Z])/g, " $1")
                .trim();
              return (
                <div
                  key={`${suggestion.name}-${suggestion.version}`}
                  id={`suggestion-${index}`}
                  role="option"
                  aria-selected={index === selectedSuggestionIndex}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2.5 text-sm cursor-pointer transition-colors",
                    index === selectedSuggestionIndex
                      ? "bg-muted/80 text-foreground"
                      : "text-muted-foreground hover:bg-muted/40 hover:text-foreground",
                  )}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    selectSuggestion(suggestion.name);
                  }}
                  onMouseEnter={() => setSelectedSuggestionIndex(index)}
                >
                  <span className="text-xs text-muted-foreground/50 font-mono">
                    {suggestion.version}
                  </span>
                  <span className="font-medium">{displayName}</span>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <div
        ref={announcementRef}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />
    </div>
  );
};
