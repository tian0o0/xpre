# Icon

### Install

``` javascript
import { Icon } from 'xpre';

Vue.use(Icon);
```

## Usage

### Basic Usage

Use `name` prop to set icon name or icon URL

```html
<x-icon name="close" />
<x-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
```

### Show Info

```html
<x-icon name="chat" info="9" />
<x-icon name="chat" info="99+" />
```

<!-- ### Use local font file

Icon uses font file in `yzcdn.cn` by default，if you want to use the local font file，please import the following css file.

```js
import 'vant/lib/icon/local.css'; -->
```

### Add custom iconfont

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

| Attribute | Description | Type | Default |
|------|------|------|------|
| name | Icon name or URL | `string` | `''` |
| info | Info message | `string | number` | `''` |
| color | Icon color | `string` | `inherit` |
| size | Icon size | `string | number` | `inherit` |
| class-prefix | ClassName prefix | `string` | `x-icon` |
| tag | HTML Tag | `string` | `i` |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click icon | event: Event |
