import React from 'react'
import { Handle, Position } from 'reactflow'

interface BaseNodeProps {
  data: {
    title: string
    type: string
  }
}

const BaseNode: React.FC<BaseNodeProps> = ({ data }) => {
  return (
    <div className="px-4 py-2 shadow-lg rounded-lg bg-white border-2 border-gray-200">
      <Handle type="target" position={Position.Top} />
      <div className="font-bold">{data.title}</div>
      <div className="text-xs text-gray-500">{data.type}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}

export default BaseNode