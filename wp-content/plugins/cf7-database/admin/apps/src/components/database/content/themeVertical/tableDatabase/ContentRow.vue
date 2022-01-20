<template>
  <div>
    <a-modal
	  width="900px"
	  class="cf7d-table-content-row"
      title="Content Information"
      :visible="visible"
      @cancel="handleCancel"
	  :footer="null"
	  :bodyStyle="{paddingTop: '10px', maxHeight: '780px', overflowY: 'auto'}"
    >
		<a-list item-layout="horizontal" :data-source="contentRow">
			<a-list-item slot="renderItem" slot-scope="item, index">
			<a-list-item-meta
				:description="item.content"
			>
				<div slot="title" v-if="item.title != ''">{{ item.title }}:</div>
				<div slot="title" v-else>{{ item.title }} </div>
			</a-list-item-meta>
			</a-list-item>
		</a-list>	
    </a-modal>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      visible: true
    };
  },
  computed: {
    ...mapState("database", ["contentRow"]),
  },
  methods: {
    handleCancel(e) {
		this.$store.commit("database/HANDLING_CHANGE", { name: 'showConTable', value: false });
      	this.visible = false;
	},
  },
};
</script>

<style scoped>
.cf7d-table-content-row .ant-list-split .ant-list-item {
	border-bottom: 1px solid #f0f0f0;
	padding-top: 0;
}
</style>
