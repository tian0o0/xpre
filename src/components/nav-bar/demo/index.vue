<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <x-nav-bar
        title="人在塔在"
        left-text="返回"
        right-text="开大"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <x-nav-bar
        title="人在塔在"
        left-text="返回"
        left-arrow
      >
        <template #right>
          <x-icon name="sousuo" />
        </template>
      </x-nav-bar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      txt: 'me'
    };
  },
  methods: {
    onClickLeft() {
      this.$toast('点击左按钮');
    },
    onClickRight() {
      this.$toast('点击右按钮');
    }
  }
};
</script>
