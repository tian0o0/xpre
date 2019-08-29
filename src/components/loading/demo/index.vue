<template>
  <demo-section>
    <demo-block :title="$t('type')">
      <x-loading />
      <x-loading type="spinner" />
    </demo-block>

    <demo-block :title="$t('color')">
      <x-loading color="#1989fa" />
      <x-loading
        type="spinner"
        color="#1989fa"
        text="dengdai"
      />
    </demo-block>

    <demo-block
      v-if="!$attrs.weapp"
      :title="$t('text')"
    >
      <x-loading
        size="48px"
        :text="$t('loading')"
      />
    </demo-block>

    <demo-block
      v-if="!$attrs.weapp"
      :title="$t('vertical')"
    >
      <x-loading
        size="24px"
        vertical
        :text="$t('loading')"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      type: '加载类型',
      color: '自定义颜色',
      text: '加载文案',
      vertical: '垂直排列'
    },
    'en-US': {
      type: 'Type',
      color: 'Color',
      text: 'Text',
      vertical: 'Vertical'
    }
  }
};
</script>

<style lang="less">
.demo-loading {
  .x-loading {
    display: inline-block;
    margin: 5px 0 5px 20px;

    &--vertical {
      display: inline-flex;
    }
  }
}
</style>
