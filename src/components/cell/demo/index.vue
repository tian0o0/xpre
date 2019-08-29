<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <x-cell-group
        title="group title"
      >
        <x-cell
          :title="$t('cell')"
          :value="$t('content')"
          required
        />
        <x-cell
          :title="$t('cell')"
          :value="$t('content')"
          :label="$t('desc')"
        />
      </x-cell-group>
    </demo-block>

    <demo-block :title="$t('largeSize')">
      <x-cell
        :title="$t('cell')"
        :value="$t('content')"
      />
      <x-cell
        :title="$t('cell')"
        :value="$t('content')"
        size="large"
        :label="$t('desc')"
      />
    </demo-block>

    <demo-block :title="$t('showIcon')">
      <x-cell
        :title="$t('cell')"
        :value="$t('content')"
        icon="location-o"
      />
    </demo-block>

    <demo-block :title="$t('valueOnly')">
      <x-cell :value="$t('content')" />
    </demo-block>

    <demo-block :title="$t('showArrow')">
      <x-cell
        :title="$t('cell')"
        is-link
      />
      <x-cell
        :title="$t('cell')"
        is-link
        :value="$t('content')"
      />
      <x-cell
        :title="$t('cell')"
        is-link
        arrow-direction="down"
        :value="$t('content')"
      />
    </demo-block>

    <demo-block :title="$t('router')">
      <x-cell
        :title="$t('cell')"
        is-link
        url="//youzan.github.io/vant/mobile.html"
      />
      <x-cell
        :title="$t('cell')"
        is-link
        to="index"
      />
    </demo-block>

    <demo-block :title="$t('groupTitle')">
      <x-cell-group :title="`${$t('group')} 1`">
        <x-cell
          :title="$t('cell')"
          :value="$t('content')"
        />
      </x-cell-group>
      <x-cell-group :title="`${$t('group')} 2`">
        <x-cell
          :title="$t('cell')"
          :value="$t('content')"
        />
      </x-cell-group>
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <x-cell
        :value="$t('content')"
        is-link
      >
        <template #title>
          <span class="custom-title">{{ $t('cell') }}</span>
          <!-- <x-tag type="danger">{{ $t('tag') }}</x-tag> -->
        </template>
      </x-cell>
      <x-cell
        icon="shop-o"
        :title="$t('cell')"
      >
        <template #right-icon>
          <x-icon
            name="search"
            style="line-height: inherit;"
          />
        </template>
      </x-cell>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      cell: '单元格',
      valueOnly: '只设置 value',
      showIcon: '展示图标',
      showArrow: '展示箭头',
      largeSize: '单元格大小',
      group: '分组',
      groupTitle: '分组标题',
      router: '页面跳转'
    },
    'en-US': {
      cell: 'Cell title',
      valueOnly: 'Value only',
      showIcon: 'Left Icon',
      showArrow: 'Link',
      largeSize: 'Size',
      group: 'Group',
      groupTitle: 'Group Title',
      router: 'Router'
    }
  }
};
</script>

<style lang="less">
.demo-cell {
  .custom-title {
    margin-right: 5px;
    vertical-align: middle;
  }
}
</style>
