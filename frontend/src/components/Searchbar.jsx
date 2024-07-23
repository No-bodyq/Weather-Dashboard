import React, { useState } from "react";

const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for cities"
        className="px-4 py-1 border shadow-md w-full focus:outline-none focus:ring-0 focus:ring-gray-600"
      />
    </form>
  );
};

export default Searchbar;
