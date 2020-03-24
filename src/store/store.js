import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions.js';

import posts from './modules/posts.js';
import tasks from './modules/tasks.js';

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    modules: {
        posts,
        tasks
    }
});