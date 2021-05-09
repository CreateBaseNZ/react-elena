import React from "react";
import styled from "styled-components";

interface DockSearchProps {
  className?: string;
}

function UnstyledDockSearch(props: DockSearchProps) {
  return (
    <div className={props.className}>
      <input type="text" defaultValue="Search nodes" />
    </div>
  );
}

export const DockSearch = styled(UnstyledDockSearch)`
  background-color: lightgray;
  width: 100%;

  & input {
    width: 100%;
  }
`;
