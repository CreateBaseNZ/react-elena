import { useEffect, useRef, useState } from "react";
import { useDrop, XYCoord } from "react-dnd";
import styled from "styled-components";
import { DragTypes, renderNode } from "./Nodes/FCNodes";
import { ElenaNode, ElenaRelation, FCEditorMode } from "../Data/NodeData";
import { v4 as uuid } from "uuid";
import Xarrow from "react-xarrows/lib";

interface FCEditorProps {
  className?: string;
  nodes: ElenaNode[];
  mode: FCEditorMode;
  setMode: React.Dispatch<React.SetStateAction<FCEditorMode>>;
  removeNode: (targetNode: ElenaNode) => void;
  relations?: ElenaRelation[];
}

interface FCEditorContainerProps {
  className?: string;
  nodes?: ElenaNode[];
  relations?: ElenaRelation[];
  setCode?: React.Dispatch<React.SetStateAction<string>>;
}

const UnstyledFCEditor = (props: FCEditorProps) => {
  return (
    <div className={props.className}>
      {props.nodes.map((node) => {
        return renderNode(
          node,
          props.mode,
          true,
          props.setMode,
          props.removeNode
        );
      })}
      {props.relations &&
        props.relations.map((relation, index) => {
          return <Xarrow key={index} {...relation} />;
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
  const [nodes, setNodes] = useState<ElenaNode[]>([]);
  const [relations, setRelations] = useState<ElenaRelation[]>([]);
  const [mode, setMode] = useState<FCEditorMode>("Normal");

  useEffect(() => {
    if (props.nodes) {
      setNodes(props.nodes);
    }

    if (props.relations) {
      setRelations(props.relations);
    }
  }, [props.nodes, props.relations]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: DragTypes.NODE,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    drop: (item: ElenaNode, monitor) => {
      let editorDimensions =
        editorRef.current?.getBoundingClientRect() as DOMRect;
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
          inputs: item.inputs ? item.inputs : undefined,
          outputs: item.outputs ? item.outputs : undefined,
        };

        addNode(newNode);
      } else {
        moveNode(item.id, { x: xCoordinate, y: yCoordinate });
      }
    },
  }));

  const addNode = (newNode: ElenaNode) => {
    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  const removeNode = (targetNode: ElenaNode) => {
    setNodes((prevNodes) => {
      let index = prevNodes.findIndex((node) => node.id === targetNode.id);
      if (index === -1) return prevNodes;
      let newNodes = [...prevNodes];
      newNodes.splice(index, 1);
      return newNodes;
    });
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
        <FCEditor
          isOver={isOver}
          nodes={nodes}
          mode={mode}
          setMode={setMode}
          removeNode={removeNode}
        />
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
