## 使用 Nx 搭建项目

### 初始化项目

```bash
npx create-nx-workspace --preset=ts 
```

### 基于 nest 新建后端服务

安装 nest 依赖，并通过 nx generate 新建 backend 应用

```bash
yarn add -D @nrwl/nest

nx g @nrwl/nest:application backend
```