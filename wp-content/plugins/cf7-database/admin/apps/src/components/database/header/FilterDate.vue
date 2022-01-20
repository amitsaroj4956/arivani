<template>
  <div class="cf7d-filter-data-wrap">
      <a-icon class="cf7d-filter-icon" type="calendar" />
      <a-range-picker
        dropdownClassName="cf7d-range-picker"
        v-model="dateArr"
        style="width: 265px;" 
        :ranges="{
          Today: [moment(), moment()],
          'This Week': [
            moment().startOf('week'),
            moment().endOf('week')
          ],
          'This Month': [
            moment().startOf('month'),
            moment().endOf('month')
          ],
          'Last 30 days': [
            moment()
              .subtract(30, 'days')
              .startOf('day'),
            moment()
          ],
          'This Year': [moment().startOf('year'), moment().endOf('year')],
          
        }"
      />
      <a-tooltip placement="bottom">
        <template slot="title">
        Filter: This feature is available in Pro version.
        </template>
        <a-button class="cf7d-bullk-actions-bt" type="primary" disabled >Filter</a-button>
      </a-tooltip>
      
  </div>
</template>
<script>
import { mapState } from 'vuex';
import moment from "moment";
export default {
  data() {
    return {
      dateArr: null,
    }
  },
  computed: {
    ...mapState("database", ["cfd_data", "eventClickSave", "eventChooseForm","eventTypeSomething", "themeTable"]),
  },
  methods: {
    moment,
    // changeDate(date, dateStringArr) {
    //   if(Array.isArray(dateStringArr) && 
    //     dateStringArr.length == 2 && 
    //     dateStringArr[0] && 
    //     dateStringArr[1]
    //   ) {
    //     this.$store.commit("database/HANDLING_CHANGE", { name: 'dateArr', value:  dateStringArr});
    //   }else {
    //     this.$store.commit("database/HANDLING_CHANGE", { name: 'dateArr', value:  ''});
    //     // // when remove date get total data table
    //     // this.dateArr = [];
    //     // this.$store.dispatch("database/getDataTable", { 
    //     //   'fid': this.cfd_data.id_form_current, 
    //     //   page: this.cfd_data.page, 
    //     //   per_page: this.cfd_data.per_page,
    //     //   thisVue: this
    //     // });

    //     // this.$store.commit("database/HANDLING_CHANGE", { name: 'eventFilterDate', value: true });
    //   }
    // },
  },
  watch: {
    eventClickSave(value) {
      if(value) {
        // remove value search date
        this.dateArr = [];
        this.$store.commit("database/HANDLING_CHANGE", { name: 'dateArr', value:  ''});
      } 
    },
    eventTypeSomething(value) {
      if(value) {
        // remove value search date
        this.dateArr = [];
        this.$store.commit("database/HANDLING_CHANGE", { name: 'dateArr', value:  ''});
      } 
    },
    eventChooseForm(value) {
      if(value) {
        // remove value search date
        this.dateArr = [];
        this.$store.commit("database/HANDLING_CHANGE", { name: 'dateArr', value:  ''});
      }
    },
  }
};
</script>

<style>
.cf7d-filter-data-wrap {
  display: inline-block;
  margin-left: 10px;
  position: relative;
}
.cf7d-filter-data-wrap .cf7d-filter-icon {
  position: absolute;
  top: 23px;
  left: 8px;
  z-index: 10;
  font-size: 16px;
  color: #1a2a37;
}
.cf7d-filter-data-wrap .ant-calendar-range-picker-separator {
  padding-left: 5px;
}
.cf7d-filter-data-wrap .ant-calendar-picker-input{
  height: 35px;
}
.cf7d-filter-data-wrap .ant-calendar-picker-input input.ant-calendar-range-picker-input {
  background: #fff;
  padding-left: 10px;
  color: #32373c;
}
.cf7d-filter-data-wrap .cf7d-bullk-actions-bt {
	width: 65px;
	border-radius: 3px;
  margin-left: 3px;
  height: 34px;
  line-height: 34px;
}
</style>
