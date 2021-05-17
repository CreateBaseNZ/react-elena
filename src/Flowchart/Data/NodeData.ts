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
  start: string;
  end: string;
}

export type FCEditorMode = "Normal" | "Relation";

export type NodeType = "Process" | "Terminator" | "Decision" | null;
