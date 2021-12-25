/** React core **/
import ReactDOM from "react-dom";
import React from "react";

/** Components **/
import { Footer } from "./Footer";

describe("Footer", () => {
  test("should renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<Footer />, div);
  });
});
