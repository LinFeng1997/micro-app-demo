import React from "react";
import "antd/dist/antd.css";

import { DynamicFieldSet } from "./dynamic-form";
import { PopoverGroup } from "./popover-group";

export default function App() {
  React.useEffect(() => {
    console.log("child mount");
  }, []);
  return (
    <div>
      <h1>子应用</h1>

      <PopoverGroup />

      <br />
      <DynamicFieldSet></DynamicFieldSet>
    </div>
  );
}
