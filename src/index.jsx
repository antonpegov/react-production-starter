import React from "react";
import ReactDOM from "react-dom";
import style from "./styles/_styles.styl";
import SearchContainer from "./app/components/search-container";

const App = () => {
  return (
    <div className={style.wrapper}>
      <SearchContainer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
