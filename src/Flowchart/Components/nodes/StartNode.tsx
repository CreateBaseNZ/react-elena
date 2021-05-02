import React, { useState } from "react";
import { ArcherElement, Relation } from "react-archer";
import { useDrag } from "react-dnd";
import styled from "styled-components";
import { DragTypes } from "./FCNodes";
import { NodeContextMenu } from "./NodeContextMenu";

interface StartNodeProps {
  className?: string;
  id: string;
  relations: Relation[];
}

function UnstyledStartNode(props: StartNodeProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DragTypes.NODE,
    item: { name: "Start", id: props.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className={props.className} ref={drag}>
      <ArcherElement id={props.id} relations={props.relations}>
        <h4>Start</h4>
      </ArcherElement>
      <NodeContextMenu />
    </div>
  );
}

const StartNode = styled(UnstyledStartNode)<{
  xPos: number;
  yPos: number;
  static: boolean;
  zIndex: number;
}>`
  height: 50px;
  width: 100px;
  border-style: solid;
  border-color: #b48ead;
  display: flex;

  align-items: center;
  justify-content: center;
  cursor: move;

  position: ${(props) => (props.static ? "static" : "absolute")};

  z-index: ${(props) => props.zIndex};

  transform: translate(
    ${(props) => `${props.xPos}px`},
    ${(props) => `${props.yPos}px`}
  );

  background-color: #3b4252;
  color: #eceff4;
  & h4 {
    margin: 0;
  }
`;

export default StartNode;
