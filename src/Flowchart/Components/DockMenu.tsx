import { ArcherContainer } from "react-archer";
import styled from "styled-components";
import { renderNode, NodeTypes } from "./nodes/FCNodes";

interface DockMenuProps {
  className?: string;
  nodeList: NodeTypes[];
}

// Note: ArcherContainer is needed here because the nodes are archer elements
let UnstyledDockMenu = (props: DockMenuProps) => {
  return (
    <div className={props.className}>
      <ArcherContainer>
        <ul>
          {props.nodeList.map((nodeType, index) => {
            return (
              <li key={index}>
                {renderNode({
                  type: nodeType,
                  id: "base",
                  xPos: 0,
                  yPos: 0,
                  zIndex: 0,
                  static: true,
                })}
              </li>
            );
          })}
        </ul>
      </ArcherContainer>
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
