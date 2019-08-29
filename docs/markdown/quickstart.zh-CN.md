# 快速上手

<!-- ### 示例工程

我们提供了一个基于 Vue Cli 3 的示例工程，仓库地址为 [Vant Demo](https://github.com/youzan/vant-demo)，示例工程会帮助你了解如下内容：

- 基于 vant 搭建单页面应用，配置按需引入
- 配置 rem 适配方案
- 配置 viewport 适配方案
- 配置 TypeScript 工程
- 配置自定义主题色方案 -->

### 安装

```bash
# 通过 npm 安装
npm i xpre -S

# 通过 yarn 安装
yarn add xpre
```

## 引入组件

### 方式一. 自动按需引入组件 (推荐)

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式

```bash
# 安装插件
npm i babel-plugin-import -D
```

```js
// 在.babelrc 中添加配置
// 注意：webpack 1 无需设置 libraryDirectory
{
  "plugins": [
    ["import", {
      "libraryName": "xpre",
      "libraryDirectory": "es/components",
      "style": true // can reduce the bundle size significantly, depending on your usage of the library.
    }]
  ]
}

// 对于使用 babel7 的用户，可以在 babel.config.js 中配置
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'xpre',
      libraryDirectory: 'es/components',
      style: true
    }, 'xpre']
  ]
};
```

```js
// 接着你可以在代码中直接引入
// 插件会自动将代码转化为方式二中的按需引入形式
import { Button } from 'xpre';
```

> 如果你在使用 TypeScript，可以使用 [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) 实现按需引入

### 方式二. 手动按需引入组件

在不使用插件的情况下，可以手动引入需要的组件

```js
import Button from 'xpre/lib/components/button';
import 'xpre/lib/components/button/style';
```

### 方式三. 导入所有组件

Xpre 支持一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法

```js
import Vue from 'vue';
import Xpre from 'xpre';
import 'xpre/lib/index.css';

Vue.use(Xpre);
```

> 注意：配置 babel-plugin-import 插件后将不允许导入所有组件


## 其他

### Rem 适配

Xpre 中的样式默认使用`px`作为单位，如果需要使用`rem`单位，推荐使用以下两个工具

- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 是一款 postcss 插件，用于将单位转化为 rem
- [lib-flexible](https://github.com/amfe/lib-flexible) 用于设置 rem 基准值

下面提供了一份基本的 postcss 配置，可以在此配置的基础上根据项目需求进行修改

```js
module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
```

> 注意：在配置 postcss-loader 时，应避免 ignore node_modules 目录，这会导致 xpre 的样式无法被编译

