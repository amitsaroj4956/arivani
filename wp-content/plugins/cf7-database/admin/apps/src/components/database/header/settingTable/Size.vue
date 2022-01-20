<template>
	<div class="cf7d-size-wrap">
		<span class="cf7d-title">Size</span>
		<a-radio-group class="cf7d-radio-button" :value="tablenav.size" @change="onChange">
			<a-radio-button value="default">
				Default
			</a-radio-button>
			<a-radio-button value="middle">
				Middle
			</a-radio-button>
			<a-radio-button value="small">
				Small
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
		this.$store.commit('database/CHANGE_SETTING_TALBE', { name: 'size', value: event.target.value })
	},
  },
};
</script>

<style scoped>
.cf7d-size-wrap {
	padding-bottom: 20px;
	padding-top: 20px;
}
.cf7d-size-wrap .cf7d-radio-button {
	float: right;
}
.cf7d-size-wrap .cf7d-title {
	font-size: 14px;
  font-weight: normal;
  font-style: italic;
  color: #1a2a37;
  cursor: text;
}
</style>