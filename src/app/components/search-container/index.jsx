import React from "react";
import SearchForm from "../search-form";
import SearchResult from "../search-result";

class SearchContainer extends React.Component {
  render() {
    return pug`
        SearchForm
        SearchResult
    `
  }
}

export default SearchContainer;
