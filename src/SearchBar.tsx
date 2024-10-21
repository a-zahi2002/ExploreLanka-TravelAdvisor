import React, { useState } from "react";
import "./SearchBar.css";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  suggestions: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, suggestions }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    onSearch(suggestion);
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

      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="suggestions-dropdown">
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
