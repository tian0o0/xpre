# Button 按钮

### 引入

``` javascript
import { Button } from 'xpre';

Vue.use(Button);
```

## 代码演示

### 按钮类型

支持`default`、`primary`、`info`、`warning`、`danger`五种类型，默认为`default`

```html
<x-button type="default">默认按钮</x-button>
<x-button type="primary">主要按钮</x-button>
<x-button type="info">信息按钮</x-button>
<x-button type="warning">警告按钮</x-button>
<x-button type="danger">危险按钮</x-button>
```

### 水波纹按钮

```html
<x-button type="primary" ripple>水波纹按钮</x-button>
```

### 悬浮按钮  :sparkles:

```html
<x-button type="primary" raised>悬浮按钮</x-button>
```
> 设置了`plain`属性将不生效

### 朴素按钮

通过`plain`属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```html
<x-button plain type="primary">朴素按钮</x-button>
<x-button plain type="danger">朴素按钮</x-button>
```

### 细边框

设置`hairline`属性可以开启 0.5px 边框，基于伪类实现

```html
<x-button plain hairline type="primary">细边框按钮</x-button>
<x-button plain hairline type="danger">细边框按钮</x-button>
```

### 禁用状态

通过`disabled`属性来禁用按钮，禁用状态下按钮不可点击

```html
<x-button disabled type="primary">禁用状态</x-button>
<x-button disabled type="danger">禁用状态</x-button>
```

### 加载状态

通过`loading`属性设置按钮为加载状态，加载状态下默认会隐藏按钮文字，可以通过`loading-text`设置加载状态下的文字

```html 
<x-button loading type="primary" />
<x-button loading type="primary" loading-type="spinner" />
<x-button loading type="danger" loading-text="加载中..." />
```

### 按钮形状

通过`square`设置方形按钮，通过`round`设置圆形按钮

```html 
<x-button square type="primary">方形按钮</x-button>
<x-button round type="danger">圆形按钮</x-button>
```

### 图标按钮

通过`icon`属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL

```html 
<x-button icon="star-o" type="primary" />
<x-button icon="star-o" type="primary">按钮</x-button>
<x-button icon="https://ae01.alicdn.com/kf/Hfa3f8503c37e4da7862d831690178610h.png" type="danger">按钮</x-button>
```

### 按钮尺寸

支持`large`、`normal`、`small`、`mini`四种尺寸，默认为`normal`

```html 
<x-button type="primary" size="large">大号按钮</x-button>
<x-button type="primary" size="normal">普通按钮</x-button>
<x-button type="primary" size="small">小型按钮</x-button>
<x-button type="primary" size="mini">迷你按钮</x-button>
```

## API

### Props

| Prop | State | Type | default |
|------|------|------|------|------|
| type | 类型，可选值为 `primary` `info` `warning` `danger` | `string` | `default` | - |
| size | 尺寸，可选值为 `large` `small` `mini` | `string` | `normal` | - |
| text | 按钮文字 | `string` | - | - |
| icon | 左侧图标名称或图片链接，可选值见 Icon 组件 | `string` | - | - |
| tag | HTML 标签 | `string` | `button` | - |
| native-type | 原生 button 标签 type 属性 | `string` | - | - |
| block | 是否为块级元素 | `boolean` | `false` | - |
| plain | 是否为朴素按钮 | `boolean` | `false` | - |
| square | 是否为方形按钮 | `boolean` | `false` | - |
| round | 是否为圆形按钮 | `boolean` | `false` | - |
| disabled | 是否禁用按钮 | `boolean` | `false` | - |
| hairline | 是否使用 0.5px 边框 | `boolean` | `false` | - |
| ripple | 是否允许水波纹(`loading`和`disabled`状态设置无效) | `boolean` | `true` | - |
| loading | 是否显示为加载状态 | `boolean` | `false` | - |
| loading-text | 加载状态提示文字 | `string` | - | - |
| loading-type | 加载图标类型，可选值为`spinner` | `string` | `circular` | - |
| loading-size | 加载图标大小 | `string` | `20px` | - |
| url | 跳转链接 | `string` | - | - |
| to | 路由跳转对象，同 vue-router 的 to 属性 | `string | object` | - | - |
| replace | 跳转时是否替换当前页面历史 | `boolean` | `false` | - |

### Events

| EventName | State | Callback Parameter |
|------|------|------|
| click | 点击按钮，且按钮状态不为加载或禁用时触发 | event: Event |
