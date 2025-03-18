import React from 'react'
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
} from 'reactflow'
import { useWorkflowStore } from '../../store/workflow'
import 'reactflow/dist/style.css'

const WorkflowEditor = () => {
  const { nodes, edges, setNodes, setEdges } = useWorkflowStore()

  return (
    <div className="h-screen w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={(changes) => {
          setNodes(changes.map(change => ({ ...change })))
        }}
        onEdgesChange={(changes) => {
          setEdges(changes.map(change => ({ ...change })))
        }}
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  )
}

export default WorkflowEditor