import GenericNode from "./GenericNode";

const Nodes = {
  GenericNode,
};

const renderNode = (
  nodeName: NodeTypes,
  positon?: {
    xPos: number;
    yPos: number;
  }
) => {
  switch (nodeName) {
    case "Generic":
      return (
        <GenericNode
          yPos={positon !== undefined ? positon.yPos : 0}
          xPos={positon !== undefined ? positon.xPos : 0}
        />
      );
    default:
      return null;
  }
};

type NodeTypes = "Generic" | null;

export default Nodes;
export { renderNode };
export type { NodeTypes };
export const DragTypes = {
  NODE: "node",
};
