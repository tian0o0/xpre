<template>
  <demo-section>
    <demo-block :title="$t('title1')">
      <x-button
        type="primary"
        @click="$toast($t('text'))"
      >
        {{ $t('title1') }}
      </x-button>
      <!-- <x-button
        type="primary"
        @click="$toast($t('longText'))"
      >
        {{ $t('longTextButton') }}
      </x-button> -->
    </demo-block>

    <demo-block :title="$t('title2')">
      <x-button
        type="primary"
        @click="showLoadingToast"
      >
        {{ $t('title2') }}
      </x-button>
    </demo-block>

    <demo-block :title="$t('title3')">
      <x-button
        type="info"
        @click="showSuccessToast"
      >
        {{ $t('success') }}
      </x-button>
      <x-button
        type="danger"
        @click="showFailToast"
      >
        {{ $t('fail') }}
      </x-button>
    </demo-block>

    <demo-block
      v-if="!$attrs.weapp"
      :title="$t('customIcon')"
    >
      <x-button
        type="primary"
        @click="showIconToast"
      >
        {{ $t('customIcon') }}
      </x-button>

      <x-button
        type="primary"
        @click="showImageToast"
      >
        {{ $t('customImage') }}
      </x-button>
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <x-button
        type="primary"
        @click="showCustomizedToast"
      >
        {{ $t('advancedUsage') }}
      </x-button>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title1: '文字提示',
      title2: '加载提示',
      title3: '成功/失败提示',
      success: '成功提示',
      fail: '失败提示',
      text: '提示内容',
      longText: '这是一条长文字提示，超过一定字数就会换行',
      text2: '成功文案',
      text3: '失败文案',
      customIcon: '自定义图标',
      customImage: '展示图片',
      text4: second => `倒计时 ${second} 秒`,
      longTextButton: '长文字提示'
    },
    'en-US': {
      title1: 'Text',
      title2: 'Loading',
      title3: 'Success/Fail',
      success: 'Success',
      fail: 'Fail',
      text: 'Some messages',
      longText: 'This is a long message, text will wrap when over a certain length',
      text2: 'Success',
      text3: 'Fail',
      customIcon: 'Custom Icon',
      customImage: 'Custom Image',
      text4: second => `${second} seconds`,
      longTextButton: 'Long Text'
    }
  },

  methods: {
    showLoadingToast() {
      this.$toast.loading({ overlay: true, message: this.$t('loading') });
    },

    showSuccessToast() {
      this.$toast.success(this.$t('text2'));
    },

    showFailToast() {
      this.$toast.fail(this.$t('text3'));
    },

    showIconToast() {
      this.$toast({
        message: this.$t('customIcon'),
        icon: 'like-o'
      });
    },

    showImageToast() {
      this.$toast({
        message: this.$t('customImage'),
        icon: 'https://ae01.alicdn.com/kf/Hfa3f8503c37e4da7862d831690178610h.png'
      });
    },

    showCustomizedToast() {
      const toast = this.$toast.loading({
        duration: 0,
        forbidClick: true,
        loadingType: 'spinner',
        message: this.$t('text4', 3)
      });

      let second = 3;
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = this.$t('text4', second);
        } else {
          clearInterval(timer);
          this.$toast.clear();
        }
      }, 1000);
    }
  }
};
</script>

<style lang="less">
@import "../../../styles/var";

.demo-toast {
  background-color: @white;

  .x-button {
    margin-bottom: @padding-md;
  }
}
</style>
