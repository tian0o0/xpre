<template>
  <div>
    <template
      v-for="(navItem, index) in group.list"
    >
      <x-cell
        v-if="!navItem.disabled"
        :key="index"
        :to="'/' + base + navItem.path"
        :title="navItem.title"
        is-link
      />
    </template>
  </div>
  <!-- <x-collapse
    v-model="active"
    :border="false"
    class="mobile-nav"
  >
    <x-collapse-item
      class="mobile-nav__item"
      :title="group.groupName"
      :name="group.groupName"
    >
      <x-icon
        :name="group.icon"
        slot="right-icon"
        class="mobile-nav__icon"
      />
      <template v-for="(navItem, index) in group.list">
        <x-cell
          v-if="!navItem.disabled"
          :key="index"
          :to="'/' + base + navItem.path"
          :title="navItem.title"
          is-link
        />
      </template>
    </x-collapse-item>
  </x-collapse> -->
</template>

<script>
export default {
  props: {
    base: String,
    group: Object
  },

  data() {
    return {
      active: []
    };
  },
  created() {
    console.log(this.group);
  }
};
</script>

<style lang="less">
.mobile-nav {
  &__item {
    margin-bottom: 16px;
  }

  &__icon {
    font-size: 24px;

    img {
      width: 100%;
    }
  }

  .x-collapse-item__content {
    padding: 0;
  }

  .x-collapse-item__title {
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 40px;
    border-radius: 2px;
  }
}
</style>
