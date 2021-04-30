import styled from "styled-components";
import { Dock } from "./Components/Dock";
import { FCEditorContainer } from "./Components/FCEditor";

interface FlowEditorProps {
  className?: string;
}

function UnstyledFlowEditor(props: FlowEditorProps) {
  return (
    <div className={props.className}>
      <Dock />
      <FCEditorContainer />
    </div>
  );
}

export const FlowEditor = styled(UnstyledFlowEditor)`
  height: 50vh;
  width: 50vw;
  display: flex;
`;
