import axios from 'axios';

export const fetchTasks = async () => {
   const data = await axios.get('http://localhost/logger_vue/tasks.php');
    return await data.data.tasks;
};

export const getTask = async (taskId) => {
    const data = await axios.get('http://localhost:3000/tasks/' + taskId);
    return await data.data.task;
};

export const createTask = async (payload) => {
    const data = await axios.post('http://localhost:3000/tasks', payload);
    return await data.data.task;
};

export const editTask = async (taskId, payload) => {
    const data = await axios.put('http://localhost:3000/tasks/' + taskId, payload);
    return await data.data.success;
};