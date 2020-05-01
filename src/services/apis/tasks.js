import axios from 'axios';

export const fetchTasks = async () => {
   const data = await axios.get('http://localhost:3000/tasks');
    return await data.data.data;
};

export const getTask = async (taskId) => {
    const data = await axios.get('http://localhost:3000/tasks/' + taskId);
    return await data.data.data;
};

export const createTask = (payload) => {
    return axios.post('http://localhost:3000/tasks', payload);
};

export const editTask = async (taskId, payload) => {
    const data = await axios.put('http://localhost:3000/tasks/' + taskId, payload);
    return await data.data.success;
};