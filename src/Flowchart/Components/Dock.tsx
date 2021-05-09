import React from "react";
import styled from "styled-components";
import { DockNodeMenu } from "./DockNodeMenu";
import { DockSearch } from "./DockSearch";
import { DockTitle } from "./DockTitle";
import { ElenaNode } from "../Data/NodeData";

interface DockProps {
  className?: string;
  nodeList: ElenaNode[];
  variableList?: {};
}

const UnstyledDock = (props: DockProps) => {
  return (
    <div className={props.className}>
      <DockTitle />
      <DockSearch />
      <DockNodeMenu nodeList={props.nodeList} />
    </div>
  );
};

export const Dock = styled(UnstyledDock)`
  display: flex;
  flex-direction: column;

  overflow: hidden;
  width: 20%;
  min-width: 280px;
  height: 100%;
  background-color: grey;
`;
