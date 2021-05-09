import { ArcherElement, Relation } from "react-archer";
import { useDrag } from "react-dnd";
import styled from "styled-components";
import { ElenaNode } from "../../Data/NodeData";
import { DragTypes } from "./FCNodes";
import { NodeContextMenu } from "../Menus/NodeContextMenu";
import NodeHeading from "./Node Components/NodeHeading";

interface TerminatorNodeProps {
  className?: string;
  hasContextMenu: boolean;
  node: ElenaNode;
  relations?: Relation[];
}

interface TerminatorNodeContainerProps {
  className?: string;
  node: ElenaNode;
  hasContextMenu: boolean;
  relations?: Relation[];
}

function UnstyledTerminatorNode(props: TerminatorNodeProps) {
  return (
    <div className={props.className}>
      <ArcherElement id={props.node.id} relations={props.relations}>
        <NodeHeading name={props.node.name} />
      </ArcherElement>
      <NodeContextMenu isActive={props.hasContextMenu} nodeId={props.node.id} />
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

  background-color: ${(props) => (props.isDragging ? "#4c566a" : "#3b4252")};
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

  return (
    <div className={props.className} ref={drag}>
      <TerminatorNode
        node={props.node}
        isDragging={isDragging}
        hasContextMenu={props.hasContextMenu}
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
