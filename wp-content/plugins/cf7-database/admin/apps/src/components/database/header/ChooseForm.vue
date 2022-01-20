<template>
	<div class="cf7d-choose-from-wrap">
		<a-select @change="changeForm" class="cf7d-choose-from" :value="getDefVal()">
			<a-select-option value="chooseForm">Choose Form</a-select-option>
			<a-select-option v-for="(list_form) in cfd_data.list_formArr" :key="list_form.id_form" :value="list_form.id_form">
				{{ list_form.title_form }}
			</a-select-option>
		</a-select>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
	...mapState('database', ["cfd_data"])
  },
  methods: {
	changeForm(value) {
		if(value && value !== 'chooseForm') {
			this.$store.dispatch("database/getDataTable", { 
				fid : value, 
				page: this.cfd_data.page, 
				per_page: this.cfd_data.per_page,
			    thisVue: this
			});
			
			this.$store.commit("database/HANDLING_CHANGE", { name: 'eventChooseForm', value: true });
			window.history.pushState({}, '', this.cfd_data.cf7d_page_url + value);
		}
	},
	getDefVal() {
		// console.log(this.cfd_data.list_formArr);
		if(Array.isArray(this.cfd_data.list_formArr) && this.cfd_data.list_formArr.length > 0) {
			var formId = this.cfd_data.list_formArr[0].id_form;
			this.cfd_data.list_formArr.forEach(element => {
				if(element.id_form == this.cfd_data.id_form_current) {
					formId = element.id_form;
				}
			});
			return formId;
		}else {
			return 'chooseForm';
		}
	}
  },
  created() {
	  if(Array.isArray(this.cfd_data.list_formArr) && this.cfd_data.list_formArr.length > 0) {
			window.history.pushState({}, '', this.cfd_data.cf7d_page_url + this.cfd_data.id_form_current);
		}
  },
  
};
</script>


<style>
.cf7d-choose-from {
	max-width: 300px;
}
.cf7d-choose-from .ant-select-selection {
  border-radius: 3px;
  border: solid 1px #c7c8c9;
  background-color: #ffffff;
  height: 34px;
  min-width: 175px;
  max-width: 300px;
}
.cf7d-choose-from-wrap {
	line-height: normal;
	margin: 0px;
	padding: 0px;
	display: inline-block;
}
</style>
