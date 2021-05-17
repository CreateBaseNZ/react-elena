import ProcessNode from "./ProccessNode";
import { v4 as uuid } from "uuid";
import {
  ElenaNode,
  ElenaRelation,
  FCEditorMode,
  NodeType,
} from "../../Data/NodeData";
import TerminatorNodeContainer from "./TerminatorNode";
import ProcessNodeContainer from "./ProccessNode";

const Nodes = {
  ProcessNode,
};

const renderNode = (
  node: ElenaNode,
  mode: FCEditorMode,
  hasContextMenu: boolean,
  setMode?: React.Dispatch<React.SetStateAction<FCEditorMode>>,
  removeNode?: (targetNode: ElenaNode) => void
) => {
  switch (node?.type) {
    case "Process":
      return (
        <ProcessNodeContainer
          hasContextMenu={hasContextMenu}
          key={uuid()}
          node={node}
          mode={mode}
          setMode={setMode}
          removeNode={removeNode}
        />
      );
    case "Terminator":
      return (
        <TerminatorNodeContainer
          hasContextMenu={hasContextMenu}
          key={uuid()}
          node={node}
          mode={mode}
          setMode={setMode}
          removeNode={removeNode}
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
