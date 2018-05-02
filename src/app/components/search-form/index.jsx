import React from "react";
import style from "../../../styles/_styles.styl";

class SearchForm extends React.Component {
  render() {
    return pug`
      form(className=${style.form})
        p Form component
        button(className="primaryButton") Submit
    `
  }
}

export default SearchForm;
