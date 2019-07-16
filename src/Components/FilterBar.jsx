import React from "react";

import "../App.css";
const FilterBar = () => {
  return (
    <div className="FilterBar">
      <label>Articles per Page: </label>

      <select>
        <option>10</option>
      </select>
    </div>
  );
};

export default FilterBar;
