import { ArcherElement, Relation } from "react-archer";
import { useDrag } from "react-dnd";
import styled from "styled-components";
import { ElenaNode } from "../../Data/NodeData";
import { DragTypes } from "./FCNodes";
import { NodeContextMenu } from "../Menus/NodeContextMenu";
import NodeHeading from "./Node Components/NodeHeading";

interface ProcessNodeProps {
  className?: string;
  hasContextMenu: boolean;
  node: ElenaNode;
  relations?: Relation[];
}

interface ProcessNodeContainerProps {
  className?: string;
  hasContextMenu: boolean;
  node: ElenaNode;
  relations: Relation[];
}

const UnstyledProcessNode = (props: ProcessNodeProps) => {
  return (
    <div className={props.className}>
      <NodeContextMenu isActive={props.hasContextMenu} nodeId={props.node.id} />
      <ArcherElement id={props.node.id} relations={props.relations}>
        <NodeHeading name={props.node.name} />
      </ArcherElement>
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

  background-color: ${(props) => (props.isDragging ? "#4c566a" : "#3b4252")};
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

  return (
    <div className={props.className} ref={drag}>
      <ProcessNode
        node={props.node}
        hasContextMenu={props.hasContextMenu}
        isDragging={isDragging}
      />
    </div>
  );
};

const ProcessNodeContainer = styled(UnstyledProcessNodeContainer)`
  height: 50px;
  width: 250px;

  position: ${(props) => (props.node.isStatic ? "static" : "absolute")};
  z-index: ${(props) => props.node.priority};

  cursor: move;

  transform: translate(
    ${(props) => `${props.node.xPos}px`},
    ${(props) => `${props.node.yPos}px`}
  );
`;

export default ProcessNodeContainer;
