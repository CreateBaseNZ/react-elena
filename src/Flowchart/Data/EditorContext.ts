import { createContext } from "react";

type CodeContextType = {
  code: string;
  setCode: (code: string) => void;
};

type NodeOrderContextType = {
  nodeOrder: string[];
  setNodeOrder: React.Dispatch<React.SetStateAction<string[]>>;
};

export const CodeContext = createContext<CodeContextType>({
  code: "",
  setCode: (code) => console.log("Code Context has not been set!"),
});

export const NodeOrderContext = createContext<NodeOrderContextType>({
  nodeOrder: [],
  setNodeOrder: (nodeOrder) =>
    console.log("Node Order Context has not been set!"),
});

export const NodeContext = createContext(null);

export const RelationContext = createContext(null);
