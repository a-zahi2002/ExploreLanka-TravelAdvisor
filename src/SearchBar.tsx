import React, { useState } from "react";
import "./SearchBar.css";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Handles input change for search bar
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handles form submit
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm); // Calls the onSearch function passed as a prop
  };

  return (
    <div className="search-bar-container">
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for destinations..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
