<template>
  <div>
    <demo-section>
      <demo-block title="垂直滚动">
        <x-scroll
          :list="emojis"
          class="scroll-wrapper"
          ref="scroll"
          @scroll="onScroll"
          @scrollEnd="onScrollEnd"
        >
          <div class="scroll-content">
            <div
              class="scroll-item"
              v-for="(item, index) in emojis"
              :key="index"
              @click="clickHandler($event)"
            >
              {{ item }}
            </div>
          </div>
        </x-scroll>
      </demo-block>
      <demo-block title="水平滚动">
        <x-scroll
          :list="emojis"
          horizontal
        >
          <div class="scroll-content2">
            <div
              class="scroll-item"
              v-for="(item, index) in emojis"
              :key="index"
              @click="clickHandler(item)"
            >
              {{ item }}
            </div>
          </div>
        </x-scroll>
      </demo-block>
      <demo-block title="自由滚动">
        <x-scroll
          :list="emojis"
          free-scroll
          class="scroll-wrapper3"
        >
          <div class="scroll-content3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </x-scroll>
      </demo-block>
    </demo-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emojis: [
        '😀 😁 😂 🤣 😃',
        '😄 😅 😆 😉 😊',
        '😫 😴 😌 😛 😜',
        '👆🏻 😒 😓 😔 👇🏻',
        '😑 😶 🙄 😏 😣',
        '😞 😟 😤 😢 😭',
        '🤑 😲 ☹️ 🙁 😖',
        '👍 👎 👊 ✊ 🤛',
        '☝️ ✋ 🤚 🖐 🖖',
        '👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼',
        '☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽',
        '🌖 🌗 🌘 🌑 🌒',
        '💫 💥 💢 💦 💧',
        '🐠 🐟 🐬 🐳 🐋',
        '😬 😐 😕 😯 😶',
        '😇 😏 😑 😓 😵',
        '🐥 🐣 🐔 🐛 🐤',
        '💪 ✨ 🔔 ✊ ✋',
        '👇 👊 👍 👈 👆',
        '💛 👐 👎 👌 💘'
      ]
    };
  },
  methods: {
    clickHandler(e) {
      this.$refs.scroll.bs.scrollTo(0, -50, 1000);
    },
    onScroll(pos) {
    },
    onScrollEnd(pos) {
    }
  }
};
</script>

<style lang="less" scoped>

.scroll-wrapper {
    height: 300px;

     .scroll-content {
         .scroll-item {
             height: 50px;
             line-height: 50px;
             font-size: 24px;
             font-weight: bold;
             border-bottom: 1px solid #eee;
             text-align: center;
             &:nth-child(2n) {
                 background-color: #f3f5f7;
             }
             &:nth-child(2n+1) {
                 background-color: #42b983;
             }
         }
     }
}
.scroll-content2 {
    .scroll-item {
        height: 50px;
        line-height: 50px;
        font-size: 24px;
        display: inline-block;
        text-align: center;
        padding: 0 10px;
    }
}
.scroll-wrapper3 {
    width: 100%;
    height: 300px;
    background-color: #efeff4;
    overflow: hidden;
    .scroll-content3 {
        background-color: #efeff4;
        width: 1500px;
        height: 1000px;
        p {
            font-size: 16px;
            padding: 20px;
            line-height: 200%;
            margin: 0;
        }
    }
}
</style>
