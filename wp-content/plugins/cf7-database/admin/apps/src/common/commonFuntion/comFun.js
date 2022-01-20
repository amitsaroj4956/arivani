export const removeRow = {
	removeRow:function(thisVue, id) {
		if(id) {
			const idArr = [{ data_id : id }];
			thisVue.$store.dispatch("database/removeRow", {idArr:idArr,thisVue:thisVue});
		}else {
			return;
		}
	},
}

export const showContentRow = {
	showContentRow:function(thisVue, value) {
		if(value) {
			thisVue.$store.commit("database/SHOW_CONTENT_ROW", {contentRow: value, show: true});
		}
	},
}

export const editContetRow = {
	editContetRow:function(thisVue, value) {
		if(value) {
			thisVue.id_row_edit = Number(value.data_id);
			thisVue.$store.commit("database/SHOW_CONTENT_ROW", {contentRow: value, show: false});
			thisVue.$store.commit("database/HANDLING_CHANGE", {name: 'showEditRow', value: true});
		}
	},
}

export const ellipsis = {
	ellipsis:function(thisVue, listColumnArr, value) {
		for(const listColumn of listColumnArr) {
			if('ellipsis' in listColumn) {
				if(value) {
					listColumn.ellipsis = true;
				}else {
					listColumn.ellipsis = false;
				}
			}
		}
	},
}

export const fixedHeader = {
	fixedHeader:function(thisVue, value) {
		if(value) {
			thisVue.height = 800;
		}else {
			thisVue.height = false;
		}
	},
}

// theme horizontal
export const tableScroll = {
	tableScroll:function(thisVue, value) {
		if(value == 'unset' && 'tableScroll' in thisVue.tablenav) {
			thisVue.optionScroll = { x: false, y: false};
		}else if(value == 'scroll' && 'tableScroll' in thisVue.tablenav) {
			thisVue.optionScroll = { x: 'max-content', y: thisVue.height}; 
		}else if(value === 'fixedColumn' && 'tableScroll' in thisVue.tablenav) {
			thisVue.optionScroll = { x: 'max-content', y: thisVue.height};
		}
	},
}

// fix width of column expanded table database
export const changeWidthEx = {
	changeWidthEx:function() {
		setTimeout(function(){ 
			const expandedArr = document.getElementsByClassName("ant-table-expand-icon-col");
			if(expandedArr.length > 0) {
				for(const expanded of expandedArr) {
					expanded.style.width = '54px';
					expanded.style.minWidth = '54px'; 
				}
			}
		}, 500);
	},
}

export const checkbox = {
	checkbox:function(thisVue, value) {
		let n = thisVue.listColumnArr.find(function(listColumn) {
			return listColumn.key === 'selection-column'
		})
		
		if(value && !n) {
			thisVue.listColumnArr.unshift({
					key: 'selection-column',
					width: 60,
				}
			);
		}else if(value == 0 && n) {
			let m = thisVue.listColumnArr.filter(function(listColumn) {
				return listColumn.key !== 'selection-column'
			});
			thisVue.listColumnArr = m;
		}
	},
}

export const size = {
	size:function(thisVue) {
		for(const listColumn of thisVue.listColumnArr) {
			if('key' in listColumn === true && listColumn.key == 'cf7d_action') {
				thisVue.checkChangeSize = true;
			}
		}

		setTimeout(function(){ 
				thisVue.checkChangeSize = false;
		}, 500);
	},
}
