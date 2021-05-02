import ProcessNode from "./ProccessNode";
import { v4 as uuid } from "uuid";
import { NodeLayout, NodeTypes } from "./NodeData";
import StartNode from "./StartNode";
import { Relation } from "react-archer";
import React from "react";

const Nodes = {
  ProcessNode,
};

const renderNode = (node: NodeLayout, relations?: Relation[]) => {
  switch (node?.type) {
    case "Process":
      return (
        <ProcessNode
          id={node.id}
          key={uuid()}
          static={node !== undefined ? node.static : true}
          yPos={node !== undefined ? node.yPos : 0}
          xPos={node !== undefined ? node.xPos : 0}
          relations={relations !== undefined ? relations : []}
        />
      );
    case "Start":
      return (
        <StartNode
          id={node.id}
          key={uuid()}
          zIndex={node !== undefined ? node.zIndex : 0}
          static={node !== undefined ? node.static : true}
          yPos={node !== undefined ? node.yPos : 0}
          xPos={node !== undefined ? node.xPos : 0}
          relations={relations !== undefined ? relations : []}
        />
      );
    default:
      return null;
  }
};

export default Nodes;
export { renderNode };
export type { NodeTypes };
export const DragTypes = {
  NODE: "node",
};
