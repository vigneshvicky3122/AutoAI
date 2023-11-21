import React from "react";

function Navbar({ SearchItems, setSearchItems }) {
  return (
    <div className="search-bar">
      <input
        type="search"
        id="search"
        className="form-control"
        onChange={(event) => setSearchItems(event.target.value)}
        value={SearchItems}
        placeholder="Search by Name..."
      />
    </div>
  );
}

export default Navbar;
