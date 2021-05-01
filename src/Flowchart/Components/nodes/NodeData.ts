export interface NodeLayout {
  type: NodeTypes;
  id: string;
  xPos: number;
  yPos: number;
}

export type NodeTypes = "Generic" | null;

export type NodeItem = {
  name: NodeTypes;
  id: string;
};
