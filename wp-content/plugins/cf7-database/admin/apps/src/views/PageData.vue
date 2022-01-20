<template>
  <a-spin class="cf7d-spin-page" :spinning="!loadTable" tip="Loading...">
    <a-layout id="cf7d-apps">
      <Database></Database>
    </a-layout>
  </a-spin>
</template>

<script>
import Database from "#/components/database/Database";
import { mapState } from 'vuex';
export default {
  components: {
    Database
  },
  computed: {
    ...mapState("database", ["loadTable"])
  },
  created() {
    const njt_cfd_data = window.njt_cfd_data;
    // console.log(njt_cfd_data);
    this.$store.dispatch('database/upDataCtd', {data:njt_cfd_data,thisVue:this});
  },
  
};
</script>

<style src="#/common/css/apps.css"></style>

<style>
.nta-web-spin-preview-email .ant-spin-container {
  height: 100%;
}

.nta-web-spin-preview-email .ant-spin {
  max-height: 100vh !important;
  height: 100% !important;
}
</style>