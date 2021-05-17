import React, { useState } from "react";
import { ElenaNode } from "./Flowchart/Data/NodeData";
import FlowEditor from "./Flowchart/FlowEditor";
import "./App.css";
//import MonacoEditor from "./Monaco/MonacoEditor";

const NodeMenu: ElenaNode[] = [
  {
    id: "base_start",
    isStatic: true,
    name: "Start",
    priority: 0,
    type: "Terminator",
    xPos: 0,
    yPos: 0,
    code: "hello",
  },
  {
    id: "base_process_1",
    isStatic: true,
    name: "Proc",
    priority: 0,
    type: "Process",
    xPos: 0,
    yPos: 0,
    code: "hi there",
  },
];

const AppStyle = {
  height: "100vh",
  width: "100vw",
};

function App() {
  //const [code, setCode] = useState<string>("");
  return (
    <div style={AppStyle}>
      <FlowEditor nodeList={NodeMenu} />
      {/* <MonacoEditor /> */}
    </div>
  );
}

export default App;
