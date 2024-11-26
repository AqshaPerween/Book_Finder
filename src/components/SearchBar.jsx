import React from 'react';

const SearchBar = ({ query, setQuery, handleSearch }) => {
  return (
    <div className="flex gap-2 my-4">
      <input
        type="text"
        className="border border-gray-300 rounded-lg px-4 py-2 w-full"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
