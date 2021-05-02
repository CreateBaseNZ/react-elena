import React, { useState } from "react";
import { ArcherElement, Relation } from "react-archer";
import { useDrag } from "react-dnd";
import styled from "styled-components";
import { DragTypes } from "./FCNodes";

interface ProcessNodeProps {
  className?: string;
  id: string;
  relations: Relation[];
}

function UnstyledProcessNode(props: ProcessNodeProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DragTypes.NODE,
    item: { name: "Process", id: props.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className={props.className} ref={drag}>
      <ArcherElement id={props.id} relations={props.relations}>
        <h4>Process</h4>
      </ArcherElement>
    </div>
  );
}

const ProcessNode = styled(UnstyledProcessNode)<{
  xPos: number;
  yPos: number;
  static: boolean;
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

export default ProcessNode;
