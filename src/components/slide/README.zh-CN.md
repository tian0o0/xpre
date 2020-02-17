# Slide 幻灯片

### 说明
`Slide`组件基于`@better-scroll/slide`

### 引入

``` javascript
import { Slide } from 'xpre';

Vue.use(Slide);
```

## 代码演示

### 基础用法
> 通过`indicator`插槽来自定义indicator

```html
<x-slide ref="slide" @slideWillChange="onSlideWillChange">
    <div class="slide-item page1">page 1</div>
    <div class="slide-item page2">page 2</div>
    <div class="slide-item page3">page 3</div>
    <div class="slide-item page4">page 4</div>
    <template #indicator>
        <div class="custom-indicator">
            {{ current + 1 }}/4
        </div>
    </template>
</x-slide>

<x-button @click="prevPage">上一页</x-button>
<x-button @click="nextPage">下一页</x-button>
```
```js
export default {
    data() {
      return {
        current: 0
      }
    },
    methods: {
      prevPage() {
        this.$refs.slide.bs.prev();
      },
      nextPage() {
        this.$refs.slide.bs.next();
      },
      onSlideWillChange(i) {
        this.current = i
      }
    }
}
```

## API

### Props

| Prop | State | Type | default |
|------|------|------|------|------|
| vertical | 是否开启`垂直滚动` | `Boolean` | `false` |
| autoplay | 是否自动轮播 | `Boolean` `Number` | `3000`ms |
| loop | 是否循环轮播 | `Boolean` | `true` |

### Slots
| 名称 | 说明 |
|------|------|
| default | 轮播内容 |
| indicator | 自定义指示器 |

### Events
| 事件名 | 说明 | 回调参数 |
|------|------|------|
| slideWillChange | 每一页轮播结束后触发 | index, 当前页的索引 |

### 实例方法

以`next`为例，请按如下方式调用：
```html
<x-slide ref="slide"></x-slide>
```
```js
export default {
    methods: {
        nextPage() {
            this.$refs.slide.bs.next();
        }
    }
}
```

> 参考[@better-scroll/slide方法](https://better-scroll.github.io/docs/zh-CN/plugins/slide.html#%E6%96%B9%E6%B3%95)
