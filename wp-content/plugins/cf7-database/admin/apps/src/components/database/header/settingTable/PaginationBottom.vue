<template>
	<div class="cf7d-pagination-bottom-wrap">
		<span class="cf7d-title">Pagination Bottom</span>
		<a-select
			:value="tablenav.paginationBottom"
			style="width: 135px;float:right;"
			@change="onChange"
		>
			<a-select-option value="none">
				None
			</a-select-option>
			<a-select-option value="bottomLeft">
				Bottom Left
			</a-select-option>
			<a-select-option value="bottomCenter">
				Bottom Center
			</a-select-option>
			<a-select-option value="bottomRight">
				Bottom Right
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
			this.$store.commit('database/CHANGE_SETTING_TALBE', { name: 'paginationBottom', value: value });
			
			const pagination_top = document.getElementsByClassName("cf7d-pagination-footer")[0];
			if(pagination_top) {
				pagination_top.classList.remove("cf7d-pagination-left");
				pagination_top.classList.remove("cf7d-pagination-center");
				pagination_top.classList.remove("cf7d-pagination-right");
				pagination_top.classList.remove("cf7d-pagination-none");

				if(value == 'bottomLeft') {
					pagination_top.classList.add("cf7d-pagination-left");
				}else if(value == 'bottomCenter') {
					pagination_top.classList.add("cf7d-pagination-center");
				}else if(value == 'bottomRight') {
					pagination_top.classList.add("cf7d-pagination-right");
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
.cf7d-pagination-bottom-wrap {
	padding-bottom: 20px;
	padding-top: 20px;
	overflow: hidden;
	width: 100%;
}
.cf7d-pagination-bottom-wrap .cf7d-radio-button {
	float: right;
}
.cf7d-pagination-bottom-wrap .cf7d-title {
	font-size: 14px;
  font-weight: normal;
  font-style: italic;
  color: #1a2a37;
  cursor: text;
}
@media only screen and (max-width: 767px){
	.cf7d-pagination-bottom-wrap {
		float: none;
		padding-top: 0px;
		padding-bottom: 10px;
	}
	.cf7d-pagination-bottom-wrap .cf7d-title {
		padding-top: 10px;
		padding-bottom: 10px;
		display: block;
	}
	.cf7d-pagination-bottom-wrap .ant-radio-button-wrapper {
		width: 48%;
    	text-align: center;
	}
	.cf7d-pagination-bottom-wrap .cf7d-radio-button {
		float: none;
	}	
}
</style>