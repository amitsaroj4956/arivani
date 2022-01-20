 
<template>
  <div class="cf7d-type-some-thing-wrap">
    <a-input-search v-model="valueSearch" :allowClear="true" @search="seTypeSomething" placeholder="Type Something..." enter-button />
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState("database", ["eventClickSave", "cfd_data", "eventFilterDate", "eventChooseForm"]),
  },
  data() {
    return {
      valueSearch: ''
    };
  },
  methods: {
    seTypeSomething(value) {
      if(value) {
        const page_default = 1;
        this.$store.dispatch("database/seTypeSomething", {
          typeSomething: value,
          fid: this.cfd_data.id_form_current, 
          page: page_default, 
          per_page: this.cfd_data.per_page ,
          thisVue: this
        });
        this.$store.commit("database/HANDLING_CHANGE", { name: 'typeSomething', value: value });
        this.$store.commit("database/HANDLING_CHANGE", { name: 'eventTypeSomething', value: true });
      }else {
        this.$store.commit("database/HANDLING_CHANGE", { name: 'typeSomething', value:  ''});
        this.$store.commit("database/HANDLING_CHANGE", { name: 'eventTypeSomething', value: true });
        // when remove value search get total data table
        this.$store.dispatch("database/getDataTable", { 
          'fid': this.cfd_data.id_form_current, 
          page: this.cfd_data.page, 
          per_page: this.cfd_data.per_page,
          thisVue: this
        });
      }
    }
  },
  watch: {
    eventClickSave(value) {
      if(value) {
        // remove value search
        this.valueSearch = '';
        this.$store.commit("database/HANDLING_CHANGE", { name: 'typeSomething', value:  ''});
      } 
    },
    eventFilterDate(value) {
      if(value) {
        // remove value search
        this.valueSearch = '';
        this.$store.commit("database/HANDLING_CHANGE", { name: 'typeSomething', value:  ''});
      }
    },
    eventChooseForm(value) {
      if(value) {
        // remove value search
        this.valueSearch = '';
        this.$store.commit("database/HANDLING_CHANGE", { name: 'typeSomething', value:  ''});
      }
    },
  }
};
</script>

<style>
.cf7d-type-some-thing-wrap {
  display: inline-block;
  line-height: 35px;
  width: 285px;
}
.cf7d-type-some-thing-wrap input {
  border: solid 1px #ccd0d4;
  background-color: #ffffff;
  height: 34px;
  min-height: 34px;
}
.cf7d-type-some-thing-wrap input:hover, 
.cf7d-type-some-thing-wrap input:focus {
  border-color: #007CBA !important;
}
.cf7d-type-some-thing-wrap span.ant-input-group-addon {
  background-color: #ccd0d4;
}
.cf7d-type-some-thing-wrap button {
  background-color: #ccd0d4;
  border: none;
  height: 34px;
}
</style>