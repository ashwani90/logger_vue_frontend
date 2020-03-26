import {fetchTasks} from '../../services/apis/tasks';

const state = {
    tasks: []
};

const getters = {
  tasks: state => {
      return state.tasks;
  }
};

const mutations = {
    'SET_TASKS' (state, tasks) {
        state.tasks = tasks;
    }
};

const actions = {
    fetchTasks: async ({commit}) => {
        const data = await fetchTasks();
        commit('SET_TASKS', data)
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};