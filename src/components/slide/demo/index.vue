<template>
  <div>
    <demo-section>
      <demo-block title="基础用法">
        <x-slide
          ref="slide"
          @slideWillChange="onscrollEnd"
        >
          <div class="slide-item page1">page 1</div>
          <div class="slide-item page2">page 2</div>
          <div class="slide-item page3">page 3</div>
          <div class="slide-item page4">page 4</div>
          <template #indicator>
            <div
              class="custom-indicator"
            >
              {{ current + 1 }}/4
            </div>
          </template>
        </x-slide>
        <x-button @click="prevPage">上一页</x-button>
        <x-button @click="nextPage">下一页</x-button>
      </demo-block>
    </demo-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0
    };
  },
  methods: {
    prevPage() {
      this.$refs.slide.bs.prev();
    },
    nextPage() {
      this.$refs.slide.bs.next();
    },
    onscrollEnd(i) {
      this.current = i;
    }
  }
};
</script>

<style lang="less" scoped>

.slide-item {
    display: inline-block;
    height: 100%;
    width: 100%;
    text-align: center;
    font-size: 26px;
    &.page1 {
    background-color: #95B8D1;
    }
    &.page2 {
        background-color: #DDA789;
    }
    &.page3 {
        background-color: #C3D899;
    }
    &.page4 {
        background-color: #F2D4A7;
    }
}
.custom-indicator {
    position: absolute;
    right: 6px;
    bottom: 6px;
    background: rgba(0,0,0,.5);
    color: #fff;
    padding: 4px;
    border-radius: 5px;
}
</style>
