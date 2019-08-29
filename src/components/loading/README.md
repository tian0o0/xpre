# Loading

### Install

``` javascript
import { Loading } from 'xpre';

Vue.use(Loading);
```

## Usage

### Type

```html
<x-loading />
<x-loading type="spinner" />
```

### Color

```html
<x-loading color="#1989fa" />
<x-loading type="spinner" color="#1989fa" />
```

### Text

```html
<x-loading size="24px" text="Loading..." />
```

### Vertical

```html
<x-loading size="24px" vertical text="Loading..." />
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| color | Loading color | `string` | `#c9c9c9` |  |
| type | Can be set to `spinner` | `string` | `circular` |
| size | Icon size | `string | number` | `30px` |
| text | Text content | `string` | - |
| text-size | Text font size | `string | number` | `14px` |
| vertical | Whether to arrange icons and text content vertically | `boolean` | `false` |

