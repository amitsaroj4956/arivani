<template>
  <div class="cf7d-table-database-wrap" id="cf7d-table-database-wrap">
    <TitleTable></TitleTable>
    <PaginationTop></PaginationTop>
    <a-table
      :scroll="optionScroll"
      :components = "components"
      tableLayout = "fixed"
      class="cf7d-table-database"
      :bordered="('bordered' in tablenav === true && tablenav.bordered)? true : false"
      :row-selection="((tablenav.checkbox && rowData.length > 0 )? rowSelection : null)"
      :data-source="rowData"
      :columns="rowData.length > 0 ? listColumnArr : []"
      :showHeader="('colHeader' in tablenav === true && tablenav.colHeader)? true : false"
      :size="('size' in tablenav === true)? tablenav.size : 'default'"
      :loading="(checkChangeSize)? true : false"
      :pagination="{ pageSize: Number(cfd_data.per_page), hideOnSinglePage: true}"
    > 
      <!-- action -->
      <template slot="action" slot-scope="text, record, index">
        <div class="cf7d-action">
          <a class="cf7d-action-icon" @click="() => editContetRow(record)" href="javascript:;"><a-icon style="font-size: 16px; color: #74788d" type="edit" /></a>
          <a class="cf7d-action-icon" @click="() => showContentRow(record)" href="javascript:;"><a-icon style="font-size: 16px; color: #74788d"  type="eye" /></a>
          <a-popconfirm
            v-if="rowData.length"
            title="Sure to delete?"
            @confirm="() => removeRow(record.data_id)"
          >
            <a class="cf7d-action-icon" href="javascript:;"><a-icon style="font-size: 16px; color: #74788d" type="delete" /></a>
          </a-popconfirm>
        </div>
      </template>

      <template slot="subject" slot-scope="text, record, index">
        <span>
          <span v-html="text"></span>
        </span>
      </template>

      <!-- Expanded Row Render -->
      <template :slot="((tablenav.expandedRowRender == 1)? 'expandedRowRender' : '')" slot-scope="record">
        <p  style="margin: 0"><span v-html="record.description"></span></p>
      </template>
      
    </a-table>
    
    <!-- footer -->
    <div class="cf7d-table-footer" v-if="tablenav.footer">
      <PaginationBottom></PaginationBottom>
    </div>

    <!-- -->
    <ContentRow v-if="showConTable"></ContentRow>
    <EditRow :id_row_edit="id_row_edit" v-if="showEditRow"></EditRow>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Vue from 'vue';
import ResizableCol from "#/components/database/content/themeVertical/tableDatabase/ResizableCol";
import ContentRow from "#/components/database/content/themeVertical/tableDatabase/ContentRow";
import EditRow from "#/components/database/content/themeVertical/tableDatabase/EditRow";
import PaginationTop from "#/components/database/content/themeVertical/tableDatabase/PaginationTop";
import PaginationBottom from "#/components/database/content/themeVertical/tableDatabase/PaginationBottom";
import TitleTable from "#/components/database/content/themeVertical/tableDatabase/TitleTable";

import VueDraggableResizable from 'vue-draggable-resizable';
Vue.component('vue-draggable-resizable', VueDraggableResizable);

// commonFuntion
import { removeRow } from "#/common/commonFuntion/comFun.js";
import { showContentRow } from "#/common/commonFuntion/comFun.js";
import { editContetRow } from "#/common/commonFuntion/comFun.js";
import { ellipsis } from "#/common/commonFuntion/comFun.js";
import { fixedHeader } from "#/common/commonFuntion/comFun.js";
import { changeWidthEx } from "#/common/commonFuntion/comFun.js";
import { tableScroll } from "#/common/commonFuntion/comFun.js";
import { checkbox } from "#/common/commonFuntion/comFun.js";
import { size } from "#/common/commonFuntion/comFun.js";

