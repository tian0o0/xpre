<template>
  <demo-section>
    <demo-block :title="$t('type')">
      <div class="demo-button-row">
        <x-button
          type="default"
        >
          {{ $t('default') }}
        </x-button>
        <x-button
          type="primary"
        >
          {{ $t('primary') }}
        </x-button>
        <x-button
          type="info"
        >
          {{ $t('info') }}
        </x-button>
      </div>
      <x-button
        type="danger"
      >
        {{ $t('danger') }}
      </x-button>
      <x-button
        type="warning"
      >
        {{ $t('warning') }}
      </x-button>
    </demo-block>

    <demo-block :title="$t('ripple')">
      <x-button
        type="primary"
        ripple
        :text="$t('ripple')"
      />
    </demo-block>

    <demo-block :title="$t('raised')">
      <x-button
        type="primary"
        raised
        :text="$t('raised')"
      />
    </demo-block>

    <demo-block :title="$t('plain')">
      <x-button
        plain
        type="primary"
        :text="$t('plain')"
      />
      <x-button
        plain
        type="danger"
        :text="$t('plain')"
      />
    </demo-block>

    <demo-block :title="$t('hairline')">
      <x-button
        plain
        hairline
        type="primary"
        :text="$t('hairlineButton')"
      />
      <x-button
        plain
        hairline
        type="danger"
        :text="$t('hairlineButton')"
      />
    </demo-block>

    <demo-block :title="$t('disabled')">
      <x-button
        disabled
        type="primary"
        :text="$t('disabled')"
      />
      <x-button
        disabled
        type="danger"
        :text="$t('disabled')"
      />
    </demo-block>

    <demo-block :title="$t('loadingStatus')">
      <x-button
        loading
        type="primary"
      />
      <x-button
        loading
        type="primary"
        loading-type="spinner"
      />
      <x-button
        loading
        :loading-text="$t('loadingText')"
        type="danger"
      />
    </demo-block>

    <demo-block :title="$t('shape')">
      <x-button
        type="primary"
        square
        :text="$t('square')"
      />
      <x-button
        type="danger"
        round
        :text="$t('round')"
      />
    </demo-block>

    <demo-block :title="$t('icon')">
      <x-button
        type="primary"
        icon="star-o"
      />
      <x-button
        type="primary"
        icon="star-o"
        :text="$t('button')"
      />
      <x-button
        plain
        type="primary"
        icon="https://recruitment-hoook.oss-cn-beijing.aliyuncs.com/logo.png"
        :text="$t('button')"
      />
    </demo-block>

    <demo-block :title="$t('size')">
      <x-button
        type="primary"
        size="large"
      >
        {{ $t('large') }}
      </x-button>
      <x-button
        type="primary"
        size="normal"
      >
        {{ $t('normal') }}
      </x-button>
      <x-button
        type="primary"
        size="small"
      >
        {{ $t('small') }}
      </x-button>
      <x-button
        type="primary"
        size="mini"
      >
        {{ $t('mini') }}
      </x-button>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      type: '按钮类型',
      size: '按钮尺寸',
      icon: '图标按钮',
      loading: '加载状态',
      shape: '按钮形状',
      default: '默认按钮',
      primary: '主要按钮',
      info: '信息按钮',
      danger: '危险按钮',
      warning: '警告按钮',
      large: '大号按钮',
      normal: '普通按钮',
      small: '小型按钮',
      mini: '迷你按钮',
      plain: '朴素按钮',
      square: '方形按钮',
      round: '圆形按钮',
      hairline: '细边框',
      hairlineButton: '细边框按钮',
      loadingText: '加载中...',
      ripple: '水波纹按钮',
      raised: '悬浮按钮'
    },
    'en-US': {
      type: 'Type',
      size: 'Size',
      icon: 'Icon',
      loading: 'Loading',
      shape: 'Shape',
      default: 'Default',
      primary: 'Primary',
      info: 'Info',
      danger: 'Danger',
      warning: 'Warning',
      large: 'Large',
      normal: 'Normal',
      small: 'Small',
      mini: 'Mini',
      plain: 'Plain',
      square: 'Square',
      round: 'Round',
      hairline: 'Hairline',
      hairlineButton: 'Hairline',
      loadingText: 'Loading...',
      ripple: 'Ripple',
      raised: 'Raised'
    }
  },
};
</script>

<style lang="less">
@import "../../../styles/var";

.demo-button {
  .x-button {
    &--large {
      margin-bottom: @padding-md;
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: @padding-md;
    }
  }

  .x-doc-demo-block {
    padding: 0 @padding-md;
  }

  .x-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: @padding-sm;
  }
}
</style>
