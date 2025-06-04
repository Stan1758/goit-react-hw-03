import React from "react";

function SearchBox({ value, onChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBox;
