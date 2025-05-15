import React from "react";

function FilterDropdown({ filterType, setFilterType }) {
  return (
    <select
      className="border-2 rounded-md px-2 py-2 border-gray-300"
      value={filterType}
      onChange={(e) => setFilterType(e.target.value)}
    >
      <option value="">All</option>
      <option value="movie">Movies</option>
      <option value="series">Series</option>
      <option value="episodes">Episodes</option>
    </select>
  );
}

export default FilterDropdown;
