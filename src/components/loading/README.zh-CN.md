# Loading 加载

### 引入

``` javascript
import { Loading } from 'xpre';

Vue.use(Loading);
```

## 代码演示

### 加载类型

```html
<x-loading />
<x-loading type="spinner" />
```

### 自定义颜色

```html
<x-loading color="#1989fa" />
<x-loading type="spinner" color="#1989fa" />
```

### 加载文案

```html
<x-loading size="24px" text="加载中..." />
```

### 垂直排列

```html
<x-loading size="24px" vertical text="加载中..." />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| color | 颜色 | `string` | `#c9c9c9` | - |
| type | 类型，可选值为 `spinner` | `string` | `circular` | - |
| size | 加载图标大小，默认单位为`px` | `string | number` | `30px` | - |
| text | 加载文案 | `string` | - |
| text-size | 文字大小，默认单位为`px` | `string | number` | `14px` | 2.0.0 |
| vertical | 是否垂直排列图标和文字内容 | `boolean` | `false` | 2.0.0 |

