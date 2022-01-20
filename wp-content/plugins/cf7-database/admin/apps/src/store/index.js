import Vue from "vue";
import Vuex from "vuex";

import database from "#/store/database";

Vue.use(Vuex);
Vue.config.devtools = true;

export default new Vuex.Store({
	modules: {
		database: database,
	}
});