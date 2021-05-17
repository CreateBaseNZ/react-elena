import styled from "styled-components";
import { ElenaNode } from "../Data/NodeData";
import { renderNode } from "./Nodes/FCNodes";

interface DockNodeMenuProps {
  className?: string;
  nodeList: ElenaNode[];
}

// Note: ArcherContainer is needed here because the nodes are archer elements
let UnstyledDockNodeMenu = (props: DockNodeMenuProps) => {
  return (
    <div className={props.className}>
      <ul>
        {props.nodeList.map((node, index) => {
          return <li key={index}>{renderNode(node, "Normal", false)}</li>;
        })}
      </ul>
    </div>
  );
};

export const DockNodeMenu = styled(UnstyledDockNodeMenu)`
  background-color: darkgray;
  flex-grow: 1;
  overflow-y: scroll;
  scrollbar-width: none;

  align-items: center;

  & ul {
    margin: 5px;
    padding: 0;

    list-style-type: none;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  & li {
    padding: 0.5rem;

    & div {
      margin: auto;
    }
  }
`;
