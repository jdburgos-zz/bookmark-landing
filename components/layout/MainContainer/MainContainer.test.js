/** React core **/
import ReactDOM from "react-dom";
import React from "react";

/** Components **/
import { MainContainer } from "./MainContainer";

describe("MainContainer", () => {
  test("should renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<MainContainer />, div);
  });
});
