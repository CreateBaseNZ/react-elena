export interface NodeLayout {
  type: NodeTypes;
  id: string;
  xPos: number;
  yPos: number;
  static: boolean;
  zIndex: number;
}

export type NodeTypes = "Process" | "Start" | null;

export type NodeItem = {
  name: NodeTypes;
  id: string;
};
