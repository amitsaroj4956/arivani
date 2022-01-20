<template>
  <a-layout>
    <a-layout-header class="cf7d-header">
      <div class="cf7d-group-set">
        <div class="cf7d-title-wrap">
          <p class="cf7d-title">Contact Form 7 Database</p>
          <ChooseForm></ChooseForm>
          <ExportToCSV class="cf7d-group-action-export"></ExportToCSV>
          <a-button type="primary" class="cf7db-btn-primary">
            <a href="https://1.envato.market/Contact-Form-7-Database-Pro" target="_blank">Go Pro</a>
          </a-button>
        </div>
        <div class="cf7d-item">
          <TypeSomething></TypeSomething>
          <FilterDate></FilterDate>
          <btThemeVertical></btThemeVertical>
          <BtThemeHorizontal></BtThemeHorizontal>
        </div>
      </div>

    </a-layout-header>

    <a-layout-content class="cf7d-content">
      <div v-if="loadTable">
        <TableDatabaseVer></TableDatabaseVer>
      </div>
    </a-layout-content>

  </a-layout>
</template>

<script>
import { mapState } from 'vuex';

// Header
import ChooseForm from "#/components/database/header/ChooseForm";
import EditSetting from "#/components/database/header/EditSetting";
import ExportToCSV from "#/components/database/header/ExportToCSV";
import TypeSomething from "#/components/database/header/TypeSomething";
import FilterDate from "#/components/database/header/FilterDate";
import BtThemeVertical from "#/components/database/header/BtThemeVertical";
import BtThemeHorizontal from "#/components/database/header/BtThemeHorizontal";
import SettingTable from "#/components/database/header/SettingTable";

// Content
import TableDatabaseVer from "#/components/database/content/themeVertical/TableDatabase";

export default {
  components: {
    // header
    ChooseForm,
    EditSetting,
    ExportToCSV,
    TypeSomething,
    FilterDate,
    BtThemeVertical,
    BtThemeHorizontal,
    SettingTable,

    // Content
    TableDatabaseVer
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState("database", ["loadTable", "themeTable"]),
  },
  methods: {
    reponseMobile() {
      var x = document.getElementById("cf7d-group-action");
      if (x.className === "cf7d-group-action") {
        x.className += " responsive";
      } else {
        x.className = "cf7d-group-action";
      }
    }
  },
};
</script>

<style scoped>
.cf7db-btn-primary{
  height: 34px;
  width: 110px;
  box-shadow: 0px 2px 10px 0px rgb(68 187 244 / 50%);
}
.cf7db-btn-primary:hover{
  background-color: #0480bc;
}
.cf7db-btn-primary a{
  text-decoration: none;
  font-weight: 600;
}
.cf7db-btn-primary a:focus{
  box-shadow: none;
}
.ant-layout-header {
  background: #F1F1F1;
  padding: 0px;
  height: auto;
}
.cf7d-title {
  margin-right: 17px;
  display: inline-block;
  margin-top: 25px;
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: 400;
  padding: 0px;
  line-height: normal;
  color: rgba(0, 0, 0, 0.85);
}
.cf7d-group-set > div {
  display: inline-block;
}
.cf7d-group-set .cf7d-item {
  float: right;
}
.cf7d-group-action {
  display: inline-block;
}
.cf7d-group-action .icon {
  display: none;
  color: #000000d9;
}
.cf7d-group-action .icon:focus {
  box-shadow: none;
}
@media only screen and (max-width: 768px) {
  .cf7d-group-action .icon {
    display: block;
  }
  .cf7d-group-action {
    display: block;
  }
  /* .cf7d-group-action.responsive {position: relative;} */
  .cf7d-group-action .icon {
    position: absolute;
    right: 8px;
    top: 10px;
    text-decoration: none;
  }
  /* .cf7d-group-action.responsive a {
    float: none;
    display: block;
    text-align: left;
  } */
  .cf7d-group-action .cf7d-group-action-edit,
  .cf7d-group-action .cf7d-group-action-setting,
  .cf7d-group-action .cf7d-group-action-export {
    display: none !important;
  }
  .cf7d-group-action.responsive .cf7d-group-action-edit {
    
    display: block !important;
    position: absolute;
    right: 10px;
    top: 65px;
  }
  .cf7d-group-action.responsive .cf7d-group-action-setting {
    display: block !important;
    position: absolute;
    right: 0px;
    top: 90px;
  }
  .cf7d-group-action.responsive .cf7d-group-action-export {
    display: block !important;
    position: absolute;
    right: 10px;
    top: 129px;
    width: auto;
  }
}
</style>