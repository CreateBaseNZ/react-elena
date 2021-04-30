import { useState } from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";
import { DragTypes, NodeTypes, renderNode } from "./nodes/FCNodes";

interface FCEditorProps {
  className?: string;
}

interface FCEditorContainerProps {
  className?: string;
}

interface NodeLayout {
  type: NodeTypes;
  xPos: number;
  yPos: number;
}

const UnstyledFCEditor = (props: FCEditorProps) => {
  const [nodes, setNodes] = useState<NodeLayout[]>([
    {
      type: "Generic",
      xPos: 0,
      yPos: 0,
    },
  ]);

  return (
    <div className={props.className}>
      {nodes.map((node) => {
        return renderNode(node.type, { xPos: node.xPos, yPos: node.yPos });
      })}
    </div>
  );
};

const FCEditor = styled(UnstyledFCEditor)<{ isOver: boolean }>`
  height: 100%;
  width: 100%;
  background-color: ${(props) => (props.isOver ? "#e5e9f0" : "#2e3440")};
`;

const UnstyledFCEditorContainer = (props: FCEditorContainerProps) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: DragTypes.NODE,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div className={props.className} ref={drop}>
      <FCEditor isOver={isOver} />
    </div>
  );
};

export const FCEditorContainer = styled(UnstyledFCEditorContainer)`
  width: 80%;
  height: 100%;
`;
