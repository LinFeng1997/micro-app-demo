import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";

// 👇 将渲染操作放入 mount 函数
export function mount() {
  console.log("children mount");
  ReactDOM.render(<App />, document.getElementById("root"));
}

// 👇 将卸载操作放入 unmount 函数
export function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById("root"));
}

// 微前端环境下，注册mount和unmount方法
if (window.__MICRO_APP_ENVIRONMENT__) {
  window[`micro-app-${window.__MICRO_APP_NAME__}`] = { mount, unmount };
} else {
  // 非微前端环境直接渲染
  mount();
}

// 非 umd 模式
// ReactDOM.render(<App />, document.getElementById("root"))
