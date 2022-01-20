<template>
  <a-locale-provider :locale="locale">
    <router-view />
  </a-locale-provider>
</template>

<script>
import Vue from "vue";
import componentsAntDesign from "#/common/ComponentsAntDesign.js";
import enUS from 'ant-design-vue/lib/locale/en_US'
componentsAntDesign();

export default Vue.extend({
  name: "App",
  data() {
    return {
      locale: enUS
    }
  }
});

</script>

<style lang="less">
@import "../node_modules/ant-design-vue/lib/style/mixins/index.less";
@import "../node_modules/ant-design-vue/lib/style/core/iconfont.less";
@import "../node_modules/ant-design-vue/lib/style/core/motion.less";
@import "../node_modules/ant-design-vue/lib/button/style/index.less";
@import "../node_modules/ant-design-vue/lib/spin/style/index.less";
@import "../node_modules/ant-design-vue/lib/icon/style/index.less";
@import "../node_modules/ant-design-vue/lib/table/style/index.less";
@import "../node_modules/ant-design-vue/lib/message/style/index.less";
@import "../node_modules/ant-design-vue/lib/menu/style/index.less";
@import "../node_modules/ant-design-vue/lib/popover/style/index.less";
@import "../node_modules/ant-design-vue/lib/tabs/style/index.less";
@import "../node_modules/ant-design-vue/lib/checkbox/style/index.less";
@import "../node_modules/ant-design-vue/lib/pagination/style/index.less";
@import "../node_modules/ant-design-vue/lib/form/style/index.less";
@import "../node_modules/ant-design-vue/lib/input/style/index.less";
@import "../node_modules/ant-design-vue/lib/input-number/style/index.less";
@import "../node_modules/ant-design-vue/lib/layout/style/index.less";
@import "../node_modules/ant-design-vue/lib/date-picker/style/index.less";
@import "../node_modules/ant-design-vue/lib/select/style/index.less";
@import "../node_modules/ant-design-vue/lib/modal/style/index.less";
@import "../node_modules/ant-design-vue/lib/switch/style/index.less";
@import "../node_modules/ant-design-vue/lib/radio/style/index.less";
@import "../node_modules/ant-design-vue/lib/tooltip/style/index.less";
@import "../node_modules/ant-design-vue/lib/list/style/index.less";
@import "../node_modules/ant-design-vue/lib/tag/style/index.less";
@import "../node_modules/ant-design-vue/lib/grid/style/index.less";
@import "../node_modules/ant-design-vue/lib/dropdown/style/index.less";
@import "../src/common/scss/ant-customize.less";
</style>