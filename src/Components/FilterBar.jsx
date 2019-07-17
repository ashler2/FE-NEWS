import React from "react";

import "../App.css";
class FilterBar extends React.Component {
  state = {
    sort_by: "DateDesc"
  };
  render() {
    return (
      <div className="FilterBar">
        <form>
          <label>Articles per Page: </label>

          <select>
            <option>10</option>
          </select>
        </form>

        <form>
          <label htmlFor="SortBy"> Sort By:</label>
          <select
            id="SortBy"
            value={this.state.sort_by}
            onChange={this.handelSort}
          >
            <option value="DateDesc">Newest To Oldest</option>
            <option value="DateAsc">Oldest To Newest</option>
            <option value="CCASC">Comment Count Ascending</option>
            <option value="CCDESC">Comment Count Descending</option>
            <option value="VotesDesc">Votes Descending</option>
            <option value="VotesAsc">Votes Ascending</option>
          </select>
        </form>
      </div>
    );
  }
  handelSort = event => {
    const val = event.target.value;
    this.setState({ sort_by: val });

    this.props.setSortBy(val);
  };
}

export default FilterBar;
