import styled from "styled-components";
import { renderNode, NodeTypes } from "./nodes/FCNodes";

interface DockMenuProps {
  className?: string;
  nodeList: NodeTypes[];
}

let UnstyledDockMenu = (props: DockMenuProps) => {
  return (
    <div className={props.className}>
      <ul>
        {props.nodeList.map((nodeName) => {
          return <li>{renderNode(nodeName, { xPos: 0, yPos: 0 })}</li>;
        })}
      </ul>
    </div>
  );
};

export const DockMenu = styled(UnstyledDockMenu)`
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
