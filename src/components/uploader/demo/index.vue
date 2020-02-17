<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <x-uploader
        :before-read="beforeRead"
        :after-read="afterRead"
        upload-text="上传"
        v-model="fileList"
      />
    </demo-block>

    <!-- <demo-block :title="$t('preview')">
      <x-uploader
        v-model="fileList2"
        multiple
        accept="*"
      />
    </demo-block> -->

    <demo-block :title="$t('maxCount')">
      <x-uploader
        v-model="fileList2"
        multiple
        :max-count="2"
        accept="*"
      />
    </demo-block>

    <demo-block :title="$t('uploadStyle')">
      <x-uploader v-model="fileList3">
        <x-button
          type="primary"
          size="small"
          icon="photo"
        >
          {{ this.$t('upload') }}
        </x-button>
      </x-uploader>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      upload: '上传',
      preview: '文件预览',
      maxCount: '限制上传数量',
      beforeRead: '上传前校验',
      uploadStyle: '自定义上传样式',
      invalidType: '请上传 jpg 格式图片'
    },
    'en-US': {
      upload: 'Upload File',
      preview: 'Preview File',
      maxCount: 'Max Count',
      beforeRead: 'Before Read',
      uploadStyle: 'Upload Style',
      invalidType: 'Please upload an image in jpg format'
    }
  },

  data() {
    return {
      fileList: [{ url: 'https://ae01.alicdn.com/kf/H6e5e22c9a0214cf692a69097c342e981T.png' }],
      fileList2: [],
      fileList3: []
    };
  },

  methods: {
    beforeRead(file) {
      if (file.type !== 'image/jpeg') {
        this.$toast(this.$t('invalidType'));
        return false;
      }

      return true;
    },

    afterRead(file) {
      console.log(file);
    }
  }
};
</script>

<style lang="less">
@import "../../../styles/var";

.demo-uploader {
  background-color: @white;

  .x-uploader {
    margin-left: @padding-md;
  }
}
</style>
