<template>
  <div >
    <a-modal
			width="36%"
      class="cf7d-table-edit-row"
      title="Edit Information"
      :visible="visible"
      @cancel="handleCancel"
			:footer="null"
			:bodyStyle="{paddingBottom: '0px', maxHeight: '780px', overflowY: 'auto'}"
    >	
  		<a-form @submit="handleSubmit" ref="contentForm" :model="contentForm" :wrapper-col="{ span: 20 }">
				<a-form-item 
          :label-col="{ span: 7 }" :wrapper-col="{ span: 17}" 
          label-align="left" v-for="(el, key) in contentForm" 
          :key="key" 
          :label="el.title"
          v-if="el.dataIndex !== 'data_id'"
        > 
      		<a-input :auto-size="{ minRows: 1, maxRows: 8 }" v-model="el.content" type="textarea" />
				</a-form-item>
				<a-form-item :style="{ textAlign: 'right' }" :wrapper-col="{ span: 24 }">
					<a-button  type="primary" html-type="submit">
						Save Changes
					</a-button>
				</a-form-item>
			</a-form>
    </a-modal>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { Form } from 'ant-design-vue';
import Vue from 'vue';
Vue.use(Form);

export default {
  props: ["id_row_edit"],
  data() {
    return {
      visible: true,
      contentForm: null
    }
  },
  computed: {
    ...mapState("database", ["contentRow"]),
  },
  methods: {
    handleCancel(e) {
			this.$store.commit("database/HANDLING_CHANGE", { name: 'showEditRow', value: false });
      this.visible = false;
    },
    handleSubmit(e) {
      e.preventDefault();
      let id_row_edit = Number(this.id_row_edit);

      if(id_row_edit) {
        this.$store.dispatch("database/editRow", { id_row_edit: id_row_edit, thisVue : this });
      }
      this.$store.commit("database/HANDLING_CHANGE", { name: 'showEditRow', value: false });
    }
  },
  created() {
    this.contentForm = this.contentRow
  }
};
</script>

<style scoped>
</style>
