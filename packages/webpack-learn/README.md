# webpack learn

## webpack 打包流程

### 初始化阶段 -- webpack

- 合并配置项
- 创建 compiler
- 注册插件

### 编译阶段 -- build

- 读取入口文件
- 从入口文件开始编译
- 调用 loader 对源代码进行转译
- 借助 babel 解析为 AST 收集依赖模块
- 递归对依赖模块进行编译操作

### 生成阶段 -- seal

- 创建 chunk 对象
- 生成 assets 对象

### 写入阶段 -- emit

## 参考链接

- [Webpack完整打包流程分析](https://juejin.cn/post/7158707111315111972)
- [webpack 5](https://juejin.cn/column/7136913011733708813)
