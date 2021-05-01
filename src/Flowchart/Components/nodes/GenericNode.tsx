import React, { useState } from "react";
import { useDrag } from "react-dnd";
import styled from "styled-components";
import { DragTypes } from "./FCNodes";

interface GenericNodeProps {
  className?: string;
  id: string;
}

function UnstyledGenericNode(props: GenericNodeProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DragTypes.NODE,
    item: { name: "Generic", id: props.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className={props.className} ref={drag}>
      <h4>Generic</h4>
    </div>
  );
}

const GenericNode = styled(UnstyledGenericNode)<{
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

export default GenericNode;
