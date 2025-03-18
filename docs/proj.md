# Dify 前端项目文档

## 项目概述
Dify 前端项目是基于 Next.js 构建的现代化 Web 应用程序，提供了一个功能丰富的用户界面，用于管理和使用 AI 应用。

## 技术栈
- **核心框架**: Next.js (React)
- **包管理器**: pnpm v9.12.2
- **运行环境**: Node.js v18.x (LTS)
- **UI开发**: Storybook
- **测试框架**: Jest + React Testing Library
- **代码规范**: ESLint + VSCode 配置

## 环境配置

### 开发环境变量
```plaintext
NEXT_PUBLIC_DEPLOY_ENV=DEVELOPMENT
NEXT_PUBLIC_EDITION=SELF_HOSTED
NEXT_PUBLIC_API_PREFIX=http://localhost:5001/console/api
NEXT_PUBLIC_PUBLIC_API_PREFIX=http://localhost:5001/api
```

### 生产环境变量
```plaintext
NEXT_PUBLIC_DEPLOY_ENV=PRODUCTION
NEXT_PUBLIC_EDITION=SELF_HOSTED
NEXT_PUBLIC_API_PREFIX=实际的API地址
NEXT_PUBLIC_PUBLIC_API_PREFIX=实际的Web API地址
```

## 快速开始

### 1. 安装依赖
```bash
pnpm install
```

### 2. 配置环境
```bash
cp .env.example .env.local
```

### 3. 启动开发服务器
```bash
pnpm run dev
```

## 项目功能

### 1. 控制台应用
- 应用管理
- 用户管理
- 系统配置
- 数据分析

### 2. Web应用
- 用户界面
- 应用交互
- 数据展示

## 开发指南

### 组件开发
1. 使用 Storybook 进行组件开发
```bash
pnpm storybook
```
2. 访问 http://localhost:6006 预览组件

### 测试
1. 单元测试
```bash
pnpm run test
```
2. 测试文件命名规范：`*.spec.ts` 或 `*.spec.tsx`

### 代码规范
- 使用 VSCode 进行开发
- 配置 `.vscode/settings.json` 
- 遵循项目 ESLint 规则

## 部署指南

### 生产环境构建
```bash
pnpm run build
```

### 启动服务
```bash
pnpm run start
```

### 自定义部署
- 支持自定义端口和主机
```bash
pnpm run start --port=3001 --host=0.0.0.0
```
- 支持通过 PM2 配置实例数量

## 项目结构
```
web/
├── app/                # 应用主目录
├── components/         # 公共组件
├── utils/             # 工具函数
├── public/            # 静态资源
├── i18n/              # 国际化文件
├── styles/            # 样式文件
└── tests/             # 测试文件
```

## 社区支持
- Discord 社区：https://discord.gg/5AEfbxcd9k
- 官方文档：https://docs.dify.ai/getting-started/readme

## 贡献指南
1. Fork 项目
2. 创建特性分支
3. 提交变更
4. 发起 Pull Request

## 注意事项
- 确保 Node.js 版本兼容性
- 使用 pnpm 作为包管理器
- 遵循代码规范和测试规范
- 保持文档的及时更新

## 常见问题
1. 环境配置问题
   - 检查 Node.js 版本
   - 确认环境变量配置
   
2. 开发相关问题
   - 参考 Storybook 文档
   - 查看测试用例示例

3. 部署相关问题
   - 确认构建环境
   - 检查服务器配置