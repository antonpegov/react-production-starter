import React from "react";
import style from "../../../styles/_styles.styl";

class SearchResult extends React.Component {
  render() {
    return pug`
      div(className=${style.search})
        p Search results component
        button.primaryButton Submit
    `
  }
}

export default SearchResult;
