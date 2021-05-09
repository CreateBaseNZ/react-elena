import { useEffect, useRef, useState } from "react";
import { useDrop, XYCoord } from "react-dnd";
import styled from "styled-components";
import { DragTypes, renderNode } from "./Nodes/FCNodes";
import { ElenaNode, ElenaRelation } from "../Data/NodeData";
import { v4 as uuid } from "uuid";
import { ArcherContainer } from "react-archer";

interface FCEditorProps {
  className?: string;
  nodes: ElenaNode[];
  relations?: ElenaRelation[];
}

interface FCEditorContainerProps {
  className?: string;
  nodes?: ElenaNode[];
  relations?: ElenaRelation[];
}

const UnstyledFCEditor = (props: FCEditorProps) => {
  return (
    <ArcherContainer className={props.className}>
      {props.nodes.map((node) => {
        return renderNode(node, true);
      })}
    </ArcherContainer>
  );
};

const FCEditor = styled(UnstyledFCEditor)<{ isOver: boolean }>`
  width: 100%;
  height: 100%;

  background-color: ${(props) => (props.isOver ? "#e5e9f0" : "#2e3440")};
`;

const UnstyledFCEditorContainer = (props: FCEditorContainerProps) => {
  const [nodes, setNodes] = useState<ElenaNode[]>([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: DragTypes.NODE,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    drop: (item: ElenaNode, monitor) => {
      let editorDimensions = editorRef.current?.getBoundingClientRect() as DOMRect;
      let dropCoordinates = monitor.getSourceClientOffset() as XYCoord;

      let xCoordinate = dropCoordinates.x - editorDimensions.x;
      let yCoordinate = dropCoordinates.y - editorDimensions.y;
      if (item.id.split("_")[0] === "base") {
        let newNode: ElenaNode = {
          id: uuid(),
          isStatic: false,
          priority: 0,
          name: item.name,
          type: item.type,
          xPos: xCoordinate,
          yPos: yCoordinate,
        };

        addNode(newNode);
      } else {
        moveNode(item.id, { x: xCoordinate, y: yCoordinate });
      }
    },
  }));

  useEffect(() => {
    console.log(nodes);
  }, [nodes]);

  const addNode = (newNode: ElenaNode) => {
    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  const moveNode = (id: string, newPos: { x: number; y: number }) => {
    setNodes((prevNodes) => {
      let newNodes = [...prevNodes];
      let movedNode = newNodes.find((node) => node.id === id);

      if (movedNode) {
        let prevPriority = movedNode.priority;
        movedNode.priority = newNodes.length;
        movedNode.xPos = newPos.x;
        movedNode.yPos = newPos.y;

        newNodes.forEach((newNode) => {
          if (newNode.priority > prevPriority) {
            newNode.priority--;
          }
        });
      }

      return newNodes;
    });
  };

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
  position: static;

  & #pos-container {
    width: 100%;
    height: 100%;
  }
`;
