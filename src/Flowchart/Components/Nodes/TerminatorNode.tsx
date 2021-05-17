import { useDrag } from "react-dnd";
import styled from "styled-components";
import { ElenaNode, FCEditorMode } from "../../Data/NodeData";
import { DragTypes } from "./FCNodes";
import { NodeContextMenu } from "../Menus/NodeContextMenu";
import NodeHeading from "./Node Components/NodeHeading";

interface TerminatorNodeProps {
  className?: string;
  hasContextMenu: boolean;
  node: ElenaNode;
  mode: FCEditorMode;
  setMode?: React.Dispatch<React.SetStateAction<FCEditorMode>>;
  removeNode?: (targetNode: ElenaNode) => void;
}

interface TerminatorNodeContainerProps {
  className?: string;
  node: ElenaNode;
  hasContextMenu: boolean;
  mode: FCEditorMode;
  setMode?: React.Dispatch<React.SetStateAction<FCEditorMode>>;
  removeNode?: (targetNode: ElenaNode) => void;
}

function UnstyledTerminatorNode(props: TerminatorNodeProps) {
  return (
    <div className={props.className}>
      <NodeHeading name={props.node.name} />

      <NodeContextMenu
        isActive={props.hasContextMenu}
        node={props.node}
        setMode={props.setMode}
        removeNode={props.removeNode}
      />
    </div>
  );
}

const TerminatorNode = styled(UnstyledTerminatorNode)<{
  node: ElenaNode;
  isDragging?: boolean;
}>`
  width: 100%;
  height: auto;

  border-style: solid;
  border-color: #b48ead;
  display: flex;

  align-items: center;
  justify-content: center;

  background-color: ${(props) =>
    props.mode === "Normal" ? "#3b4252" : "#a3be8c"};
  color: #eceff4;
`;

const UnstyledTerminatorNodeContainer = (
  props: TerminatorNodeContainerProps
) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DragTypes.NODE,
    item: props.node,
    collect: (monitor) => ({
      isDragging: props.node.id === monitor.getItem()?.id,
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
      <TerminatorNode
        node={props.node}
        isDragging={isDragging}
        hasContextMenu={props.hasContextMenu}
        mode={props.mode}
        setMode={props.setMode}
        removeNode={props.removeNode}
      />
    </div>
  );
};

const TerminatorNodeContainer = styled(UnstyledTerminatorNodeContainer)`
  width: 250px;
  height: auto;

  position: ${(props) => (props.node.isStatic ? "static" : "absolute")};
  z-index: ${(props) => props.node.priority};

  cursor: move;

  transform: translate(
    ${(props) => `${props.node.xPos}px`},
    ${(props) => `${props.node.yPos}px`}
  );
`;

export default TerminatorNodeContainer;
