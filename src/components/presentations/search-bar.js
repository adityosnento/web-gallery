import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParam: ""
    };
  }

  handleSearch(e) {
    this.setState({ searchParam: e.target.value });
  }

  handleGoClick() {
    this.props.history.push("/search/" + this.state.searchParam);
  }

  render() {
    return (
      <div className="search-bar transition">
        <form onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            size="45"
            autofocus
            placeholder="Search photos"
            onChange={this.handleSearch.bind(this)}
            value={this.state.searchParam}
            className="bar transition"
          />
          <button
            className="search"
            type="submit"
            onClick={this.handleGoClick.bind(this)}
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
