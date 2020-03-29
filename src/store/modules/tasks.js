import {fetchTasks} from '../../services/apis/tasks';

const state = {
    tasks: [],
    taskUpdated: false,
    taskCreated: false,
    task: {}
};

const getters = {
  tasks: state => {
      return state.tasks;
  },
  taskUpdated: state => {
      return state.taskUpdated;
  },
    taskCreated: state => {
      return state.taskCreated;
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
    'TASK_CREATED' (state, data) {
        state.taskCreated = data;
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
    addTask: async ({commit}, payload) => {
        const data = await createTask(payload);
        commit('TASK_CREATED', data);
    },
    getTask: async ({commit}, postId) => {
        const data = await getTask(postId);
        commit('GET_TASK', data);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};