export default {
  components: {
    ResizableCol,
    ContentRow,
    EditRow,
    PaginationTop,
    PaginationBottom,
    TitleTable,
  },
  data() {
    // Resizable column
    let thDom = null;
    this.components = {
      header: {
        cell: (createCom, props, children) => {
          const { key, ...restProps } = props;
          const col = this.listColumnArr.find(col => {
            const k = col.dataIndex || col.key;
            return k === key;
          });
         
          if (col && (col.key === 'cf7d_action')) {
            return createCom('th', {attrs: props.attrs}, children);
          }

          if((props.key === 'rc-table-expand-icon-cell')) {
            return createCom('th', {attrs: props.attrs}, children);
          }
          const draggingState = this.listColumnArr;
          const onDrag = x => {
            draggingState[key] = 0;
            col.width = Math.max(x, 1);
          }
          const antRef = r => {
            thDom = r
            return thDom
          }
          const onDragstop = () => {
            draggingState[key] = thDom.getBoundingClientRect().width;
            var cf7db_table = {};
            draggingState.forEach(element => {
              cf7db_table[element.key] = element.width;
            });
            this.setCookie('cf7db_table',JSON.stringify(cf7db_table),2021);
          };
          return createCom(ResizableCol, {attrs: props.attrs, props: { attrProps: props, antRef, col, onDrag, onDragstop, draggingState}}, children);
        },
      },
    };

    return {
      pageSize: 15,
      listColumnArr: null,
      optionScroll: null,
      height: null,
      checkChangeSize: false,
      id_row_edit: null,
      selectedRowKeys: [],
    }
  },
  computed: {
    ...mapState("database", ["columns", "rowData", "tablenav", 
                "cfd_data", "showConTable", "showEditRow", "totalRow",
                "loadTable", "selectedRows"
              ]),
    rowSelection() {
      const { selectedRowKeys } = this;
      return {
        selectedRowKeys,
        hideDefaultSelections: true,
        onChange: this.onSelectChange,
        selections: [
          {
            key: "delete-selected",
            text: "Delete Selected",
            onSelect: () => {
              this.$store.dispatch("database/removeRow", {idArr:this.selectedRows,thisVue:this} );
            }
          }
        ]
      };
    },
    ellipsis() {
      if('ellipsis' in this.tablenav === true) {
        return this.tablenav.ellipsis;
      }
    },
    tableScroll() {
      if('tableScroll' in this.tablenav === true) {
        return this.tablenav.tableScroll;
      }
    },
    fixedHeader() {
      if('fixedHeader' in this.tablenav === true) {
        return this.tablenav.fixedHeader;
      }
    },
    checkbox() {
      if('checkbox' in this.tablenav === true) {
        return this.tablenav.checkbox;
      }
    },
    size() {
      if('size' in this.tablenav === true) {
        return this.tablenav.size;
      }
    },
    expandedRowRender() {
      if('expandedRowRender' in this.tablenav) {
        return this.tablenav.expandedRowRender;
      }
    },
    colHeader() {
      if('colHeader' in this.tablenav) {
        return this.tablenav.colHeader;
      }
    },
  },
  methods: {
    setCookie(c_name, value, exdays) {
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + exdays);
      var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
      document.cookie = c_name + "=" + c_value;
    },
    removeRow(id) {
      const thisVue = this;
      removeRow.removeRow(thisVue, id);
    },
    showContentRow(value) {
      const thisVue = this;
      showContentRow.showContentRow(thisVue, value);
    },
    editContetRow(value) {
      const thisVue = this;
      editContetRow.editContetRow(thisVue, value);
    },
    onSelectChange(selectedRowKeys,selectedRows) {
      this.selectedRowKeys = selectedRowKeys;
      this.$store.commit("database/SELECTED_ROW", { name: 'selectedRows', value: selectedRows });
    },
  },
  watch: {
    ellipsis(value) {
      const thisVue = this;
      ellipsis.ellipsis(thisVue, this.listColumnArr, value);

      if(value) {
        this.$store.commit("database/CHANGE_SETTING_TALBE", {name: 'tableLayout', value: 'fixed'});
      }
      this.$store.commit("database/HANDLING_CHANGE", {name: 'columns', value: this.listColumnArr});
    },
    fixedHeader(value) {
      const thisVue = this;
      fixedHeader.fixedHeader(thisVue, value);
  		thisVue.$store.commit("database/HANDLING_CHANGE", {name: 'columns', value: thisVue.listColumnArr});
    },
    tableScroll(value) {
      if(value == 'unset' && 'tableScroll' in this.tablenav) {
        let elAction = this.listColumnArr.find(element => element.key == 'cf7d_action');
        elAction.fixed = false;
        this.optionScroll = { x: false, y: false};

        setTimeout(function(){ 
          let table_database = document.getElementById("cf7d-table-database-wrap");
          table_database.classList.remove("cf7d-table-fixed-col");
        }, 500);
      }else if(value == 'scroll' && 'tableScroll' in this.tablenav) {
        let elAction = this.listColumnArr.find(element => element.key == 'cf7d_action');
        elAction.fixed = false;
        this.optionScroll = { x: '100%', y: this.height}; 

        setTimeout(function(){ 
          let table_database = document.getElementById("cf7d-table-database-wrap");
          table_database.classList.remove("cf7d-table-fixed-col");
        }, 500);
      }else if(value === 'fixedColumn' && 'tableScroll' in this.tablenav) {
        let elAction = this.listColumnArr.find(element => element.key == 'cf7d_action');
        elAction.fixed = 'right';
        this.optionScroll = { x: '100%', y: this.height};

        // fix show 2 col action
        let table_theadArr = document.getElementsByClassName('ant-table-thead')[0];
        let col_action_table = table_theadArr.querySelector("[key='cf7d_action']");
        let width_action = col_action_table.offsetWidth;

        setTimeout(function(){ 
          let table_database = document.getElementById("cf7d-table-database-wrap");
          table_database.classList.add("cf7d-table-fixed-col");

          // let table_fixed_ri = document.getElementsByClassName('ant-table-fixed-right')[0];
          // let col = table_fixed_ri.getElementsByTagName('col')[0];
          // console.log(width_action);
          // col.style.width = width_action + 4 + 'px';
          // col.style.minWidth = width_action + 4 + 'px';
        }, 900);
        
      }

      // fix width of column expanded table database
		  if(this.tablenav.expandedRowRender) {
        changeWidthEx.changeWidthEx();
      }
        
      this.$store.commit("database/HANDLING_CHANGE", {name: 'columns', value: this.listColumnArr});
    },
    checkbox(value) {
      const thisVue = this;
      checkbox.checkbox(thisVue, value);
      thisVue.$store.commit("database/HANDLING_CHANGE", {name: 'columns', value: thisVue.listColumnArr});
    },
    size(value) {
      const thisVue = this;
      size.size(thisVue, value);
    },
    expandedRowRender(value) {
      if(value) {
        changeWidthEx.changeWidthEx();
      }
    },
    colHeader(value) {
      if(value) {
        changeWidthEx.changeWidthEx();
      }
    },
  },
  created() {
    const thisVue = this;
    this.listColumnArr = this.columns;
    
    if('fixedHeader' in this.tablenav) {
      fixedHeader.fixedHeader(thisVue, this.tablenav.fixedHeader);
    }

    // Table Scroll
    if(this.tablenav.tableScroll == 'unset' && 'tableScroll' in this.tablenav) {
      let elAction = this.listColumnArr.find(element => element.key == 'cf7d_action');
      elAction.fixed = false;
      this.optionScroll = { x: false, y: false};
    }else if(this.tablenav.tableScroll == 'scroll' && 'tableScroll' in this.tablenav) {
      let elAction = this.listColumnArr.find(element => element.key == 'cf7d_action');
      elAction.fixed = false;
      this.optionScroll = { x: '100%', y: this.height};
    }else if('tableScroll' in this.tablenav && this.tablenav.tableScroll === 'fixedColumn') {
      let elAction = this.listColumnArr.find(element => element.key == 'cf7d_action');
      elAction.fixed = 'right';
      this.optionScroll = { x: '100%', y: this.height};
    }

    // checkbox
    checkbox.checkbox(thisVue, this.tablenav.checkbox);

    this.$store.commit("database/HANDLING_CHANGE", {name: 'columns', value: this.listColumnArr});
  },
  mounted() {
    // fix width for col expanded.
    if(this.tablenav.expandedRowRender) {
      const expandedArr = document.getElementsByClassName("ant-table-expand-icon-col");
      if(expandedArr.length > 0) {
        for(const expanded of expandedArr) {
          expanded.style.width = '54px';
          expanded.style.minWidth = '54px'; 
        }
      }
      
    }

    // fix show 2 col action
    if('tableScroll' in this.tablenav && this.tablenav.tableScroll === 'fixedColumn') {
      let table_theadArr = document.getElementsByClassName('ant-table-thead')[0];
      if(table_theadArr === undefined ) {
        return;
      }else {
        // let col_action_table = table_theadArr.querySelector("[key='cf7d_action']");
        // let width_action = col_action_table.clientWidth;
        setTimeout(function(){ 
          let table_database = document.getElementById("cf7d-table-database-wrap");
          table_database.classList.add("cf7d-table-fixed-col");

          // let table_fixed_ri = document.getElementsByClassName('ant-table-fixed-right')[0];
          // let col = table_fixed_ri.getElementsByTagName('col')[0];
          // col.style.width = width_action + 4 + 'px';
          // col.style.minWidth = width_action + 4 + 'px';
        }, 900);
      }
    }

    // when ellipsis is true, tableLayout is 'fixed'
    if('ellipsis' in this.tablenav && this.tablenav.ellipsis) {
      this.$store.commit("database/CHANGE_SETTING_TALBE", {name: 'tableLayout', value: 'fixed'});
    }
  }
};
</script>

