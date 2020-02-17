# Button

### Install

``` javascript
import { Button } from 'xpre';

Vue.use(Button);
```

## Usage

### Type

```html
<x-button type="default">Default</x-button>
<x-button type="primary">Primary</x-button>
<x-button type="info">Info</x-button>
<x-button type="danger">Danger</x-button>
<x-button type="warning">Warning</x-button>
```

### Ripple

```html
<x-button type="primary" ripple>Primary</x-button>
```

### Raised :sparkles:

```html
<x-button type="primary" raised>Raised</x-button>
```
> Not working when set `plain`

### Plain

```html
<x-button plain type="primary">Primary</x-button>
<x-button plain type="danger">Danger</x-button>
```

### Hairline

```html
<x-button plain hairline type="primary">Hairline</x-button>
<x-button plain hairline type="danger">Hairline</x-button>
```

### Disabled

```html
<x-button disabled type="primary">Diabled</x-button>
<x-button disabled type="danger">Diabled</x-button>
```

### Loading

```html 
<x-button loading type="primary" />
<x-button loading type="primary" loading-type="spinner" />
<x-button loading type="danger" loading-text="Loading..." />
```

### Shape

```html 
<x-button square type="primary">Square</x-button>
<x-button round type="danger">Round</x-button>
```

### Icon

```html 
<x-button icon="star-o" type="primary" />
<x-button icon="star-o" type="primary">Button</x-button>
<x-button icon="https://ae01.alicdn.com/kf/Hfa3f8503c37e4da7862d831690178610h.png" type="danger">Button</x-button>
```

### Size

```html 
<x-button type="primary" size="large">Large</x-button>
<x-button type="primary" size="normal">Normal</x-button>
<x-button type="primary" size="small">Small</x-button>
<x-button type="primary" size="mini">Mini</x-button>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| type | Can be set to `primary` `info` `warning` `danger` | `string` | `default` |
| size | Can be set to `large` `small` `mini` | `string` | `normal` |
| text | Text | `string` | - |
| icon | Left Icon | `string` | - |
| tag | HTML Tag | `string` | `button` |
| native-type | Native Type Attribute | `string` | `''` |
| plain | Whether to be plain button | `boolean` | `false` |
| block | Whether to set display block | `boolean` | `false` |
| round | Whether to be round button | `boolean` | `false` |
| square | Whether to be square button | `boolean` | `false` |
| disabled | Whether to disable button | `boolean` | `false` |
| hairline | Whether to use `0.5px` border | `boolean` | `false` |
| ripple | Whether to allow rippe(when `loading`and`disabled` not effective) | `boolean` | `true` |
| loading | Whether show loading status | `boolean` | `false` |
| loading-text | Loading text | `string` | - |
| loading-type | Loading type, can be set to `spinner` | `string` | `circular` |
| loading-size | Loading icon size | `string` | `20px` |
| url | Link URL | `string` | - |
| to | Target route of the link, same as to of vue-router | `string | object` | - |
| replace | If true, the navigation will not leave a history record | `boolean` | `false` |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click button and not disabled or loading | event: Event |
| touchstart | Triggered when touch start | event: TouchEvent |
