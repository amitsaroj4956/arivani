import EventService from "#/services/EventService.js";
import stringify from "csv-stringify/lib/sync";

export default {
    upDataCtd({ commit, dispatch }, playload) {
        commit("UP_DATA_CTFD", playload.data);
        dispatch("getDataTable", { 
            fid: playload.data['id_form_current'], 
            page: playload.data['page'], 
            per_page: playload.data['per_page'],
            thisVue: playload.thisVue
        });
    },
    save_edit_setting({ commit, state }, payload) {
        const thisComp = payload;
        commit('LOAD_TABLE', false);

        let formData = new FormData();
        let id_form = state.cfd_data.id_form_current;

        let fieldArr = {};
        for(const list_field_setting of state.list_field_settingArr) {
            fieldArr[list_field_setting.nameField] = {
                label: list_field_setting.label,
                show: list_field_setting.show
            }
        }

        formData.append("action", "cf7d_edit_setting");
        formData.append("fid", id_form);
        formData.append("page", state.cfd_data.page);
        formData.append("per_page", state.cfd_data.per_page);
        formData.append("field", JSON.stringify(fieldArr));

        EventService.saveEditSetting(formData)
            .then(responseData => {
                if (responseData.data.success === false) {
                    commit("DISPLAY_MESSAGE_ERROR",thisComp);
                    return;
                }

                if (responseData.data.success === true) {
                    commit("DISPLAY_MESSAGE_SUCCESS", {message:responseData.data.data.mess,thisComp:thisComp});
                }

                commit("UP_LIST_FIELD_SETTING", fieldArr);

                let upDataTable = 'UP_DATA_TALBE_VER';
                if(state.themeTable == 'ver') {
                    upDataTable = 'UP_DATA_TALBE_VER';
                }else {
                    upDataTable = 'UP_DATA_TALBE_HOR';
                }
                commit(upDataTable, {
                    data_sorted : responseData.data.data[0].data_sorted, 
                    fields: responseData.data.data[0].fields,
                    total_row: responseData.data.data[0].total,
                    items_per_page: responseData.data.data[0].items_per_page,
                    page: responseData.data.data[0].page,
                });
                
                commit('HANDLING_CHANGE', { name: 'eventClickSave', value: false });
            })
            .catch(error => {
				console.log("error", error);
                commit("DISPLAY_MESSAGE_ERROR",thisComp);
            });
    },
    getDataTable({ commit, state }, playload) {
        const thisComp = playload.thisVue;
        commit('LOAD_TABLE', false);
        
        let formData = new FormData();
        formData.append("action", "cf7d_get_rows_data");
        formData.append("fid", playload.fid);
        formData.append("page", playload.page);
        formData.append("per_page", playload.per_page);

        EventService.getDataTable(formData)
            .then(responseData => {
                if (responseData.data.success === false) {
                    console.log('success', responseData.data);
                    commit("DISPLAY_MESSAGE_ERROR",thisComp);
                    return;
                }

                commit("CHANGE_ID_FORM", { fid_cur: playload.fid } );
                commit("HANDLING_CHANGE", {name: 'tablenav', value: responseData.data.data[0].setting_nav_arr });

                let upDataTable = 'UP_DATA_TALBE_VER';
                if(state.themeTable == 'ver') {
                    upDataTable = 'UP_DATA_TALBE_VER';
                }else {
                    upDataTable = 'UP_DATA_TALBE_HOR';
                }
                commit(upDataTable, {
                    data_sorted : responseData.data.data[0].data_sorted, 
                    fields: responseData.data.data[0].fields,
                    total_row: responseData.data.data[0].total_row,
                    items_per_page: responseData.data.data[0].items_per_page,
                    page: responseData.data.data[0].page,
                });

                // event 
                commit('HANDLING_CHANGE', { name: 'eventFilterDate', value: false });
                commit('HANDLING_CHANGE', { name: 'eventTypeSomething', value: false });
                commit("HANDLING_CHANGE", { name: 'eventChooseForm', value: false });

            })
            .catch(error => {
                console.log('error', error);
                commit("DISPLAY_MESSAGE_ERROR",thisComp);
            });
    },
    filterDate({ commit, state }, playload) {
        const thisComp = playload.thisVue;
        commit('LOAD_TABLE', false);

        let formData = new FormData();
        formData.append("action", "cf7d_filter_date");
        formData.append("fid", playload.fid);
        formData.append("page", playload.page);
        formData.append("per_page", playload.per_page);
        formData.append("from_date", playload['dateArr'][0]);
        formData.append("to_date", playload['dateArr'][1]);

        EventService.filterDate(formData)
            .then(responseData => {
                if (responseData.data.success === false) {
                    console.log('success', responseData.data);
                    commit("DISPLAY_MESSAGE_ERROR",thisComp);
                    return;
                }

                if (responseData.data.success === true) {
                    // commit("DISPLAY_MESSAGE_SUCCESS", responseData.data.data.mess);
                }

                let upDataTable = 'UP_DATA_TALBE_HOR';
                if(state.themeTable == 'ver') {
                    upDataTable = 'UP_DATA_TALBE_VER';
                }else {
                    upDataTable = 'UP_DATA_TALBE_HOR';
                }
                commit(upDataTable, {
                    data_sorted : responseData.data.data[0].data_sorted, 
                    fields: responseData.data.data[0].fields,
                    total_row: responseData.data.data[0].total_row,
                    items_per_page: responseData.data.data[0].items_per_page,
                    page: responseData.data.data[0].page,
                });

                commit('HANDLING_CHANGE', { name: 'eventFilterDate', value: false });

            })
            .catch(error => {
                console.log('error', error);
                commit("DISPLAY_MESSAGE_ERROR",thisComp);
            });
    },
    seTypeSomething({ commit, state }, playload) {
            const thisComp = playload.thisVue;
			commit('LOAD_TABLE', false);

            let formData = new FormData();
			formData.append("action", "cf7d_search_type_something");
			formData.append("fid", playload.fid);
			formData.append("page", playload.page);
			formData.append("per_page", playload.per_page);
			formData.append("search_type", playload.typeSomething);

			EventService.seTypeSomething(formData)
					.then(responseData => {
							if (responseData.data.success === false) {
									console.log('success', responseData.data);
									commit("DISPLAY_MESSAGE_ERROR",thisComp);
									return;
							}

							if (responseData.data.success === true) {
									// commit("DISPLAY_MESSAGE_SUCCESS", responseData.data.data.mess);
							}

							let upDataTable = 'UP_DATA_TALBE_HOR';
                            if(state.themeTable == 'ver') {
                                upDataTable = 'UP_DATA_TALBE_VER';
                            }else {
                                upDataTable = 'UP_DATA_TALBE_HOR';
                            }
                            commit(upDataTable, {
                                data_sorted : responseData.data.data[0].data_sorted, 
                                fields: responseData.data.data[0].fields,
                                total_row: responseData.data.data[0].total_row,
                                items_per_page: responseData.data.data[0].items_per_page,
                                page: responseData.data.data[0].page,
                            });

                            commit('HANDLING_CHANGE', { name: 'eventTypeSomething', value: false });
					})
					.catch(error => {
                        console.log('error', error);
                        commit("DISPLAY_MESSAGE_ERROR",thisComp);
					});
    },
    removeRow({ commit }, payload) {
        const thisComp = payload.thisVue;
        commit('LOAD_TABLE', false);

        const selectedRowArr = payload.idArr;
        const idArr = [];
        selectedRowArr.forEach(el => {
            if(el.data_id) {
                idArr.push(el.data_id); 
            }    
        });
        let formData = new FormData();
        formData.append("action", "cf7d_delete_row");
        formData.append("del_id", JSON.stringify(idArr));

        EventService.removeRow(formData)
            .then(responseData => {
                if (responseData.data.success === false) {
					// console.log('success', responseData.data);
                    commit("DISPLAY_MESSAGE_ERROR",thisComp);
                    return;
                }

                if (responseData.data.success === true) {
                    commit("DISPLAY_MESSAGE_SUCCESS", {message:responseData.data.data.mess,thisComp:thisComp});
                }
                
                commit("REMOVE_ROW", {idArr: idArr});

            })
            .catch(error => {
                console.log('error', error);
                commit("DISPLAY_MESSAGE_ERROR",thisComp);
            });
    },
    editRow({state, commit }, playload) {
        commit('LOAD_TABLE', false);
        const thisComp = playload.thisVue;
        const contentRowEdit = playload.thisVue.contentForm;
        let key = '';
        let row = {};
        for(const el of contentRowEdit) {
            if(el.dataIndex == 'numberOrder') {
                continue;
            }
            key = el.dataIndex;
            row[key] = el.content;
        }

        let formData = new FormData();
        let id_row = playload.id_row_edit;
        let form_id_cur = state.cfd_data.id_form_current;
        formData.append("action", "cf7d_edit_row");
        formData.append("fid", form_id_cur);
        formData.append("rid", id_row);
        formData.append("field", JSON.stringify(row));

        EventService.editRow(formData)
            .then(responseData => {
                if (responseData.data.success === false) {
					// console.log('success', responseData.data);
                    commit("DISPLAY_MESSAGE_ERROR",thisComp);
                    return;
                }

                if (responseData.data.success === true) {
                    commit("DISPLAY_MESSAGE_SUCCESS", {message:responseData.data.data.mess,thisComp:thisComp});
                }
                
                commit("EDIT_ROW", playload);

            })
            .catch(error => {
                console.log('error', error);
                commit("DISPLAY_MESSAGE_ERROR",thisComp);
            });
    },
    saveSettingTable({state, commit}, payload) {
            const thisComp = payload;
			let formData = new FormData();
			let form_id_cur = state.cfd_data.id_form_current;
			formData.append("action", "cf7d_edit_setting_table");
			formData.append("fid", form_id_cur);
			formData.append("setting_nav_arr", JSON.stringify(state.tablenav));

			EventService.editRow(formData)
					.then(responseData => {
							if (responseData.data.success === false) {
									console.log('success', responseData.data);
                                    commit("DISPLAY_MESSAGE_ERROR", thisComp);
									return;
							}

							if (responseData.data.success === true) {
								commit("DISPLAY_MESSAGE_SUCCESS", {message:responseData.data.data.mess,thisComp:thisComp});
                            }
					})
					.catch(error => {
                        console.log('error', error);
                        commit("DISPLAY_MESSAGE_ERROR",thisComp);
					});
    },
}