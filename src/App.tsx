import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FlowEditor } from "./Flowchart/FlowEditor";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <FlowEditor />
    </DndProvider>
  );
}

export default App;
