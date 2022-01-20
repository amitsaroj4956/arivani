import { v4 as uuid } from "uuid";
const is_rtl = njt_cfd_data.is_rtl;

export default {
    DISPLAY_MESSAGE_ERROR(state, playload) {
        const key = 'updatable';
        playload.$message.error({ content: 'Opp! Something went wrong.', key, duration: 4 });
    },
    DISPLAY_MESSAGE_SUCCESS(state, playload) {
        const key = 'updatable';
        playload.thisComp.$message.success({ content: playload.message, key, duration: 2 });
	},
    CHANGE_SETTING_TALBE(state, playload) {
        if(playload.name in state.tablenav) {
            state.tablenav[playload.name] = playload.value;
        }
    },
    UP_DATA_CTFD(state, playload) {
        state.cfd_data = playload;
        state.tablenav = playload.setting_nav_arr;

        // remove setting_nav_arr
        const cfd_data = { ...state.cfd_data };
        delete cfd_data.setting_nav_arr;
        state.cfd_data = cfd_data;
    },
    UP_LIST_FIELD_SETTING(state, playload) {
        let id = state.cfd_data.id_form_current;
        state.list_field_settingArr = null;

        // Up data when save edit setting
        if(typeof playload === 'object') {
            state.cfd_data.list_field_settingArr[id] = playload;
            return;
        }else {
            // up data when click button setting
            state.list_field_settingArr = [];
            let list_field = state.cfd_data.list_field_settingArr[id];
            for(const key in list_field) {
                // not 
                // if(key === 'data_id') {
                //     continue;
                // }
                state.list_field_settingArr.push({
                    label: list_field[key].label,
                    nameField: key,
                    show: Number(list_field[key].show)
                })
            }
            return;
        }

    },
    HANDLE_FIELD(state, playload) {
        let list_field = [];
        state.list_field_settingArr.forEach( (item, key) => {
            list_field[key] = { ...item };
        })
        list_field[playload.key][playload.name] = playload.value;
        state.list_field_settingArr = list_field;
    },

    // Theme Table vertical
    UP_DATA_TALBE_VER(state, playload) {
        // columns(name field)
        let listColumns = playload.fields;
        let ellipsis = false;
        if(state.tablenav.ellipsis) {
            ellipsis = true;
        }else {
            ellipsis = false;
        }
        
        let columns = [
            // { 
            //     title: 'ID',
            //     dataIndex: 'numberOrder',
            //     key: 'numberOrder',
            //     ellipsis: ellipsis,
            //     width: 54,
            // },
        ];
        var cookieName = "cf7db_table=";
        var cf7db_table = {};
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
            c = c.substring(1);
            }
            if (c.indexOf(cookieName) == 0) {
                cf7db_table = JSON.parse(c.substring(cookieName.length, c.length));
            }
        }
        // console.log(cf7db_table);
        if(Object.keys(cf7db_table).length > 0 ) {
            for (const keyColumn in listColumns) {
                let el = { 
                    title: listColumns[keyColumn].toUpperCase(),
                    dataIndex: keyColumn,
                    key: keyColumn,
                    ellipsis: ellipsis,
                    width: cf7db_table[keyColumn],
                };
                columns.push(el);
            }
        } else {
            for (const keyColumn in listColumns) {
                let el = { 
                    title: listColumns[keyColumn].toUpperCase(),
                    dataIndex: keyColumn,
                    key: keyColumn,
                    ellipsis: ellipsis,
                    width: 240,
                };
                if(keyColumn == 'data_id') {
                    el.width =  60;
                }
                columns.push(el);
            }
        }
        
        // Action
        columns.push({
            title: 'ACTION',
            key: 'cf7d_action',
            dataIndex: 'cf7d_action',
            width: '115px',
            fixed: 'right',
            scopedSlots: { customRender: 'action' },
        });
        if(typeof columns.find(item => njt_cfd_data.html_fields.indexOf(item.key) > -1) != 'undefined') {
          columns.find(item => njt_cfd_data.html_fields.indexOf(item.key) > -1).scopedSlots = {
            customRender: 'subject'
          }
        }
        // row
        let rowArr = [];
        let listRowArr = Object.values(playload.data_sorted);
        // let numberOrder = 1;

        for(const rowDataObj of listRowArr) {
            let row = {};
            // row['numberOrder'] = numberOrder; 
            row['key'] = uuid();
            let description = '';
            // description += 'Id: ' + numberOrder + ', ';
            // let descriptionArrRtl = [];

            for(const col of columns) {
                if(col.dataIndex && col.dataIndex in rowDataObj) {
                    row[col.dataIndex] =  rowDataObj[col.dataIndex];
                    // description for language right to left
                    // if(is_rtl == '1') {
                    //     description = '';
                    //     description += ', ' + (col.title).toUpperCase() + ': ' + rowDataObj[col.dataIndex];
                    //     descriptionArrRtl.unshift(description);
                    // }else {
                        description += '<strong>' + (col.title).toUpperCase() + ':</strong> ' + rowDataObj[col.dataIndex] + ', '
                    // }
                }
            }

            // description for language right to left
            // if(is_rtl == '1') {
                // description = descriptionArrRtl.join(" ");
                // let lastCharacter = description.lastIndexOf(",");
                // description = description.slice(0, lastCharacter).trim();
                // description += ".";
            // }else {
                 /*
                    @ Remove ',' and add '.' in last string
                    @ description use for expandable of ant.
                */
                let lastCharacter = description.lastIndexOf(",");
                description = description.slice(0, lastCharacter).trim();
                description += ".";
            // }

            row['description'] = description;
            rowArr.push(row);
            // numberOrder++;
        }

        // remove column data id in table
        // columns = columns.filter(function(col) {
        //     return col.dataIndex !== 'data_id'
        // })
        rowArr = rowArr.reverse();

        state.columns = columns;
        state.rowData = rowArr;
        if('total_row' in playload) {
            state.cfd_data.total_row = playload.total_row;
        }else {
            console.log('error total_row');
        }

        if('items_per_page' in playload) {
            state.cfd_data.per_page = playload.items_per_page;
        }else {
            console.log('error items_per_page');
        }

        if('page' in playload) {
          state.cfd_data.page = playload.page;
        }else {
            console.log('error page');
        }

        if('setting_nav_arr' in playload) {
            state.tablenav = playload.setting_nav_arr;
        }
        // load again table
        state.loadTable = true;

        // 
        state.selectedRows = null;
    },
    
    // Theme Table Horizontal
    UP_DATA_TALBE_HOR(state, playload) {
        // columns(name field)
        let ellipsis = false;
        if(state.tablenav.ellipsis) {
            ellipsis = true;
        }else {
            ellipsis = false;
        }
        
        let listColumns = [{title: 'Name fields', dataIndex: 'fields'}];
        let columns = [];
        for (const keyColumn in listColumns) {
            let el = { 
                title: listColumns[keyColumn]['title'],
                dataIndex: listColumns[keyColumn]['dataIndex'],
                key: listColumns[keyColumn]['dataIndex'],
                ellipsis: ellipsis,
                width: 100,
            };
            columns.push(el);
        }
        
        // row
        let rowArr = [];
        let listRowArr = Object.values(playload.data_sorted);
        
        for(const rowDataObj of listRowArr) {
            let row = {};
            row['key'] = uuid();
            let description = '';
            let fieldsArr = [];
            // let descriptionArrRtl = [];

            for(const keyCol in playload.fields) {
                if(keyCol in rowDataObj) {
                    let fields = {};
                    fields.dataIndex = keyCol;
                    fields.nameField = playload.fields[keyCol].toLocaleUpperCase();
                    fields.conFields = rowDataObj[keyCol];
                    fields.data_id = rowDataObj['data_id'];
                    fieldsArr.push(fields);

                    // description for language right to left
                    // if(is_rtl == '1') {
                    //     description = '';
                    //     description += ' .' + rowDataObj[keyCol] + ': ' + playload.fields[keyCol].toLocaleUpperCase();
                    //     descriptionArrRtl.unshift(description);
                    // }else {
                        description += '<strong>' + playload.fields[keyCol].toLocaleUpperCase() + ':</strong> ' + rowDataObj[keyCol] + ', ';
                    // }
                }
            }

            // description for language right to left
            // if(is_rtl == '1') {
                // description = descriptionArrRtl.join(" ");
                // let lastCharacter = description.lastIndexOf(",");
                // description = description.slice(0, lastCharacter).trim();
                // description += ".";
            // }else {
                 /*
                    @ Remove ',' and add '.' in last string
                    @ description use for expandable of ant.
                */
                let lastCharacter = description.lastIndexOf(",");
                description = description.slice(0, lastCharacter).trim();
                description += ".";
            // }
           
            row['data_id'] = rowDataObj['data_id'];
            row['description'] = description;
            row['fieldsArr'] = fieldsArr;
            rowArr.push(row);
        }

        state.columns = columns;
        rowArr = rowArr.reverse();
        state.rowData = rowArr;
        if('total_row' in playload) {
            state.cfd_data.total_row = playload.total_row;
        }else {
            console.log('error total_row');
        }

        if('items_per_page' in playload) {
            state.cfd_data.per_page = playload.items_per_page;
        }else {
            console.log('error items_per_page');
        }

        if('page' in playload) {
          state.cfd_data.page = playload.page;
        }else {
            console.log('error page');
        }

        if('setting_nav_arr' in playload) {
            state.tablenav = playload.setting_nav_arr;
        }

        // load again table
        state.loadTable = true;

        // 
        state.selectedRows = null;
    },
    LOAD_TABLE(state, playload) {
        state.loadTable = playload;
    },
    CHANGE_ID_FORM(state, playload) {
        state.cfd_data.id_form_current = playload.fid_cur;
    },
    SELECTED_ROW(state, playload) {
        state[playload['name']] = playload['value'];
    },
    REMOVE_ROW(state, playload) {
        let rowDataArr = state.rowData;
        const idArr = playload.idArr;

        for(const id of idArr) {
            rowDataArr = rowDataArr.filter(function(el) {
                return el.data_id !== id;
            });
        }
        
        // 
        state.rowData = rowDataArr;

        // load table
        state.loadTable = true;

        // 
        state.selectedRows = null;
    },
    SHOW_CONTENT_ROW(state, playload) {
        const contentRow = [];
        let row = {};
        row = playload.contentRow;
        if(state.themeTable === 'ver') {
            const columnArr = state.columns;
            if(Array.isArray(columnArr) && typeof row == 'object') {
                for (const key in row) {
                    columnArr.forEach(function(col) {
                        if(col.dataIndex == key) {
                            const el = {title: col.title, content: row[key], dataIndex: key};
                            contentRow.push(el);
                            return;
                        }
                    })
                }
            }
        }else if(state.themeTable === 'hor') {
            for(const el of row) {
                contentRow.push({ title: el.nameField, content: el.conFields, dataIndex: el.dataIndex });
            }
        }
        state.contentRow = contentRow;
        state.showConTable = playload.show;
    },
    HANDLING_CHANGE(state, playload) {
        const name = playload.name;
        state[name] = playload.value;
    },
    EDIT_ROW(state, playload) {
        const rowContentEdit = playload.contentForm;
        const rowDataArr = state.rowData;
       
        if(Array.isArray(rowDataArr)) {
            // theme vertical
            if(state.themeTable === 'ver') {
                rowDataArr.forEach(function (rowData) {
                    if(rowData.data_id == playload.id_row_edit) {
                        for(const keyName in rowContentEdit) {
                            let nameField = rowContentEdit[keyName]['dataIndex'];
                            rowData[nameField] = rowContentEdit[keyName]['content'];
                        }
                        return;
                    }
                });
            }else if(state.themeTable === 'hor') {  // theme horizontal
                rowDataArr.forEach(function (rowData) {
                    if(rowData.data_id == playload.id_row_edit) {
                        for(const keyName in rowContentEdit) {
                            let index = rowContentEdit[keyName]['dataIndex'];
                            for(const item of rowData.fieldsArr) {
                                if(item.dataIndex === index) {
                                    item['conFields'] = rowContentEdit[keyName]['content'];
                                }
                            }
                        }
                        return;
                    }
                });
            }
            state.rowData = rowDataArr;
            state.loadTable = true;
        }
    },
}