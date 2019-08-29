# Cell

### Install
``` javascript
import { Cell, CellGroup } from 'xpre';

Vue.use(Cell).use(CellGroup);
```

## Usage

### Basic Usage

```html
<x-cell-group>
  <x-cell title="Cell title" value="Content" />
  <x-cell title="Cell title" value="Content" label="Description" />
</x-cell-group>
```

### Size

```html
<x-cell-group>
  <x-cell title="Cell title" value="Content" size="large" />
  <x-cell title="Cell title" value="Content" size="large" label="Description" />
</x-cell-group>
```

### Left Icon

```html
<x-cell-group>
  <x-cell title="Cell title" icon="location-o" />
</x-cell-group>
```

### Value only

```html
<x-cell-group>
  <x-cell value="Content" />
</x-cell-group>
```

### Link

```html
<x-cell-group>
  <x-cell title="Cell title" is-link />
  <x-cell title="Cell title" is-link value="Content" />
  <x-cell title="Cell title" is-link arrow-direction="down" value="Content" />
</x-cell-group>
```

### Router

```html
<x-cell-group>
  <x-cell title="Cell title" is-link url="//youzan.github.io/vant/mobile.html" />
  <x-cell title="Cell title" is-link to="index" />
</x-cell-group>
```

### Group Title

```html
<x-cell-group title="Group 1">
  <x-cell title="Cell title" value="Content" />
</x-cell-group>
<x-cell-group title="Group 2">
  <x-cell title="Cell title" value="Content" />
</x-cell-group>
```

### Advanced Usage

```html
<x-cell value="Content" is-link>
  <template slot="title">
    <span class="custom-title">Cell title</span>
    <x-tag type="danger">Tag</x-tag>
  </template>
</x-cell>

<x-cell title="Cell title" icon="shop-o">
  <x-icon
    slot="right-icon"
    name="search"
    style="line-height: inherit;"
  />
</x-cell>
```

## API

### CellGroup Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| title | Group title | `string` | - |
| border | Whether to show outer border | `boolean` | `true` |

### Cell Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| icon | Left Icon | `string` | - |
| title | Title | `string | number` | - |
| value | Right text | `string | number` | - |
| label | Description below the title | `string` | - |
| size | Size，can be set to `large` | `string` | - |
| border | Whether to show inner border | `boolean` | `true` |
| center | Whether to center content vertically | `boolean` | `true` |
| replace | If true, the navigation will not leave a history record | `boolean` | `false` |
| clickable | Whether to show click feedback when clicked | `boolean` | `false` |
| required | Whether to show required mark | `boolean` | `false` |
| arrow-direction | Can be set to `left` `up` `down` | `string` | - |
| is-link | Whether to show link icon | `boolean` | `false` |
| url | Link URL | `string` | - |
| to | Target route of the link, same as to of vue-router | `string | object` | - |
| title-style | Title style | `any` | - |
| title-class | Title className | `any` | - |
| value-class | Value className | `any` | - |
| label-class | Label className | `any` | - |

### Cell Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click cell | event: Event |

### Cell Slots

| Name | Description |
|------|------|
| default | Default slot |
| icon | Custom icon |
| title | Custom title |
| label | Custom label |
| right-icon | Custom right icon |
