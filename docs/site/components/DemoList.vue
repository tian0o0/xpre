<template>
  <div class="side-nav">
    <h1 class="x-title">
      <img src="https://recruitment-hoook.oss-cn-beijing.aliyuncs.com/logo.png">
      <span>Xpre</span>
    </h1>
    <h2 class="x-desc">{{ description }}</h2>
    <template v-for="(item, index) in navList[0].groups">
      <x-cell-group
        :title="item.groupName"
        :key="index"
      >
        <!-- <mobile-nav
          v-for="(group, index) in item.groups"
          :group="group"
          :base="$vantLang"
          :key="index"
        /> -->
        <template
          v-for="(navItem, _index) in item.list"
        >
          <x-cell
            v-if="!navItem.disabled"
            :key="_index"
            :to="'/' + $vantLang + navItem.path"
            :title="navItem.title"
            is-link
          />
        </template>
      </x-cell-group>
    </template>
  </div>
</template>

<script>
import docConfig from '../doc.config';
import MobileNav from './MobileNav';
import { setLang } from '../utils/lang';

export default {
  components: {
    MobileNav
  },

  data() {
    return {
      docConfig
    };
  },

  computed: {
    navList() {
      return (this.docConfig[this.$vantLang].nav || []).filter(item => item.showInMobile);
    },

    description() {
      return this.$vantLang === 'zh-CN' ? '探索无穷的可能' : 'Exploring Endless Possibilities';
    }
  },
  created() {
    console.log(this.navList);
  },

  methods: {
    switchLang(lang) {
      const from = lang === 'zh-CN' ? 'en-US' : 'zh-CN';
      this.$router.push(this.$route.path.replace(from, lang));
      setLang(lang);
    }
  }
};
</script>

<style lang="less">
@import '../../../src/styles/var';

.side-nav {
  box-sizing: border-box;
  width: 100%;
  padding: 20px;

  .x-title,
  .x-desc {
    padding-left: @padding-md;
    font-weight: normal;
    user-select: none;
  }

  .x-title {
    margin: 0 0 @padding-md;

    img,
    span {
      display: inline-block;
      vertical-align: middle;
    }

    img {
      width: 36px;
    }

    span {
      margin-left: @padding-md;
      font-weight: 500;
      font-size: 36px;
    }
  }

  .x-desc {
    margin: 0 0 20px;
    color: #7d7e80;
    font-size: 14px;
  }
}

.mobile-switch-lang {
  position: absolute;
  top: 24px;
  right: 24px;
  overflow: hidden;
  color: @blue;
  font-size: 12px;
  cursor: pointer;

  span {
    display: inline-block;
    width: 48px;
    color: @gray-dark;
    line-height: 22px;
    text-align: center;
    background-color: #f7f8fa;
    border: 1px solid #dcdee0;

    &:first-child {
      border-right: none;
      border-radius: 3px 0 0 3px;
    }

    &:last-child {
      border-left: none;
      border-radius: 0 3px 3px 0;
    }

    &.active {
      color: @white;
      background-color: @blue;
      border-color: @blue;
    }
  }
}
</style>
