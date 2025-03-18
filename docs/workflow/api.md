根据 `workflow.ts` 服务文件，我来整理前端工作流系统需要的后端接口：

### 1. 工作流草稿管理
```typescript
// 1. 获取工作流草稿
GET /apps/{appId}/workflows/draft

// 2. 同步工作流草稿
POST /apps/{appId}/workflows/draft
Request Body: {
  graph: object,
  features: object,
  environment_variables: array,
  conversation_variables: array
}
```

### 2. 节点操作
```typescript
// 1. 获取节点默认配置
GET /apps/{appId}/workflows/default-workflow-block-configs/{blockType}

// 2. 单节点运行
POST /apps/{appId}/workflows/draft/nodes/{nodeId}/run

// 3. 迭代节点运行
POST /apps/{appId}/workflows/draft/iteration/nodes/{nodeId}/run

// 4. 循环节点运行
POST /apps/{appId}/workflows/draft/loop/nodes/{nodeId}/run
```

### 3. 工作流运行控制
```typescript
// 1. 停止工作流运行
POST /apps/{appId}/workflows/runs/{runId}/stop

// 2. 获取工作流运行历史
GET /apps/{appId}/workflows/runs

// 3. 获取对话运行历史
GET /apps/{appId}/chat/runs
```

### 4. 发布管理
```typescript
// 1. 获取已发布的工作流
GET /apps/{appId}/workflows/published
```

### 5. 变量管理
```typescript
// 1. 获取会话变量当前值
GET /apps/{appId}/workflows/conversation-variables
Query: {
  conversation_id: string
}
```

### 6. 导入导出
```typescript
// 1. 从 DSL 导入工作流
POST /apps/{appId}/workflows/draft/import
Request Body: {
  data: string
}
```

### 接口返回数据类型

1. **工作流数据**
```typescript
interface FetchWorkflowDraftResponse {
  graph: object
  features: object
  environment_variables: array
  conversation_variables: array
}
```

2. **运行历史**
```typescript
interface WorkflowRunHistoryResponse {
  id: string
  status: string
  elapsed_time: number
  total_tokens: number
  created_at: number
  finished_at: number
}
```

3. **通用响应**
```typescript
interface CommonResponse {
  success: boolean
  message?: string
  updated_at?: number
  hash?: string
}
```

这些接口覆盖了工作流的全生命周期管理，包括：
- 工作流编辑和保存
- 节点配置和运行
- 运行状态控制
- 历史记录查询
- 变量管理
- 导入导出功能

每个接口都有明确的职责，并提供了类型安全的数据交互。