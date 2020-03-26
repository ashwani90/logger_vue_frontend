import axios from 'axios';

export const fetchTasks = async () => {
   const data = await axios.get('http://localhost/logger_vue/tasks.php');
    return await data.data.tasks;
};