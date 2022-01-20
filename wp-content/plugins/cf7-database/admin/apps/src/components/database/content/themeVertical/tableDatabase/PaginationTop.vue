<template>
	<div class="cf7d-pagination-header">
		<div class="cf7d-pag-header-text">{{ 'Show ' + this.cfd_data.per_page + ' items of ' + this.cfd_data.total_row }}</div>
		<div class="cf7d-pag-header-content">
			<a-pagination
				class="cf7d-pagination-header-wrap"
				:class="{ 'cf7d-pagination-header-no-data': rowData.length == 0 }"
				show-size-changer
				:total="(Number(cfd_data.total_row))? Number(cfd_data.total_row) : 0"
				:show-total="showFooter"
				:page-size="Number(cfd_data.per_page)"
				:current="Number(cfd_data.page)"
				:page-size-options="['15', '30', '45', '55']"
				@change="changePagination"
				@showSizeChange="pageSizeChange"

			/>
			<div class="cf7d-pagination-header-setting-wrap">
				<EditSetting v-if="rowData.length > 0"></EditSetting>
				<SettingTable v-if="rowData.length > 0"></SettingTable>
			</div>
		</div>
	</div>
</template>
<script>
import { mapState } from 'vuex';
import EditSetting from "#/components/database/header/EditSetting";
import SettingTable from "#/components/database/header/SettingTable";

export default {
  components:{
	SettingTable,
    EditSetting
  },
  computed: {
	  ...mapState('database', ["cfd_data", "tablenav", "typeSomething", "dateArr","rowData"])
  },
  methods: {
		pageSizeChange(page, pageSize) {
			if(page && pageSize) {
				if(Array.isArray(this.dateArr) && this.dateArr.length == 2 &&
					this.dateArr[0] && this.dateArr[1]
				) {
					this.$store.dispatch("database/filterDate", {
						dateArr: this.dateArr,
						fid: this.cfd_data.id_form_current, 
						page: page, 
						per_page: pageSize,
						thisVue: this
					});
				}else if(this.typeSomething) {
					this.$store.dispatch("database/seTypeSomething", {
						typeSomething: this.typeSomething,
						fid: this.cfd_data.id_form_current, 
						page: page, 
						per_page: pageSize,
						thisVue: this
					});
				}else {
					this.$store.dispatch("database/getDataTable", {
						'fid': this.cfd_data.id_form_current, 
						'page': page, 
						'per_page': pageSize,
						'thisVue': this
          });
				}
      }
		},
		changePagination(page, pageSize) {
      if(page && pageSize) {
				if(Array.isArray(this.dateArr) && this.dateArr.length == 2 && 
					this.dateArr[0] && this.dateArr[1]
					) {
					this.$store.dispatch("database/filterDate", {
						dateArr: this.dateArr,
						fid: this.cfd_data.id_form_current, 
						page: page, 
						per_page: pageSize,
						thisVue: this
					});
				}else if(this.typeSomething) {
					this.$store.dispatch("database/seTypeSomething", {
						typeSomething: this.typeSomething,
						fid: this.cfd_data.id_form_current, 
						page: page, 
						per_page: pageSize,
						thisVue: this
					});
				}else {
					this.$store.dispatch("database/getDataTable", {
						'fid': this.cfd_data.id_form_current, 
						'page': page, 
						'per_page': pageSize,
						'thisVue': this
          });
				}
      }
		},
		showFooter() {
			const textFooter = document.getElementsByClassName('cf7d-pag-header-text')[0];
			if(this.tablenav.paginationTop == 'topLeft' && typeof textFooter !== 'undefined') {
				textFooter.style.display = "none";

				return 'Show ' + this.cfd_data.per_page + ' items of ' + this.cfd_data.total_row;
			}else if(typeof textFooter !== 'undefined') {
				textFooter.style.display = "";
				return false;
			}
		}
	},
	mounted() {
		const nameClass = 'cf7d-pagination-header';
		const settingnameClass = 'cf7d-pag-header-content';
		const positionPag = this.tablenav.paginationTop;
		const pagination_top = document.getElementsByClassName(nameClass)[0];
		const settings_top = document.getElementsByClassName(settingnameClass)[0];
		
		if(typeof pagination_top !== 'undefined' && positionPag) {
			pagination_top.classList.remove("cf7d-pagination-left");
			pagination_top.classList.remove("cf7d-pagination-center");
			pagination_top.classList.remove("cf7d-pagination-right");
			pagination_top.classList.remove("cf7d-pagination-none");
			settings_top.classList.remove("cf7d-pagination-settings-right");
			// pagination top when load page
			if(positionPag == 'topLeft') {
				pagination_top.classList.add("cf7d-pagination-left");
			}else if(positionPag == 'topCenter') {
				pagination_top.classList.add("cf7d-pagination-center");
			}else if(positionPag == 'topRight') {
				pagination_top.classList.add("cf7d-pagination-right");
				settings_top.classList.add("cf7d-pagination-settings-right");
			}else if(positionPag == 'none') {
				pagination_top.classList.add("cf7d-pagination-none");
			}else {
				return;
			}
		}
	}
};
</script>

<style scoped>
.cf7d-pag-header-text {
	height: 55px;
	float: left;
	line-height: 55px;
	font-style: italic;
	font-size: 13px;
	color: #74788d;
	padding-left: 23px;
}
.cf7d-pagination-header {
	height: 55px;
	background: #fff;
	padding-right: 10px;
	border-radius: 7px 7px 0px 0px;
	overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
}
.cf7d-pagination-header-wrap {
	display: inline-block;
	height: 55px;
	line-height: 55px;
	background: #fff;
	border-radius: 7px 7px 0px 0px;
}
.cf7d-pagination-header-setting-wrap {
	display: inline-block;
	float: right;
    line-height: 55px;
}
.cf7d-pagination-settings-right {
	display: flex;
	flex-direction: row-reverse;
}
</style>