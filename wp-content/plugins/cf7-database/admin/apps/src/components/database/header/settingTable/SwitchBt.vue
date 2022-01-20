 
<template>
  <div>
    <slot name="nameLabel"></slot>
    <a-switch class="cf7d-swich" :checked="(checkBt)? true : false" @change="changeSwitch" />
  </div>
</template>
<script>
export default {
  props: {
    checkBt: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    changeSwitch(checked) {
      if(checked) {
        this.$store.commit('database/CHANGE_SETTING_TALBE', { name: this.name, value: 1 });
      }else {
        this.$store.commit('database/CHANGE_SETTING_TALBE', { name: this.name, value: 0 });
      }
    },
  },
};
</script>

<style scoped>
.cf7d-table-setting  .cf7d-swich {
  float: right;
}
.cf7d-table-setting .cf7d-switch-label {
  font-size: 14px;
  font-weight: normal;
  font-style: italic;
  color: #1a2a37;
  cursor: text;
}
.cf7d-table-setting .ant-switch-checked {
  background: #007CBA;
}
</style>