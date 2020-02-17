# Icon 图标

### 说明
基于`iconfont`[字体图标库](https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=18529)

### 引入

``` javascript
import { Icon } from 'xpre';

Vue.use(Icon);
```

## 代码演示

### 基础用法

`Icon`的`name`属性支持传入图标名称或图片链接

```html
<x-icon name="shanchu" />
<x-icon name="https://pic.superbed.cn/item/5d76295f451253d178181c27.png" />
```

<!-- ### 显示徽标

```html
<x-icon name="chat" info="9" />
<x-icon name="chat" info="99+" />
```

 ### 使用本地字体文件

Icon 组件默认引用 `yzcdn.cn` 域名下的字体文件，如果想要使用本地字体文件，请引入下面的 css 文件

```js
import 'vant/lib/icon/local.css';
``` -->

### 自定义图标

可以参考如下方式引入自定义字体图标，之后就可以在 Icon 组件中直接使用

```css
@font-face {
  font-family: 'my-icon';
  src: ...
}

.my-icon {
  font-family: 'my-icon';
}

.my-icon-hehe::before {
  content: '\e392';
}
```

```html
<x-icon class-prefix="my-icon" name="hehe" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|------|
| name | 图标名称或图片链接 | `string` | - | - |
| color | 图标颜色 | `string` | `inherit` | - |
| size | 图标大小，如 `20px` `2em`，默认单位为`px` | `string | number` | `inherit` | 2.0.0 |
| class-prefix | 类名前缀 | `string` | `x-icon` | - |
| tag | HTML 标签 | `string` | `i` | 1.6.10 |
