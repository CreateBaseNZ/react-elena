import ProcessNode from "./ProccessNode";
import { v4 as uuid } from "uuid";
import { ElenaNode, NodeType } from "../../Data/NodeData";
import { Relation } from "react-archer";
import TerminatorNodeContainer from "./TerminatorNode";
import ProcessNodeContainer from "./ProccessNode";

const Nodes = {
  ProcessNode,
};

const renderNode = (
  node: ElenaNode,
  hasContextMenu: boolean,
  relations?: Relation[]
) => {
  switch (node?.type) {
    case "Process":
      return (
        <ProcessNodeContainer
          hasContextMenu={hasContextMenu}
          key={uuid()}
          node={node}
          relations={relations !== undefined ? relations : []}
        />
      );
    case "Terminator":
      return (
        <TerminatorNodeContainer
          hasContextMenu={hasContextMenu}
          key={uuid()}
          node={node}
          relations={relations !== undefined ? relations : []}
        />
      );
    default:
      return null;
  }
};

export default Nodes;
export { renderNode };
export type { NodeType as NodeTypes };
export const DragTypes = {
  NODE: "node",
};
