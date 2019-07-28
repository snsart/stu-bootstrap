babel使用流程:
1. 安装相关工具
->核心工具
->命令行
->常用预设插件
->polyfill
```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```
2. 配置文件
babel.config.js
```
const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };
```
3. 命令行转码
```
./node_modules/.bin/babel src --out-dir lib
```