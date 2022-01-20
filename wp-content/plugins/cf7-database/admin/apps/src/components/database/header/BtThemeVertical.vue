<template>
	<a-button @click="changeTheme" class="cf7d-theme-vertical-bt">
		<a-icon style="font-size: 16px;" type="unordered-list" />
    </a-button>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
		...mapState("database", ["cfd_data", "dateArr", "typeSomething"]) 
	},
    methods: {
        changeTheme() {
					this.$store.commit("database/HANDLING_CHANGE", { name: 'themeTable', value:  'ver'});
					
					if(Array.isArray(this.dateArr) && this.dateArr.length == 2 && 
					this.dateArr[0] && this.dateArr[1]
						) {
						this.$store.dispatch("database/filterDate", {
							dateArr: this.dateArr,
							fid: this.cfd_data.id_form_current, 
							page: this.cfd_data.page, 
							per_page: this.cfd_data.per_page,
							thisVue: this
						});
					}else if(this.typeSomething) {
						this.$store.dispatch("database/seTypeSomething", {
							typeSomething: this.typeSomething,
							fid: this.cfd_data.id_form_current, 
							page: this.cfd_data.page, 
							per_page: this.cfd_data.per_page,
							thisVue: this
						});
					}else {
						this.$store.dispatch("database/getDataTable", {
							'fid': this.cfd_data.id_form_current, 
							'page': this.cfd_data.page, 
							'per_page': this.cfd_data.per_page,
							'thisVue': this
						});
					}
      }
    }
}
</script>


<style scoped>
.cf7d-theme-vertical-bt {
    margin-left: 8px;
    margin-right: 3px;
	line-height: 34px;
	height: 34px;
	width: 34px;
	padding: 0;
}
.cf7d-theme-vertical-bt:active {
    color: #0f729f;
}

</style>