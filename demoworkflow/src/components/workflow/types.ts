import type { Node, Edge } from 'reactflow'

export enum BlockEnum {
  START = 'start',
  LLM = 'llm',
  ANSWER = 'answer',
  END = 'end'
}

export type WorkflowNode = Node & {
  data: {
    type: BlockEnum
    title: string
    // 其他节点属性
  }
}

export type WorkflowEdge = Edge & {
  // 边的自定义属性
}