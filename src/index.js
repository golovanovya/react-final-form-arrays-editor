import React from "react";
import { render } from "react-dom";
import { Main } from "./Main";
import { EditorList } from "./EditorList/EditorList";
const App = () => {
  return (
    <div>
      <Main />
      <EditorList />
    </div>
  );
};

render(<App />, document.getElementById("root"));
