<template>
	<div class="cf7d-pagination-footer">
		<div class="cf7d-scroll-footer">
			<div class="cf7d-pag-footer-text">{{ 'Show ' + cfd_data.per_page + ' items of ' + cfd_data.total_row }}</div>
			<a-pagination
				class="cf7d-pagination-footer-wrap"
				show-size-changer
				:total="(Number(cfd_data.total_row))? Number(cfd_data.total_row) : 0"
				:show-total="showFooter"
				:page-size="Number(cfd_data.per_page)"
				:current="Number(cfd_data.page)"
				:page-size-options="['15', '30', '45', '55']"
				@change="changePagination"
				@showSizeChange="pageSizeChange"
			/>
		</div>
	</div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
	  ...mapState('database', ["cfd_data", "tablenav", "dateArr", "typeSomething"])
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
			const textFooter = document.getElementsByClassName('cf7d-pag-footer-text')[0];
			if(this.tablenav.paginationBottom == 'bottomLeft' && typeof textFooter !== 'undefined') {
				textFooter.style.display = "none";

				return 'Show ' + this.cfd_data.per_page + ' items of ' + this.cfd_data.total_row;
			}else if(typeof textFooter !== 'undefined') {
				textFooter.style.display = "";
				return false;
			}
		}
	},
	mounted() {
		const nameClass = 'cf7d-pagination-footer';
		const positionPag = this.tablenav.paginationBottom;
		const pagination_bottom = document.getElementsByClassName(nameClass)[0];
		if(typeof pagination_bottom !== 'undefined' && positionPag) {
			pagination_bottom.classList.remove("cf7d-pagination-left");
			pagination_bottom.classList.remove("cf7d-pagination-center");
			pagination_bottom.classList.remove("cf7d-pagination-right");
			pagination_bottom.classList.remove("cf7d-pagination-none");

			// pagination bottom when load page
			if(positionPag == 'bottomLeft') {
				pagination_bottom.classList.add("cf7d-pagination-left");
			}else if(positionPag == 'bottomCenter') {
				pagination_bottom.classList.add("cf7d-pagination-center");
			}else if(positionPag == 'bottomRight') {
				pagination_bottom.classList.add("cf7d-pagination-right");
			}else if(positionPag == 'none') {
				pagination_bottom.classList.add("cf7d-pagination-none");
			}else {
				return;
			}
			
		}
	}
};
</script>

<style scoped>
.cf7d-pagination-footer-wrap {
	height: 55px;
	line-height: 55px;
}
.cf7d-pag-footer-text {
	height: 55px;
	float: left;
	line-height: 55px;
	font-size: 13px;
	font-style: italic;
	color: #74788d;
	margin-left: 23px;
}
.cf7d-scroll-footer {
	overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
}
</style>