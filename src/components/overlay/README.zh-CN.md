# Overlay 遮罩层

### 引入

``` javascript
import { Overlay } from 'xpre';

Vue.use(Overlay);
```

## 代码演示

### 基础用法

```html
<x-button
  type="primary"
  text="显示遮罩层"
  @click="show = true"
/>

<x-overlay
  :show="show"
  @click="show = false"
/>
```

```js
export default {
  data() {
    return {
      show: false
    }
  }
},
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|------|
| show | 是否展示遮罩层 | `boolean` | `false` | - |
| z-index | z-index 层级 | `number | string` | `1` | - |
| duration | 动画时长，单位秒 | `number | string` | `0.3` | - |
| class-name | 自定义类名(新增类名而不是替换内置类名) | `string` | - | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击时触发 | event: Event |
