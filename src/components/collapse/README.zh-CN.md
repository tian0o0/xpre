# Collapse 折叠面板

### 引入
``` javascript
import { Collapse, CollapseItem } from 'vant';

Vue.use(Collapse).use(CollapseItem);
```

## 代码演示

### 基础用法

通过`v-model`控制展开的面板列表，`activeNames`为数组格式

```html
<van-collapse v-model="activeNames">
  <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
  <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
  <van-collapse-item title="标题3" name="3" disabled>内容</van-collapse-item>
</van-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeNames: ['1']
    };
  }
};
```

### 手风琴

通过`accordion`可以设置为手风琴模式，最多展开一个面板，此时`activeName`为字符串格式

```html
<van-collapse v-model="activeName" accordion>
  <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
  <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
  <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
</van-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeName: '1'
    };
  }
};
```

### 自定义标题内容

```html
<van-collapse v-model="activeNames">
  <van-collapse-item name="1">
    <div slot="title">标题1 <van-icon name="question-o" /></div>
    内容
  </van-collapse-item>

  <van-collapse-item
    title="标题2"
    name="2"
    icon="shop-o"
  >
    内容
  </van-collapse-item>
</van-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeNames: ['1']
    };
  }
};
```

## API

### Collapse Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前展开面板的 name | `string[] | number[] | string | number` | - | - |
| accordion | 是否开启手风琴模式 | `boolean` | `false` | - |
| border | 是否显示外边框 | `boolean` | `true` | 1.6.9 |

### Collapse Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 切换面板时触发 | activeNames: `string | array` |

### CollapseItem Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|------|
| name | 唯一标识符，默认为索引值 | `string | number` | `index` | - |
| icon | 标题栏左侧图标名称或图片链接，可选值见 Icon 组件 | `string` | - | - |
| size | 标题栏大小，可选值为 `large` | `string` | - | 1.6.9 |
| title | 标题栏左侧内容 | `string | number` | - | - |
| value | 标题栏右侧内容 | `string | number` | - | - |
| label | 标题栏描述信息 | `string | number`  | - | - |
| border | 是否显示内边框 | `boolean` | `true` | - |
| is-link | 是否展示标题栏右侧箭头并开启点击反馈 | `boolean` | `true` | - |
| disabled | 是否禁用面板 | `boolean` | `false` | - |
| title-class | 左侧标题额外类名 | `string` | - | - |
| value-class | 右侧内容额外类名 | `string` | - | - |
| label-class | 描述信息额外类名 | `string` | - | - |

### CollapseItem Slots

| 名称 | 说明 |
|------|------|
| default | 面板内容 |
| value | 自定义显示内容 |
| icon | 自定义`icon` |
| title | 自定义`title` |
| right-icon | 自定义右侧按钮，默认是`arrow` |
