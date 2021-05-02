import { useEffect, useRef, useState } from "react";
import { useDrop, XYCoord } from "react-dnd";
import styled from "styled-components";
import { DragTypes, NodeTypes, renderNode } from "./nodes/FCNodes";
import { NodeItem, NodeLayout } from "./nodes/NodeData";
import { v4 as uuid } from "uuid";
import { ArcherContainer } from "react-archer";
import { NodeContextMenu } from "./nodes/NodeContextMenu";

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
      <ArcherContainer>
        {props.nodes.map((node) => {
          return renderNode({
            type: node.type,
            id: node.id,
            xPos: node.xPos,
            yPos: node.yPos,
            zIndex: node.zIndex,
            static: false,
          });
        })}
      </ArcherContainer>
    </div>
  );
};

const FCEditor = styled(UnstyledFCEditor)<{ isOver: boolean }>`
  width: 100%;
  height: 100%;

  background-color: ${(props) => (props.isOver ? "#e5e9f0" : "#2e3440")};
`;

const UnstyledFCEditorContainer = (props: FCEditorContainerProps) => {
  const [nodes, setNodes] = useState<NodeLayout[]>([]);

  const [nodeOrder, setNodeOrder] = useState<string[]>([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: DragTypes.NODE,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    drop: (item: NodeItem, monitor) => {
      let itemName = item.name;

      let editorDimensions = editorRef.current?.getBoundingClientRect() as DOMRect;
      let dropCoordinates = monitor.getSourceClientOffset() as XYCoord;

      let xCoordinate = dropCoordinates.x - editorDimensions.x;
      let yCoordinate = dropCoordinates.y - editorDimensions.y;
      if (item.id === "base") {
        let newId = uuid();
        let newNode = {
          id: newId,
          type: itemName,
          xPos: xCoordinate,
          yPos: yCoordinate,
          static: false,
          zIndex: 0,
        };
        addNode(newNode);
      } else {
        moveNode(item.id, { x: xCoordinate, y: yCoordinate });
      }
    },
  }));

  const addNode = (newNode: NodeLayout) => {
    setNodes((prevNodes) => [...prevNodes, newNode]);
    setNodeOrder((prevOrder) => [...prevOrder, newNode.id]);
  };

  const moveNode = (id: string, newPos: { x: number; y: number }) => {
    setNodes((prevNodes) => {
      let newNodes = [...prevNodes];
      let movedNode = newNodes.find((node) => node.id === id);

      if (movedNode) {
        movedNode.xPos = newPos.x;
        movedNode.yPos = newPos.y;
      }

      return newNodes;
    });

    setNodeOrder((prevOrder) => {
      let newOrder = [...prevOrder];
      let movedIndex = newOrder.findIndex((order) => order === id);
      newOrder.splice(movedIndex, 1);
      newOrder.push(id);

      return newOrder;
    });
  };

  useEffect(() => {
    nodeOrder.forEach((node, index) => {
      setNodes((prevNodes) => {
        let newNodes = [...prevNodes];
        let changingNode = newNodes.find((newNode) => newNode.id === node);
        if (changingNode) {
          console.log(nodeOrder.length - index);
          changingNode.zIndex = index;
        }

        return newNodes;
      });
    });
  }, [nodeOrder]);

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
