import create from 'zustand'
import { WorkflowNode, WorkflowEdge } from '../components/workflow/types'

interface WorkflowState {
  nodes: WorkflowNode[]
  edges: WorkflowEdge[]
  setNodes: (nodes: WorkflowNode[]) => void
  setEdges: (edges: WorkflowEdge[]) => void
}

export const useWorkflowStore = create<WorkflowState>((set) => ({
  nodes: [],
  edges: [],
  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges })
}))