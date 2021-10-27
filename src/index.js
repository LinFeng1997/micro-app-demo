// index.js
import microApp from "@micro-zoe/micro-app";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

microApp.start();

ReactDOM.render(<App />, document.getElementById("root"));
