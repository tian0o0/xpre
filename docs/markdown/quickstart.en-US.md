# Quickstart

### Install

```bash
# Using npm
npm i xpre -S

# Using yarn
yarn add xpre
```

## Usage

### 1. Import on demand

Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) to import components on demand

```bash
# Install plugin
npm i babel-plugin-import -D
```

```js
// set babel config in .babelrc or babel-loader
// Note: Don't set libraryDirectory if you are using webpack 1.
{
  "plugins": [
    ["import", {
      "libraryName": "xpre",
      "libraryDirectory": "es/components",
      "style": true
    }]
  ]
}

// For users who use babel7, that can be configured in babel.config.js
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'xpre',
      libraryDirectory: 'es',
      style: true
    }, 'xpre']
  ]
};
```

```js
// Then you can import components from vant
import { Button } from 'xpre';
```

> If you are using TypeScript，please use [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) instead

### 2. Manually import

```js
import Button from 'xpre/lib/components/button';
import 'xpre/lib/components/button/style';
```
 
### 3. Import all components

```js
import Vue from 'vue';
import Xpre from 'xpre';
import 'xpre/lib/index.css';

Vue.use(Xpre);
```

> If you configured babel-plugin-import, you won't be allowed to import all components.


### Rem units

Xpre use `px` as size units by default，you can use tools such as `postcss-pxtorem` to transform units to `rem`.

- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)
- [lib-flexible](https://github.com/amfe/lib-flexible)

postcss config example:

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
