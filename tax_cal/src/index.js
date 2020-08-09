// import React from "react";
// import { render } from "react-dom";

// // render takes two arguments: first one is the component and second one is the location.
// //React.CreateElement is a top-level React API. It creates elements, no JSX invloved.
// render(
//   React.createElement("div", null, "Hello World"),
//   document.getElementById("root")
// );

import React from "react";
import { render } from "react-dom";
import App from "./App.js";
render(<App />, document.getElementById("root"));
