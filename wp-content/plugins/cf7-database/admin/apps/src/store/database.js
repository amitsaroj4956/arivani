import actions from "#/store/database/actions";
import mutations from "#/store/database/mutations";

export default {
  namespaced: true,

  state: {
    loadTable: false,
    cfd_data: null,
    list_field_settingArr: null,
    tablenav: null,
    selectedRows: null,
    columns: [],
    rowData : [],
    contentRow: null,
    showConTable: false,
    showEditRow: false,
    // event click
    eventClickSave: false,
    eventFilterDate: false,
    eventTypeSomething: false,
    eventChooseForm: false,
    dateArr: null,
    themeTable: 'ver',
    typeSomething: null
  },

  mutations,

  actions
};
