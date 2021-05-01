import { useRef, useState } from "react";
import { useDrop, XYCoord } from "react-dnd";
import styled from "styled-components";
import { DragTypes, NodeTypes, renderNode } from "./nodes/FCNodes";
import { NodeItem, NodeLayout } from "./nodes/NodeData";
import { v4 as uuid } from "uuid";

interface FCEditorProps {
  className?: string;
  nodes: NodeLayout[];
}

interface FCEditorContainerProps {
  className?: string;
}

const UnstyledFCEditor = (props: FCEditorProps) => {
  return (
    <div className={props.className}>
      {props.nodes.map((node) => {
        return renderNode(node.type, node.id, {
          xPos: node.xPos,
          yPos: node.yPos,
          static: false,
        });
      })}
    </div>
  );
};

const FCEditor = styled(UnstyledFCEditor)<{ isOver: boolean }>`
  width: 100%;
  height: 100%;

  background-color: ${(props) => (props.isOver ? "#e5e9f0" : "#2e3440")};
`;

const UnstyledFCEditorContainer = (props: FCEditorContainerProps) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: DragTypes.NODE,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    drop: (item: NodeItem, monitor) => {
      let itemName = item.name;

      console.log(item);

      let editorDimensions = editorRef.current?.getBoundingClientRect() as DOMRect;
      let dropCoordinates = monitor.getSourceClientOffset() as XYCoord;

      let xCoordinate = dropCoordinates.x - editorDimensions.x;
      let yCoordinate = dropCoordinates.y - editorDimensions.y;
      let tempNodes = nodes;

      if (item.id === "base") {
        tempNodes.push({
          id: uuid(),
          type: itemName,
          xPos: xCoordinate,
          yPos: yCoordinate,
        });
      } else {
        let movedNodeIndex = tempNodes.findIndex((element) => {
          return element.id === item.id;
        });
        tempNodes[movedNodeIndex].xPos = xCoordinate;
        tempNodes[movedNodeIndex].yPos = yCoordinate;
      }

      setNodes(tempNodes);
    },
  }));

  const [nodes, setNodes] = useState<NodeLayout[]>([]);

  const editorRef = useRef<HTMLDivElement>(null);

  return (
    <div className={props.className} ref={drop}>
      <div ref={editorRef} id={"pos-container"}>
        <FCEditor isOver={isOver} nodes={nodes} />
      </div>
    </div>
  );
};

export const FCEditorContainer = styled(UnstyledFCEditorContainer)`
  width: 80%;
  height: 100%;

  & #pos-container {
    width: 100%;
    height: 100%;
  }
`;
