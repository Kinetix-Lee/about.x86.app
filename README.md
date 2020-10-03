# about.x86.app
# about.x86.app
![Build Test](https://github.com/Kinetix-Lee/about.x86.app/workflows/Build%20Test/badge.svg)
[![Build Status](https://travis-ci.org/Kinetix-Lee/about.x86.app.svg?branch=master)](https://travis-ci.org/Kinetix-Lee/about.x86.app)

[about.x86.app](https://about.x86.app/) 的源代码，基于 Vue.js 3.0 编写、包含 Vite 支持。

Source code that runs on [about.x86.app](https://about.x86.app/), based on Vue.js 3.0 & powered by Vite. 

## 环境准备（使用 yarn）

``` bash
yarn
```

## 开发环境测试

```bash
yarn dev
```

## 构建

```bash
yarn build
```

## 部署

使用脚本部署需要目录下有 github.key。

按需修改部署脚本 `deploy.sh`。

```bash
chmod +x ./deploy.sh
bash ./deploy.sh
```
