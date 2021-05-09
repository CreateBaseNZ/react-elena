export interface ElenaNode {
  type: NodeType;
  name: string;
  id: string;
  xPos: number;
  yPos: number;
  isStatic: boolean;
  priority: number;
  inputs?: string[];
  outputs?: string[];
  code?: string;
}

export interface ElenaRelation {
  source: string;
  target: string;
}

export type NodeType = "Process" | "Terminator" | "Decision" | null;
