# NavBar 导航栏

### 引入

``` javascript
import { NavBar } from 'xpre';

Vue.use(NavBar);
```

## 代码演示

### 基础用法

```html
<x-nav-bar
  title="人在塔在"
  left-text="back"
  right-text="开大"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
```

```js
export default {
  methods: {
    onClickLeft() {
      this.$toast('点击左按钮');
    },
    onClickRight() {
      this.$toast('点击右按钮');
    }
  }
}
```

### 插槽用法

```html
<x-nav-bar title="标题" left-text="返回" left-arrow>
  <x-icon name="search" #right />
</x-nav-bar>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|------|
| title | 标题 | `string` | `''` | - |
| left-text | 左侧文案 | `string` | `''` | - |
| right-text | 右侧文案 | `string` | `''` | - |
| left-arrow | 是否显示左侧箭头 | `boolean` | `false` | - |
| fixed | 是否固定在顶部 | `boolean` | `false` | - |
| border | 是否显示下边框 | `boolean` | `true` | - |
| z-index | 元素 z-index | `number` | `1` | - |

### Slots

| 名称 | 说明 |
|------|------|
| title | 自定义标题 |
| left | 自定义左侧区域内容 |
| right | 自定义右侧区域内容 |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click-left | 点击左侧按钮时触发 | - |
| click-right | 点击右侧按钮时触发 | - |
