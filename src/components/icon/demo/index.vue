<template>
  <demo-section>
    <div class="section">
      <h3>基础图标</h3>
      <div
        v-for="icon in icons.basic"
        :key="icon"
      >
        <x-icon
          :name="icon"
          @click="hehehe('the args')"
          :class-prefix="preicon"
        />
        <span>{{ icon }}</span>
      </div>
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
  },
  methods: {
    hehehe() {
      alert(1);
    }
  }
};
</script>

<style lang="less">
@import '../../../styles/var';
.demo-icon {
  font-size: 0;

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
