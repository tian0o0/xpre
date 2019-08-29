<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <x-nav-bar
        :title="$t('title')"
        :left-text="$t('back')"
        :right-text="$t('button')"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <x-nav-bar
        :title="$t('title')"
        :left-text="$t('back')"
        left-arrow
      >
        <template #right>
          <x-icon name="search" />
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
      this.$toast(this.$t('back'));
    },
    onClickRight() {
      this.$toast(this.$t('button'));
    }
  }
};
</script>
