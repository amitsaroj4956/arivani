<template>
	<div v-if="tablenav.title" class="cf7d-table-title">
		{{ getTitle() }}
	</div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
	  ...mapState('database', ["cfd_data", "tablenav"])
  },
  methods: {
		getTitle() {
      const id = this.cfd_data.id_form_current;
      if(Array.isArray(this.cfd_data.list_formArr) && this.cfd_data.list_formArr.length > 0 && id) {
        let titleObj = (this.cfd_data.list_formArr).find(function(e) {
          return e.id_form == id;
        })
        let title = titleObj.title_form;
        return title;
      }
    },
  },
  mounted() {
    
  }
};
</script>

<style scoped>
.cf7d-table-title {
  height: 44px;
  background: #F1F1F1;
  font-size: 17px;
  text-transform: uppercase;
  font-weight: 600;
  color: #2E3237;
  padding-top: 12px;
  padding-bottom: 12px;
}
</style>