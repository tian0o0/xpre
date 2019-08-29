# Icon 图标

### 引入

``` javascript
import { Icon } from 'xpre';

Vue.use(Icon);
```

## 代码演示

### 基础用法

`Icon`的`name`属性支持传入图标名称或图片链接

```html
<x-icon name="close" />
<x-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
```

### 显示徽标

```html
<x-icon name="chat" info="9" />
<x-icon name="chat" info="99+" />
```

<!-- ### 使用本地字体文件

Icon 组件默认引用 `yzcdn.cn` 域名下的字体文件，如果想要使用本地字体文件，请引入下面的 css 文件

```js
import 'vant/lib/icon/local.css'; -->
```

### 自定义图标

如果需要在现有 Icon 的基础上使用更多图标，可以引入你需要的 iconfont 对应的 ttf 文件和样式，之后就可以在 Icon 组件中直接使用

```css
@font-face {
  font-family: 'my-icon';
  src: url('./my-icon.ttf') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.my-icon-extra::before {
  content: '\e626';
}
```

```html
<x-icon class-prefix="my-icon" name="extra" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| name | 图标名称或图片链接 | `string` | - | - |
| info | 图标右上角文字提示 | `string | number` | - | - |
| color | 图标颜色 | `string` | `inherit` | - |
| size | 图标大小，如 `20px` `2em`，默认单位为`px` | `string | number` | `inherit` | 2.0.0 |
| class-prefix | 类名前缀 | `string` | `x-icon` | - |
| tag | HTML 标签 | `string` | `i` | 1.6.10 |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击图标时触发 | event: Event |
