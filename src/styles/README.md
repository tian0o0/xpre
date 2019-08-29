# Built-in Style

### Intro

Xpre contains some common styles that can be used directly by the className.

### Text ellipsis

When the text content length exceeds the maximum container width, the excess text is automatically omitted.

```html
<div class="x-ellipsis">
  This is a paragraph of 250px width limit, the back will be omitted.
</div>
```

### Hairline

Add 1px border under the Retina screen for the element, based on a pseudo element.

```html
<!-- border top -->
<div class="x-hairline--top"></div>

<!-- border bottom -->
<div class="x-hairline--bottom"></div>

<!-- border left -->
<div class="x-hairline--left"></div>

<!-- border right -->
<div class="x-hairline--right"></div>

<!-- border top & bottom -->
<div class="x-hairline--top-bottom"></div>

<!-- full border -->
<div class="x-hairline--surround"></div>
```

### Animation

```html
<!-- fade in  -->
<transition name="x-fade">
  <div v-show="visible">Fade</div>
</transition>

<!-- slide up -->
<transition name="x-slide-up">
  <div v-show="visible">Slide Up</div>
</transition>

<!-- slide down -->
<transition name="x-slide-down">
  <div v-show="visible">Slide Down</div>
</transition>

<!-- slide left -->
<transition name="x-slide-left">
  <div v-show="visible">Slide Left</div>
</transition>

<!-- slide right -->
<transition name="x-slide-right">
  <div v-show="visible">Slide Right</div>
</transition>
```
