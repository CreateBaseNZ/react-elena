import React from "react";
import styled from "styled-components";
import { DockMenu } from "./DockMenu";
import { DockSearch } from "./DockSearch";
import { DockTitle } from "./DockTitle";
import { NodeTypes } from "./nodes/NodeData";

interface DockProps {
  className?: string;
  nodeList: NodeTypes[];
}

function UnstyledDock(props: DockProps) {
  return (
    <div className={props.className}>
      <DockTitle />
      <DockSearch />
      <DockMenu nodeList={props.nodeList} />
    </div>
  );
}

export const Dock = styled(UnstyledDock)`
  display: flex;
  flex-direction: column;

  overflow: hidden;
  width: 20%;
  height: 100%;
  background-color: grey;
`;
