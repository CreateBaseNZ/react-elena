import styled from "styled-components";
import { Dock } from "./Components/Dock";
import { FCEditorContainer } from "./Components/FCEditor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface FlowEditorProps {
  className?: string;
}

function UnstyledFlowEditor(props: FlowEditorProps) {
  return (
    <div className={props.className}>
      <DndProvider backend={HTML5Backend}>
        <Dock nodeList={["Start", "Process"]} />
        <FCEditorContainer />
      </DndProvider>
    </div>
  );
}

export const FlowEditor = styled(UnstyledFlowEditor)`
  height: 50vh;
  width: 50vw;
  display: flex;
`;