<style>
.cf7d-table-database-wrap{
  position: relative;
}
.cf7d-table-database-wrap .cf7d-table-footer {
  background: #fff;
  height: 55px;
  padding-right: 10px;
  box-shadow: 0 -2px 7px 0 rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  border-radius: 0px 0px 7px 7px;
}
.cf7d-table-database-wrap .cf7d-action {
  text-align: center;
}
.cf7d-table-database-wrap .cf7d-action-icon {
  display: inline-block;
  width: 30%;
  box-shadow: none;
}
.cf7d-table-database-wrap tr > td {
  vertical-align: top;
}
/* .cf7d-table-database-wrap .ant-table-middle tr > td{
  padding-top: 18px !important;
} */
/*.cf7d-table-database-wrap .ant-table-default tr > td{
  padding-top: 22px !important;
}
.cf7d-table-database-wrap .ant-table-small tr > td {
  padding-top: 11px !important;
} */
/* ==== start Fix col action ==== */
.cf7d-table-fixed-col .ant-table-fixed-right {
  border-right: none !important;
  border-left: none !important;
}

.cf7d-table-fixed-col .ant-table-scroll tr > th[key="cf7d_action"] {
  background: #fff !important;
}
.cf7d-table-fixed-col .ant-table-scroll th[key="cf7d_action"]  > span {
  visibility: hidden;
}
/* ==== End Fix col action ==== */
</style>
