/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from "@micro-zoe/micro-app/polyfill/jsx-custom-event";

import "./styles.css";
import { useState, useEffect } from "react";

const URL = "http://localhost:9001/";

let start;
export default function DemoPage() {
  const [isShow, setIsShow] = useState(true);
  const showIframe = location.pathname.includes("iframe");

  useEffect(() => {
    start = Date.now();
  }, []);

  const show = () => {
    start = Date.now();
    setIsShow(!isShow);
  };
  const mounted = () => {
    console.log("mounted:", Date.now() - start, "ms");
  };

  const loadIframe = () => {
    console.log("loadIframe:", Date.now() - start, "ms");
  };

  const wc = (
    <div>
      <p>wc 子应用 demo：</p>
      {isShow && <micro-app name="sandbox" url={URL} onMounted={mounted} />}
    </div>
  );

  const iframe = (
    <div>
      <p>iframe 子应用：</p>

      {isShow && <iframe src={URL} onLoad={loadIframe} />}
    </div>
  );

  return (
    <div>
      <h1>应用</h1>
      <button onClick={show}>点击显示/隐藏</button>
      {showIframe ? iframe : wc}
    </div>
  );
}
