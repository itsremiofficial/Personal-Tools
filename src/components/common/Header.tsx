import React from "react";
import { SearchBar } from "./SearchBar";

interface HeaderProps {
  count: number;
  searchProps: {
    searchQuery: string;
    onSearch: (query: string) => void;
    isVisible: boolean;
    onToggleVisibility: (visible: boolean) => void;
  };
}

export const Header: React.FC<HeaderProps> = ({ count, searchProps }) => (
  <div className="panel-header flex w-full justify-between items-center">
    <h5 className="text-xl font-semibold dark:text-icu-500">
      Icons List ({count})
    </h5>
    <SearchBar {...searchProps} />
  </div>
);
