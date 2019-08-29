<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <x-row>
        <x-col span="8">8</x-col>
        <x-col span="8">8</x-col>
        <x-col span="8">8</x-col>
      </x-row>

      <x-row>
        <x-col span="4">4</x-col>
        <x-col
          span="10"
          offset="1"
        >
          10, offset = 1
        </x-col>
      </x-row>
    </demo-block>

    <demo-block :title="$t('title2')">
      <x-row gap="20">
        <x-col span="8">8</x-col>
        <x-col span="8">8</x-col>
        <x-col span="8">8</x-col>
      </x-row>
    </demo-block>

    <demo-block
      v-if="!$attrs.weapp"
      :title="$t('title3')"
    >
      <x-row type="flex">
        <x-col span="6">6</x-col>
        <x-col span="6">6</x-col>
        <x-col span="6">6</x-col>
      </x-row>

      <x-row
        type="flex"
        justify="center"
      >
        <x-col span="6">6</x-col>
        <x-col span="6">6</x-col>
        <x-col span="6">6</x-col>
      </x-row>

      <x-row
        type="flex"
        justify="space-between"
      >
        <x-col span="6">6</x-col>
        <x-col span="6">6</x-col>
        <x-col span="6">6</x-col>
      </x-row>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '设置列元素间距',
      title3: 'Flex 布局'
    },
    'en-US': {
      title2: 'Column Spacing',
      title3: 'Flex Layout'
    }
  }
};
</script>

<style lang="less">
@import '../../../styles/var';

.demo-col {
  .x-doc-demo-block {
    padding: 0 @padding-md;
  }

  .x-doc-demo-block__title {
    padding-left: 0;
  }

  .x-col {
    margin-bottom: 10px;
    color: @white;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;
    background-color: rgba(0,131,119,.8);
    border-radius: 3px;
    // &:nth-child(odd) {
    //   background-color: rgba(0,131,119,.8);
    // }

    // &:nth-child(even) {
    //   background-color: rgba(0,131,119,.5);
    // }
  }
}
</style>
