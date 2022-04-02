import React from "react";

//destructuring the props
const Search = ({ search, setSearch }) => {
  return (
    <div className="sidebar-widget widget-search">
      <input
        type="text"
        className="form-control"
        placeholder="Search here"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
