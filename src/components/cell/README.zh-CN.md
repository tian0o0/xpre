# Cell 单元格

### 引入
``` javascript
import { Cell, CellGroup } from 'xpre';

Vue.use(Cell).use(CellGroup);
```

## 代码演示

### 基础用法

`Cell`可以单独使用，也可以与`CellGroup`搭配使用。`CellGroup`可以为`Cell`提供上下外边框。

```html
<x-cell-group>
  <x-cell title="单元格" value="内容" />
  <x-cell title="单元格" value="内容" label="描述信息" />
</x-cell-group>
```

### 单元格大小

通过`size`属性可以控制单元格的大小

```html
<x-cell title="单元格" value="内容" size="large" />
<x-cell title="单元格" value="内容" size="large" label="描述信息" />
```

### 展示图标

通过`icon`属性在标题左侧展示图标

```html
<x-cell title="单元格" icon="location-o" />
```

### 只设置 value

只设置`value`时会向左对齐

```html
<x-cell value="内容" />
```

### 展示箭头

传入`is-link`属性则会在右侧显示箭头，并且可以通过传入`arrow-direction`属性控制箭头方向

```html
<x-cell title="单元格" is-link />
<x-cell title="单元格" is-link value="内容" />
<x-cell title="单元格" is-link arrow-direction="down" value="内容" />
```

### 页面跳转

可以通过`url`属性进行页面跳转，或通过`to`属性进行 vue-router 跳转

```html
<x-cell title="单元格" is-link url="//youzan.github.io/vant/mobile.html" />
<x-cell title="单元格" is-link to="index" />
```

### 分组标题

通过`CellGroup`的`title`属性可以指定分组标题

```html
<x-cell-group title="分组1">
  <x-cell title="单元格" value="内容" />
</x-cell-group>
<x-cell-group title="分组2">
  <x-cell title="单元格" value="内容" />
</x-cell-group>
```

### 高级用法

如以上用法不能满足你的需求，可以使用对应的`slot`来自定义显示的内容

```html
<x-cell value="内容" is-link>
  <template slot="title">
    <span class="custom-title">单元格</span>
    <x-tag type="danger">标签</x-tag>
  </template>
</x-cell>

<x-cell title="单元格" icon="shop-o">
  <x-icon
    slot="right-icon"
    name="search"
    style="line-height: inherit;"
  />
</x-cell>
```

## API

### CellGroup Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| title | 分组标题 | `string` | `-` | 1.6.9 |
| border | 是否显示外边框 | `boolean` | `true` | - |

### Cell Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| icon | 左侧图标名称或图片链接，可选值见 Icon 组件 | `string` | - | - |
| title | 左侧标题 | `string | number` | - | - |
| value | 右侧内容 | `string | number` | - | - |
| label | 标题下方的描述信息 | `string` | - | - |
| size | 单元格大小，可选值为 `large` | `string` | - | - |
| url | 跳转链接 | `string` | - | - |
| to | 路由跳转对象，同 vue-router 的 to 属性 | `string | object` | - | - |
| border | 是否显示内边框 | `boolean` | `true` | - |
| replace | 跳转时是否替换当前页面历史 | `boolean` | `false` | - |
| clickable | 是否开启点击反馈 | `boolean` | `false` | - |
| required | 是否显示表单必填星号 | `boolean` | `false` | - |
| center | 是否使内容垂直居中 | `boolean` | `false` | - |
| arrow-direction | 箭头方向，可选值为 `left` `up` `down` | `string` | - | -|
| is-link | Whether to show link icon | `boolean` | `false` |
| url | Link URL | `string` | - |
| to | Target route of the link, same as to of vue-router | `string | object` | - |
| title-style | 左侧标题额外样式 | `any` | - | - |
| title-class | 左侧标题额外类名 | `any` | - | - |
| value-class | 右侧内容额外类名 | `any` | - | - |
| label-class | 描述信息额外类名 | `any` | - | - |

### Cell Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击单元格时触发 | event: Event |

### Cell Slots

| 名称 | 说明 |
|------|------|
| default | 自定义`value`显示内容 |
| title | 自定义标题显示内容 |
| label | 自定义标题下方描述显示内容 |
| icon | 自定义左侧图标 |
| right-icon | 自定义右侧按钮，默认为`arrow` |
