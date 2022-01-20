<template>
	<div class="cf7d-table-layout-wrap">
		<span class="cf7d-table-layout-title">Table Layout</span>
		<a-radio-group class="cf7d-radio-button" :value="tablenav.tableLayout" @change="onChange">
			<a-radio-button value="unset">
				Unset
			</a-radio-button>
			<a-radio-button value="fixed">
				Fixed
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
			this.$store.commit('database/CHANGE_SETTING_TALBE', { name: 'tableLayout', value: event.target.value });
		}
  },
};
</script>

<style scoped>
.cf7d-table-layout-wrap {
	padding-bottom: 20px;
	padding-top: 20px;
}
.cf7d-table-layout-wrap .cf7d-radio-button {
	float: right;
}
.cf7d-table-layout-wrap .cf7d-table-layout-title {
	font-size: 14px;
  font-weight: normal;
  font-style: italic;
  color: #1a2a37;
  cursor: text;
}
</style>