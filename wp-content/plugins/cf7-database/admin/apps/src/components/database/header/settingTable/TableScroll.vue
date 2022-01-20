<template>
	<div class="cf7d-table-scroll-wrap">
		<span class="cf7d-label">Table Scroll</span>
		<a-radio-group class="cf7d-radio-button" :value="tablenav.tableScroll" @change="onChange">
			<!-- <a-radio-button value="unset">
				Unset
			</a-radio-button> -->
			<a-radio-button value="scroll">
				Scroll
			</a-radio-button>
			<a-radio-button value="fixedColumn">
				Fixed Columns
			</a-radio-button>
		</a-radio-group>
	</div>
</template>
<script>
import { mapState } from 'vuex';

export default {
	computed: {
	  ...mapState('database', ["tablenav"])
  },
  methods: {
    onChange(event) {
			this.$store.commit('database/CHANGE_SETTING_TALBE', { name: 'tableScroll', value: event.target.value });
		}
  },
};
</script>

<style scoped>
.cf7d-table-scroll-wrap {
	padding-bottom: 20px;
	padding-top: 20px;
}
.cf7d-table-scroll-wrap .cf7d-radio-button {
	float: right;
}
.cf7d-table-scroll-wrap .cf7d-label {
	font-size: 14px;
  font-weight: normal;
  font-style: italic;
  color: #1a2a37;
  cursor: text;
}
@media only screen and (max-width: 767px){
	.cf7d-table-scroll-wrap {
		overflow: hidden;
    	width: 100%;
	}
	.cf7d-table-scroll-wrap .cf7d-label {
		display: block;
		margin-bottom: 10px;
	}
	.cf7d-table-scroll-wrap .cf7d-radio-button {
		float: none;
	}
	.cf7d-table-scroll-wrap .ant-radio-button-wrapper {
		float: none;
		padding-top: 0px;
		padding-bottom: 10px;
		width: 70%;
		text-align: center;
	}
}
</style>