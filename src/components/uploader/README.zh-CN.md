# Uploader 文件上传

### 引入

``` javascript
import { Uploader } from 'xpre';

Vue.use(Uploader);
```

## 代码演示

### 基础用法

- `beforeRead`函数可以在上传前进行校验，返回`true`表示校验通过，返回`false`表示校验失败。还支持返回`Promise`进行异步校验

- 文件上传完毕后会触发`after-read`回调函数

```html
<x-uploader :before-read="beforeRead" :after-read="afterRead" v-model="fileList"/>
```

```javascript
export default {
  data: {
    return {
      fileList: []
    }
  },
  methods: {
    // 同步校验，返回布尔值
    beforeRead(file) {
      if (file.type !== 'image/jpeg') {
        Toast('请上传 jpg 格式图片');
        return false;
      }
    
      return true;
    },

    // 异步校验，返回 Promise
    asyncBeforeRead(file) {
      return new Promise((resolve, reject) => {
        if (file.type !== 'image/jpeg') {
          Toast('请上传 jpg 格式图片');
          reject();
        } else {
          resolve();
        }
      });
    },

    afterRead({content, file}) {
      // content：图片内容，根据`result-type`而来，默认是`dadaURL`
      // file：file对象
    }
  }
};
```

<!-- ### 图片预览

通过`v-model`可以绑定已经上传的图片列表，并展示图片列表的预览图

```html
<x-uploader v-model="fileList" />
```

```javascript
export default {
  data() {
    return {
      fileList: [
        { url: 'https://ae01.alicdn.com/kf/H6e5e22c9a0214cf692a69097c342e981T.png' }
      ]
    }
  }
};
``` -->

### 限制上传数量

- 通过`max-count`属性可以限制上传文件的数量，上传数量达到限制后，会自动隐藏上传区域
- 通过`accept="*"`允许上传图片外的其它文件
```html
<x-uploader
  v-model="fileList"
  multiple
  :max-count="2"
  accept="*"
/>
```

```javascript
export default {
  data() {
    return {
      fileList: []
    }
  }
};
```

### 自定义上传样式

通过插槽可以自定义上传区域的样式

```html
<x-uploader v-model="fileList">
  <x-button icon="photo" type="primary" size="small">上传图片</x-button>
</x-uploader>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|------|
| accept | 接受的文件类型 | `string` | `image/*` | - |
| preview-image | 是否在上传完成后展示预览图 | `boolean` | `true` | - |
| preview-size | 预览图和上传区域的尺寸，默认单位为`px` | `string | number` | `80px` | - |
| multiple | 是否开启图片多选，部分安卓机型不支持 | `boolean` | `false` | - |
| disabled | 是否禁用文件上传 | `boolean` | `false` | - |
| capture | 图片选取模式，可选值为`camera`(直接调起摄像头) | `string` | - | - |
| before-read | 文件读取前的回调函数，返回`false`可终止文件读取，支持返回`Promise` | `Function` | - | - |
| after-read | 文件读取完成后的回调函数 | `Function` | - | - |
| max-size | 文件大小限制，单位为`byte` | `number` | - | - |
| max-count | 文件上传数量限制 | `number` | - | - |
| result-type | 文件读取结果类型，可选值为`text` | `string` | `dataUrl` | - |
| upload-text | 上传区域文字提示 | `string` | - | - |

<!-- | name | 标识符，可以在回调函数的第二项参数中获取 | `string | number` | - | - | -->

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| oversize | 文件大小超过限制时触发 | 同`after-read` |
| delete | 删除文件预览时触发 | file: 被删除的文件对象 |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义上传区域 |

### before-read、after-read 回调参数

| 参数名 | 说明 | 类型 |
|------|------|------|
| file | 文件解析后的 file 对象 | `object` |

<!-- | detail | 额外信息，包含 name 字段 | `object` | -->
