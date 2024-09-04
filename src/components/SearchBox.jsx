
import React from "react";

const SearchBox = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search..."
        className="p-3 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
      />
    </div>
  );   
};

export default SearchBox;

