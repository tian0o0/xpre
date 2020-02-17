<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <x-row>
        <x-image
          width="100"
          height="100"
          lazy-load
          :src="image"
        />
      </x-row>
    </demo-block>

    <demo-block :title="$t('fitMode')">
      <x-row gutter="20">
        <x-col
          v-for="fit in fits"
          span="8"
          :key="fit"
        >
          <x-image
            :fit="fit"
            width="100%"
            height="27vw"
            :src="image"
          />
          <div class="text">{{ fit }}</div>
        </x-col>
      </x-row>
    </demo-block>

    <demo-block :title="$t('round')">
      <x-row gutter="20">
        <x-col
          v-for="fit in fits"
          span="8"
          :key="fit"
        >
          <x-image
            round
            :fit="fit"
            width="100%"
            height="27vw"
            :src="image"
          />
          <div class="text">{{ fit }}</div>
        </x-col>
      </x-row>
    </demo-block>

    <demo-block :title="$t('loading')">
      <x-row gutter="20">
        <x-col span="8">
          <x-image
            width="100%"
            height="27vw"
          />
          <div class="text">{{ $t('defaultTip') }}</div>
        </x-col>

        <x-col span="8">
          <x-image
            width="100%"
            height="27vw"
          >
            <template #loading>
              <x-loading
                type="spinner"
                size="20"
              />
            </template>
          </x-image>
          <div class="text">{{ $t('customTip') }}</div>
        </x-col>
      </x-row>
    </demo-block>

    <demo-block :title="$t('error')">
      <x-row gutter="20">
        <x-col span="8">
          <x-image
            width="100%"
            height="27vw"
            src="x"
          />
          <div class="text">{{ $t('defaultTip') }}</div>
        </x-col>

        <x-col span="8">
          <x-image
            width="100%"
            height="27vw"
            src="x"
          >
            <template #error>{{ $t('loadFail') }}</template>
          </x-image>
          <div class="text">{{ $t('customTip') }}</div>
        </x-col>
      </x-row>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      fitMode: '填充模式',
      round: '圆形图片',
      loading: '加载中提示',
      error: '加载失败提示',
      defaultTip: '默认提示',
      customTip: '自定义提示',
      loadFail: '加载失败'
    },
    'en-US': {
      fitMode: 'Fit Mode',
      round: 'Round',
      loading: 'Loading',
      error: 'Error',
      defaultTip: 'Default Tip',
      customTip: 'Custom Tip',
      loadFail: 'Load failed'
    }
  },

  data() {
    return {
      image: 'https://ae01.alicdn.com/kf/H6e5e22c9a0214cf692a69097c342e981T.png',
      fits: ['contain', 'cover', 'fill', 'none', 'scale-down']
    };
  }
};
</script>

<style lang="less">
@import "../../../styles/var";

.demo-image {
  overflow-x: hidden;
  background-color: @white;

//   .x-row {
//     padding: 0 @padding-md;
//   }

  .x-col {
    margin-bottom: 20px;
  }

  .text {
    margin-top: 5px;
    color: @gray-darker;
    font-size: 14px;
    text-align: center;
  }
}
</style>
