<template>
  <div style="min-width: 360px;">
    <x-nav-bar
      v-show="title"
      class="x-doc-nav-bar"
      :title="title"
      :left-arrow="showNav"
      @click-left="onBack"
    />
    <keep-alive>
      <router-view :weapp="weapp" />
    </keep-alive>
  </div>
</template>

<script>
function getQueryString(name) {
  const arr = location.search.substr(1).split('&');
  for (let i = 0, l = arr.length; i < l; i++) {
    const item = arr[i].split('=');
    if (item.shift() === name) {
      return decodeURIComponent(item.join('='));
    }
  }
  return '';
}

export default {
  computed: {
    title() {
      const { name } = this.$route.meta;
      return name ? name.replace(/-/g, '') : '';
    },

    showNav() {
      return getQueryString('hide_nav') !== '1';
    },

    weapp() {
      return getQueryString('weapp') === '1';
    }
  },

  methods: {
    onBack() {
      history.back();
    }
  }
};
</script>

<style lang="less">
@import '../../../src/styles/var';

body {
  color: @text-color;
  font-family: 'PingFang SC', Helvetica, 'STHeiti STXihei', 'Microsoft YaHei', Tohoma, Arial, sans-serif;
  line-height: 1;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}

::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

.x-doc-nav-bar {
  height: 56px;
  line-height: 56px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  .x-nav-bar__title {
    font-size: 17px;
    text-transform: capitalize;
  }

  .x-icon {
    color: @gray-dark;
    font-size: 24px;
    cursor: pointer;
  }
}

.x-doc-demo-section {
  margin-top: -56px;
  padding-top: 112px;
}
</style>
