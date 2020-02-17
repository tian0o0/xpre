<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <x-button
        type="primary"
        @click="showImagePreview"
      >
        {{ $t('button1') }}
      </x-button>
    </demo-block>

    <demo-block :title="$t('button2')">
      <x-button
        type="primary"
        @click="showImagePreview(1)"
      >
        {{ $t('button2') }}
      </x-button>
    </demo-block>

    <demo-block :title="$t('button3')">
      <x-button
        type="primary"
        @click="showImagePreview(0, 1000)"
      >
        {{ $t('button3') }}
      </x-button>
    </demo-block>

    <demo-block :title="$t('componentCall')">
      <x-button
        type="primary"
        @click="componentCall"
      >
        {{ $t('componentCall') }}
      </x-button>
      <x-image-preview
        v-model="show"
        :images="images"
        @change="onChange"
      >
        <template #index>{{ $t('index', index) }}</template>
      </x-image-preview>
    </demo-block>
  </demo-section>
</template>

<script>
import ImagePreview from '../index';

const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
  'https://img.yzcdn.cn/vant/apple-4.jpg'
];

export default {
  i18n: {
    'zh-CN': {
      button1: '预览图片',
      button2: '指定初始位置',
      button3: '异步关闭',
      componentCall: '组件调用',
      index: index => `第${index + 1}页`
    },
    'en-US': {
      button1: 'Show Images',
      button2: 'Custom Start Position',
      button3: 'Async Close',
      componentCall: 'Component Call',
      index: index => `Page: ${index}`
    }
  },

  data() {
    return {
      show: false,
      images,
      index: 0
    };
  },

  methods: {
    componentCall() {
      this.show = true;
    },

    onChange(index) {
      this.index = index;
    },

    showImagePreview(position, timer) {
      const instance = ImagePreview({
        images,
        asyncClose: !!timer,
        closeOnPopstate: true,
        startPosition: typeof position === 'number' ? position : 0
      });

      if (timer) {
        setTimeout(() => {
          instance.close();
        }, timer);
      }
    }
  }
};
</script>

<style lang="less">
@import "../../../styles/var";

.demo-image-preview {
  background-color: @white;
}

.x-image-preview {
  img {
    -webkit-user-drag: none;
  }
}
</style>
