<template>
	<div class="cf7d-pagination-top-wrap">
		<span class="cf7d-title">Pagination Top</span>
		<a-select
			:value="tablenav.paginationTop"
			style="width: 135px;float:right;"
			@change="onChange"
		>
			<a-select-option value="none">
				None
			</a-select-option>
			<a-select-option value="topLeft">
				Top Left
			</a-select-option>
			<a-select-option value="topCenter">
				Top Center
			</a-select-option>
			<a-select-option value="topRight">
				Top Right
			</a-select-option>
		</a-select>
	</div>
  
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
	  ...mapState('database', ["tablenav"])
  },
  methods: {
		onChange(value) {
			this.$store.commit('database/CHANGE_SETTING_TALBE', { name: 'paginationTop', value: value });
			
			const pagination_top = document.getElementsByClassName("cf7d-pagination-header")[0];
			const setting_top = document.getElementsByClassName("cf7d-pag-header-content")[0];
			if(pagination_top) {
				pagination_top.classList.remove("cf7d-pagination-left");
				pagination_top.classList.remove("cf7d-pagination-center");
				pagination_top.classList.remove("cf7d-pagination-right");
				pagination_top.classList.remove("cf7d-pagination-none");
				setting_top.classList.remove("cf7d-pagination-settings-right");

				if(value == 'topLeft') {
					pagination_top.classList.add("cf7d-pagination-left");
				}else if(value == 'topCenter') {
					pagination_top.classList.add("cf7d-pagination-center");
				}else if(value == 'topRight') {
					pagination_top.classList.add("cf7d-pagination-right");
					setting_top.classList.add("cf7d-pagination-settings-right");
				}else if(value == 'none') {
					pagination_top.classList.add("cf7d-pagination-none");
				}else {
					return;
				}
			}
		}
	},
};
</script>

<style scoped>
.cf7d-pagination-top-wrap {
	padding-bottom: 20px;
	padding-top: 20px;
}
.cf7d-pagination-top-wrap .cf7d-radio-button {
	float: right;
}
.cf7d-pagination-top-wrap .cf7d-title {
	font-size: 14px;
  font-weight: normal;
  font-style: italic;
  color: #1a2a37;
  cursor: text;
}
/* @media only screen and (max-width: 767px) and (min-width: 569px) {
	.cf7d-pagination-top-wrap .cf7d-radio-button {
		float: none;
		margin-top: 14px;
		padding-top: 10px;
	}
} */

@media only screen and (max-width: 767px) {
	.cf7d-pagination-top-wrap .cf7d-title {
		padding-bottom: 10px;
		display: block;
	}
	.cf7d-pagination-top-wrap .ant-radio-button-wrapper {
		width: 48%;
    	text-align: center;
	}
	.cf7d-pagination-top-wrap .cf7d-radio-button {
		float: none;
		margin-top: 14px;
		padding-top: 10px;
	}
}
</style>