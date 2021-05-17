import styled from "styled-components";
import { Dock } from "./Components/Dock";
import { FCEditorContainer } from "./Components/FCEditor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ElenaNode, ElenaRelation } from "./Data/NodeData";

interface FlowEditorProps {
  className?: string;
  nodeList: ElenaNode[];
  variableList?: {};
  nodes?: ElenaNode[];
  relations?: ElenaRelation[];
  setCode?: React.Dispatch<React.SetStateAction<string>>;
}

function UnstyledFlowEditor(props: FlowEditorProps) {
  return (
    <div className={props.className}>
      <DndProvider backend={HTML5Backend}>
        <Dock nodeList={props.nodeList} />
        <FCEditorContainer nodes={props.nodes} relations={props.relations} />
      </DndProvider>
    </div>
  );
}

const FlowEditor = styled(UnstyledFlowEditor)`
  height: 100%;
  width: 100%;
  display: flex;
`;

export default FlowEditor;
