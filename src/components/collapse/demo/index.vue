<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <x-collapse
        v-model="active1"
      >
        <x-collapse-item :title="$t('title') + 1">{{ $t('text') }}</x-collapse-item>
        <x-collapse-item :title="$t('title') + 2">{{ $t('text') }}</x-collapse-item>
        <x-collapse-item
          :title="$t('title') + 3"
          disabled
        >
          {{ $t('text') }}
        </x-collapse-item>
      </x-collapse>
    </demo-block>

    <demo-block :title="$t('accordion')">
      <x-collapse
        v-model="active2"
        accordion
      >
        <x-collapse-item :title="$t('title') + 1">{{ $t('text') }}</x-collapse-item>
        <x-collapse-item :title="$t('title') + 2">{{ $t('text') }}</x-collapse-item>
        <x-collapse-item :title="$t('title') + 3">{{ $t('text') }}</x-collapse-item>
      </x-collapse>
    </demo-block>

    <demo-block :title="$t('titleSlot')">
      <x-collapse v-model="active3">
        <x-collapse-item>
          <template #title>
            {{ $t('title') + 1 }}<x-icon name="question-o" />
          </template>
          {{ $t('text') }}
        </x-collapse-item>
        <x-collapse-item
          :title="$t('title') + 2"
          :value="$t('content')"
          icon="shop-o"
        >
          {{ $t('text') }}
        </x-collapse-item>
      </x-collapse>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      accordion: '手风琴',
      titleSlot: '自定义标题内容',
      text: '代码是写出来给人看的，附带能在机器上运行'
    },
    'en-US': {
      accordion: 'Accordion',
      titleSlot: 'Custom title',
      text: 'Content'
    }
  },

  data() {
    return {
      active1: [0],
      active2: 0,
      active3: []
    };
  }
};
</script>

<style lang="less">
@import '../../../styles/var';

.demo-collapse {
  .x-icon-question-o {
    margin-left: 5px;
    color: @blue;
    font-size: 15px;
    vertical-align: -3px;
  }
}
</style>
