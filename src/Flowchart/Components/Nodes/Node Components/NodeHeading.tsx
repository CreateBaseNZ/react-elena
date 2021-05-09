import { DirectionsBike } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

interface NodeHeadingProps {
  className?: string;
  name: string;
}

const UnstyledNodeHeading = (props: NodeHeadingProps) => {
  return (
    <div className={props.className}>
      <div>
        <DirectionsBike />
      </div>

      <span>{props.name}</span>
    </div>
  );
};

const NodeHeading = styled(UnstyledNodeHeading)`
  width: 100%;
  height: 50px;
  display: flex;

  justify-content: center;

  pointer-events: none;

  & div {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 15px;
  }

  & span {
    align-items: center;
    display: inline-flex;
  }
`;

export default NodeHeading;
