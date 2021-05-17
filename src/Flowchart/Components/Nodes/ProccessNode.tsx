import { useDrag } from "react-dnd";
import styled from "styled-components";
import { ElenaNode, ElenaRelation, FCEditorMode } from "../../Data/NodeData";
import { DragTypes } from "./FCNodes";
import { NodeContextMenu } from "../Menus/NodeContextMenu";
import NodeHeading from "./Node Components/NodeHeading";
import NodeIO from "./Node Components/NodeIO";

interface ProcessNodeProps {
  className?: string;
  hasContextMenu: boolean;
  node: ElenaNode;
  mode: FCEditorMode;
  setMode?: React.Dispatch<React.SetStateAction<FCEditorMode>>;
  removeNode?: (targetNode: ElenaNode) => void;
}

interface ProcessNodeContainerProps {
  className?: string;
  hasContextMenu: boolean;
  node: ElenaNode;
  mode: FCEditorMode;
  setMode?: React.Dispatch<React.SetStateAction<FCEditorMode>>;
  removeNode?: (targetNode: ElenaNode) => void;
}

const UnstyledProcessNode = (props: ProcessNodeProps) => {
  return (
    <div className={props.className}>
      <NodeContextMenu
        isActive={props.hasContextMenu}
        node={props.node}
        setMode={props.setMode}
        removeNode={props.removeNode}
      />
      <div>
        <NodeHeading name={props.node.name} />
        <NodeIO inputs={props.node.inputs} outputs={props.node.outputs} />
      </div>
    </div>
  );
};

const ProcessNode = styled(UnstyledProcessNode)<{
  node: ElenaNode;
  isDragging?: boolean;
}>`
  width: 100%;
  height: 100%;

  border-style: solid;
  border-color: #b48ead;
  display: flex;

  align-items: center;
  justify-content: center;

  background-color: ${(props) =>
    props.mode === "Normal" ? "#3b4252" : "#a3be8c"};
  color: #eceff4;
  & h4 {
    margin: 0;
  }
`;

const UnstyledProcessNodeContainer = (props: ProcessNodeContainerProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DragTypes.NODE,
    item: props.node,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleClick = () => {
    props.setMode && props.mode === "Relation" && props.setMode("Normal");
  };

  return (
    <div
      className={props.className}
      ref={drag}
      onClick={handleClick}
      id={props.node.id}
    >
      <ProcessNode
        node={props.node}
        hasContextMenu={props.hasContextMenu}
        isDragging={isDragging}
        mode={props.mode}
        setMode={props.setMode}
        removeNode={props.removeNode}
      />
    </div>
  );
};

const ProcessNodeContainer = styled(UnstyledProcessNodeContainer)`
  height: auto;
  width: 250px;

  position: ${(props) => (props.node.isStatic ? "static" : "absolute")};
  z-index: ${(props) => props.node.priority};

  transform: translate(
    ${(props) => `${props.node.xPos}px`},
    ${(props) => `${props.node.yPos}px`}
  );
`;

export default ProcessNodeContainer;
