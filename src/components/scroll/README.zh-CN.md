# Scroll

### 说明
`scroll`组件基于`@better-scroll/core`

### 引入

``` javascript
import { Scroll } from 'xpre';

Vue.use(Scroll);
```

## 代码演示

### 水平滚动


```html
<x-scroll :list="emojis" class="scroll-wrapper">
    <div class="scroll-content">
        <div class="scroll-item"
            v-for="(item, index) in emojis"
            :key="index"
            @click="clickHandler(item)">{{ item }}</div>
    </div>
</x-scroll>
```
```js
export default {
  data() {
    return {
      emojis: [
        '😀 😁 😂 🤣 😃',
        '😄 😅 😆 😉 😊',
        '😫 😴 😌 😛 😜',
        '👆🏻 😒 😓 😔 👇🏻',
        '😑 😶 🙄 😏 😣',
        '😞 😟 😤 😢 😭',
        '🤑 😲 ☹️ 🙁 😖',
        '👍 👎 👊 ✊ 🤛',
        '☝️ ✋ 🤚 🖐 🖖',
        '👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼',
        '☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽',
        '🌖 🌗 🌘 🌑 🌒',
        '💫 💥 💢 💦 💧',
        '🐠 🐟 🐬 🐳 🐋',
        '😬 😐 😕 😯 😶',
        '😇 😏 😑 😓 😵',
        '🐥 🐣 🐔 🐛 🐤',
        '💪 ✨ 🔔 ✊ ✋',
        '👇 👊 👍 👈 👆',
        '💛 👐 👎 👌 💘'
      ]
    };
  },
  methods: {
    clickHandler(item) {
        this.$toast(item);
    }
  }
};
```

### 水平滚动
```html
<x-scroll :list="emojis" horizontal>
    <div class="scroll-content">
        <div
            class="scroll-item"
            v-for="(item, index) in emojis"
            :key="index"
            @click="clickHandler(item)"
        >
            {{ item }}
        </div>
    </div>
</x-scroll>
```


### 自由滚动
```html
<x-scroll :list="emojis" free-scroll>
    <div class="scroll-content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
</x-scroll>
```

## API

### Props

| Prop | State | Type | default |
|------|------|------|------|------|
| list | 滚动的列表 | `Array` | `[]` |
| horizontal | 是否开启`水平滚动` | `Boolean` | `false` |
| freeScroll | 是否开启`自由滚动` | `Boolean` | `false` |
| probeType | 监听滚动事件的类型，可选值`0` `1` `2` `3` | `Number` | `0` |
| click | Scroll默认阻止浏览器原生click事件 <br>设置为true,会给派发的 event 参数加一个私有属性 _constructed，值为 true | `Boolean` | `false` |
| dblclick | 派发双击事件。当配置成 true 的时候，默认 2 次点击的延时为 300 ms，<br>如果配置成对象可以修改 delay: `dbclick: { delay: 300 }` | `Boolean` `Object` | `false` |
| startY | Scroll垂直方向起始位置, 设置后有从该位置过渡的效果 | `Number` | `0` |
| startX | Scroll水平方向起始位置, 设置后有从该位置过渡的效果 | `Number` | `0` |
| scrollbar | 是否显示滚动条 | `Boolean` | `true` |

### 实例方法

以`scrollTo`为例，请按如下方式调用：
```html
<x-scroll ref="scroll"></x-scroll>
```
```js
export default {
    methods: {
        scrollTo() {
            this.$refs.scroll.bs.scrollTo(0, 50, 300);
        }
    }
}
```

> 参考[@better-scroll/core方法](https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-api.html#%E6%96%B9%E6%B3%95)

### Hooks
better-scroll在滚动过程中会触发一系列钩子：
```js
const hooks = [
  'beforeScrollStart',
  'scrollStart',
  'scroll',
  'scrollCancel',
  'scrollEnd',
  'touchEnd',
  'flick',
  'refresh',
  'disable',
  'enable',
  'destroy'
];
```
通过`v-on`在`<x-scroll></x-scroll>`组件上监听即可

> 参考[@better-scroll/core钩子](https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-api.html#%E9%92%A9%E5%AD%90)
