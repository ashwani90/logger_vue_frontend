import axios from 'axios';

export const fetchTimeTable = () => {
    return axios.get('http://localhost:3000/time-table');
};