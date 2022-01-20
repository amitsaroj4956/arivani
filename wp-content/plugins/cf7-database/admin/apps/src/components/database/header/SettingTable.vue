<template>
  <div class="cf7d-setting-table-wrap">
    <a-button class="cf7d-setting-bt" @click="showModal">
        <a-icon style="color: #1a2a37" type="setting" />Table Settings
    </a-button>
    <a-modal
			width="30%"
      wrapClassName="cf7d-table-setting"
      title="Table Settings"
      :visible="visible"
      @cancel="handleCancel"
			:footer="null"
			:bodyStyle="{paddingTop: '10px', maxHeight: '780px', overflowY: 'auto'}"
    > 
      <div class="cf7d-switch-wrap">
         <div class="cf7d-switch" v-for="(switchBt, key) in switchBtArr" :key="key">
          <SwitchBt :name="switchBt.name" :checkBt="Number(tablenav[switchBt['name']])">
            <span class="cf7d-switch-label" slot="nameLabel">{{ switchBt.text }}</span>
          </SwitchBt>
        </div>
      </div>

      <div class="cf7d-group">
        <!-- <TableLayout></TableLayout> -->
        <Size></Size>
        <TableScroll></TableScroll>
        <PaginationTop></PaginationTop>
        <PaginationBottom></PaginationBottom>
      </div>
      
			<div class="cf7d-bt-save-wrap">
				<a-button @click="saveChange" class="cf7d-bt-save" type="primary">
      		Save changes
    		</a-button>
			</div>
			
    </a-modal>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import SwitchBt from "#/components/database/header/settingTable/SwitchBt";
import Size from "#/components/database/header/settingTable/Size";
import TableScroll from "#/components/database/header/settingTable/TableScroll";
import TableLayout from "#/components/database/header/settingTable/TableLayout";
import PaginationTop from "#/components/database/header/settingTable/PaginationTop";
import PaginationBottom from "#/components/database/header/settingTable/PaginationBottom";
const key = 'updatable';
export default {
  components: {
    SwitchBt,
    Size,
    TableScroll,
    TableLayout,
    PaginationTop,
    PaginationBottom,
  },
  data() {
    return {
      visible: false,
      switchBtArr: [
        { name: 'bordered', text: 'Bordered'},
        // { name: 'loading', text: 'Loading'},
        { name: 'title', text: 'Title'},
        { name: 'colHeader', text: 'Column Header'},
        { name: 'expandedRowRender', text: 'Expandable'},
        { name: 'fixedHeader', text: 'Fixed Header'},
        // { name: 'hasData', text: 'Has Data'},
        { name: 'ellipsis', text: 'Ellipsis'},
        { name: 'footer', text: 'Footer'},
        { name: 'checkbox', text: 'Checkbox'}
      ],
    };
  },
  computed: {
    ...mapState("database", ["tablenav"]),
  },
  methods: {
    showModal() {
      this.visible = true;
      this.$store.commit("database/UP_LIST_FIELD_SETTING");
    },
    saveChange() {
      this.$message.loading({ content: 'Loading...', key });
      this.$store.commit("database/HANDLING_CHANGE", { name: 'showConTable', value: false });
      this.$store.dispatch('database/saveSettingTable', this);
			this.visible = false;
    },
    handleCancel(e) {
			this.$store.commit("database/HANDLING_CHANGE", { name: 'showConTable', value: false });
      this.visible = false;
		},
  },
};
</script>

<style>
.cf7d-setting-table-wrap {
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
}
.cf7d-table-setting .cf7d-bt-save-wrap {
	width: 100%;
	overflow: auto;
	padding-top: 20px;
}
.cf7d-setting-bt {
  height: 32px !important;
}
.cf7d-table-setting .cf7d-bt-save {
	float: right;
	height: 34px;
	/* background: #0f729f; */
	border: none;
}
.cf7d-table-setting .cf7d-switch-wrap{
  overflow: hidden;
}
.cf7d-table-setting .cf7d-switch {
  margin-top: 20px;
  margin-bottom: 20px;
}

</style> 
