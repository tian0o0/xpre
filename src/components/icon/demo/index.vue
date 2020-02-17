<template>
  <demo-section>
    <div class="section">
      <x-col
        v-for="icon in icons.basic"
        :key="icon"
        span="6"
      >
        <x-icon
          :name="icon"
          :class-prefix="preicon"
        />
        <span>{{ icon }}</span>
      </x-col>
      <x-col span="6">
        <x-icon name="https://pic.superbed.cn/item/5d76295f451253d178181c27.png" />
      </x-col>
    </div>
    <!-- <div>
      <h3>线框风格</h3>
      <div
        v-for="icon in icons.outline"
        :key="icon"
      >
        <x-icon :name="icon" />
        <span>{{ icon }}</span>
      </div>
    </div>
    <div>
      <h3>实底风格</h3>
      <div
        v-for="icon in icons.filled"
        :key="icon"
      >
        <x-icon :name="icon" />
        <span>{{ icon }}</span>
      </div>
    </div> -->
  </demo-section>
</template>

<script>
import icons from '../../../custom-icons/config';

export default {
  i18n: {
    'zh-CN': {
      title: '图标列表',
      info: '显示徽标',
      basic: '基础图标'
    },
    'en-US': {
      title: 'Icon List',
      info: 'Show Info',
      basic: 'Basic Icon'
    }
  },

  data() {
    this.icons = icons;
    return {
      tab: 0
    };
  }
};
</script>

<style lang="less">
@import '../../../styles/var';
.demo-icon {

  &-list {
    box-sizing: border-box;
    min-height: calc(100vh - 65px);
    padding-top: 10px;
  }

  .x-col {
    display: inline-block;
    float: none;
    height: 100px;
    text-align: center;
    vertical-align: middle;

    span {
      display: block;
      padding: 0 5px;
      color: @gray-darker;
      font-size: 12px;
      line-height: 18px;
    }
  }

  .x-icon {
    margin: 20px 0 10px;
    color: @text-color;
    font-size: 32px;
  }

  .x-tab__pane {
    width: auto;
    margin: 20px;
    background-color: #fff;
  }
}
</style>
