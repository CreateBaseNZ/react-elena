import GenericNode from "./GenericNode";
import { v4 as uuid } from "uuid";
import { NodeTypes } from "./NodeData";

const Nodes = {
  GenericNode,
};

const renderNode = (
  nodeName: NodeTypes,
  id: string,
  positon?: {
    xPos: number;
    yPos: number;
    static: boolean;
  }
) => {
  switch (nodeName) {
    case "Generic":
      return (
        <GenericNode
          id={id}
          key={uuid()}
          static={positon !== undefined ? positon.static : true}
          yPos={positon !== undefined ? positon.yPos : 0}
          xPos={positon !== undefined ? positon.xPos : 0}
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
