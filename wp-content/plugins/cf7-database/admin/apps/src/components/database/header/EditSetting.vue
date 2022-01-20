<template>
  <div class="cf7d-setting-title-table">
    <a-button class="cf7d-setting-bt" @click="showModal">
        <a-icon style="color: #1a2a37" type="setting" />Column Settings
    </a-button>
    <a-modal
			width="592px"
      wrapClassName="cf7d-setting-col"
			class="cf7d-table-setting"
      title="Sort Column"
      :visible="visible"
      @cancel="handleCancel"
			:footer="null"
			:bodyStyle="{paddingTop: '10px', maxHeight: '780px', overflowY: 'auto', overflowX: 'auto'}"
    >
			<draggable
        :list="list_field_settingArr"
        class="cf7d-list-group"
        ghost-class="cf7d-ghost"
				handle=".cf7d-icon-menu"
        :move="checkMove"
      >
        <div
          class="cf7d-list-group-item"
          v-for="(el, key) in list_field_settingArr"
          :key="key"
        >	
        	<div class="cf7d-item-wrap">
						<a-icon class="cf7d-icon-menu" :style="{ fontSize: '20px', color: '#a8a9ad', marginTop: '6px', cursor: 'move' }" type="menu" />
						<label class="cf7d-name-item">{{ showNameField(el) }}</label>
						<a-input @change="(event) => { changeNameLable(event, key) }" :style= "[showNameField(el) == el.label ? {'color': '#a8a9ad'} : {'color': '#1a2a37'}]" class="cf7d-input" :value="showNameField(el) == el.label ? 'Enter a name' : el.label" placeholder="Enter a name" />
						<a-icon @click="show('hide', key)" v-if="Number(el.show) == 1" class="cf7d-icon-eye" type="eye"  />
						<a-icon @click="show('show', key)" v-else class="cf7d-icon-eye" type="eye-invisible" />
					</div>
        </div>
      </draggable>

			<div class="cf7d-bt-save-wrap">
				<a-button :disabled="disabledSave"  @click="handleSave" class="cf7d-bt-save" type="primary">
      		Save Changes
    		</a-button>
			</div>
			
    </a-modal>
  </div>
</template>
<script>
import draggable from 'vuedraggable';
import { mapState } from 'vuex';
const key = 'updatable';

export default {
	components: {
		draggable
	},
  data() {
    return {
      visible: false,
      nameField: null,
      disabledSave: null,
    };
  },
  computed: {
    ...mapState("database", ["list_field_settingArr"]),
  },
  methods: {
    showModal() {
      this.visible = true;
      this.$store.commit("database/UP_LIST_FIELD_SETTING");
      this.disabledSave = true;
    },
    handleSave() {
      this.visible = false;
      this.$message.loading({ content: 'Loading...', key });
      this.$store.dispatch('database/save_edit_setting',this);

      this.$store.commit('database/HANDLING_CHANGE', { name: 'eventClickSave', value: true });
    },
    handleCancel(e) {
      this.visible = false;
		},
    showNameField(el) {
      if(el.nameField.trim().length > 14) {
        return el.nameField.substr(0, 14) + '...';
      }else {
        return el.nameField;
      }
    },
    show(e, key) {
      if(e == 'show') {
        let show = 1;
        this.$store.commit('database/HANDLE_FIELD', { 'key': key, 'name': 'show', 'value': show });
      }else {
        let hide = 0;
        this.$store.commit('database/HANDLE_FIELD', { 'key': key, 'name': 'show', 'value': hide });
      }

      this.disabledSave = false;
    },
    changeNameLable(event, key) {
      this.$store.commit('database/HANDLE_FIELD', { 'key': key, 'name': 'label', 'value': event.target.value });
      this.disabledSave = false;
    },
    checkMove() {
      this.disabledSave = false;
    }
  },
};
</script>

<style scoped>
.cf7d-setting-title-table {
  display: inline-block;
  margin-left: 8px;
}
.cf7d-setting-title-table .cf7d-setting-bt {
	border-radius: 3px;
  height: 32px;
}
/* ====== start drap ====== */
.cf7d-list-group .sortable-chosen  {
	border: 1px solid #1a2a37;
}
.cf7d-list-group .cf7d-ghost {
	border: 1px dashed #e6e8eb;
}
.cf7d-list-group .cf7d-ghost .cf7d-item-wrap {
	visibility: hidden;
} 
/* ====== end ====== */
.cf7d-list-group-item {
	width: 100%;
  height: 55px;
  border-radius: 7px;
  border: solid 1px #e6e8eb;
	background-color: #ffffff;
	margin-bottom: 10px;
	position: relative;
	padding: 10px;
}
.cf7d-list-group-item .cf7d-name-item {
  font-size: 14px;
  font-weight: normal;
  font-style: italic;
	color: #1a2a37;
	position: absolute;
	top: 15px;
	left: 40px;
	cursor: text;
}
.cf7d-list-group-item .cf7d-input {
	width: 70%;
	float: right;
	border-color: #d9d9d9;
	color: #a8a9ad;
	font-size: 14px;
}
.cf7d-list-group-item .cf7d-input:focus {
	border-color: #1d8cb8;
}
.cf7d-list-group-item .cf7d-icon-eye {
  outline: none;
	position: absolute;
	right: 20px;
	font-size: 19px;
	top: 30%;
	color: #74788d;
	cursor: pointer;
}
.cf7d-table-setting .cf7d-bt-save-wrap {
	width: 100%;
	overflow: auto;
	padding-top: 10px;
}
.cf7d-table-setting .cf7d-bt-save {
	float: right;
	/* width: 130px; */
	height: 34px;
	/* background: #0f729f !important; */
  border: none;
  /* color: #fff !important; */
}
.cf7d-table-setting .cf7d-bt-save[disabled] {
  color: #a0a5aa!important;
  background: #f7f7f7!important;
}
    
@media only screen and (max-width: 768px){
  .cf7d-table-setting .cf7d-list-group-item {
    padding: 6px;
  }
  .cf7d-table-setting .cf7d-icon-menu {
    margin-top: 11px !important;
  }
}

</style>
