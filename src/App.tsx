import React, { useState } from "react";
import { CodeContext } from "./Flowchart/Data/EditorContext";
import { ElenaNode } from "./Flowchart/Data/NodeData";
import { FlowEditor } from "./Flowchart/FlowEditor";
import "./App.css";

const NodeMenu: ElenaNode[] = [
  {
    id: "base_start",
    isStatic: true,
    name: "Start",
    priority: 0,
    type: "Terminator",
    xPos: 0,
    yPos: 0,
  },
  {
    id: "base_process_1",
    isStatic: true,
    name: "Proc",
    priority: 0,
    type: "Process",
    xPos: 0,
    yPos: 0,
  },
];

const AppStyle = {
  height: "100vh",
  width: "100vw",
};

function App() {
  const [code, setCode] = useState<string>("");
  return (
    <div style={AppStyle}>
      <CodeContext.Provider value={{ code, setCode }}>
        <FlowEditor nodeList={NodeMenu} />
      </CodeContext.Provider>
    </div>
  );
}

export default App;
