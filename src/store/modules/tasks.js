import {fetchTasks, editTask, getTask} from '../../services/apis/tasks';

const state = {
    tasks: [],
    taskUpdated: false,
    task: {}
};

const getters = {
  tasks: state => {
      return state.tasks;
  },
  taskUpdated: state => {
      return state.taskUpdated;
  },
    getTask: state => {
      return state.task;
    }
};

const mutations = {
    'SET_TASKS' (state, tasks) {
        state.tasks = tasks;
    },
    'SET_TASK_UPDATED' (state, data) {
        state.taskUpdated = data;
    },
    'GET_TASK' (state, data) {
        state.task = data;
    }
};

const actions = {
    fetchTasks: async ({commit}) => {
        const data = await fetchTasks();
        commit('SET_TASKS', data)
    },
    editTask: async ({commit}, taskId, payload) => {
        const data = await editTask(taskId, payload);
        commit('SET_TASK_UPDATED', data)
    },
    getTask: async ({commit}, taskId) => {
        const data = await getTask(taskId);
        commit('GET_TASK', data[0]);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};