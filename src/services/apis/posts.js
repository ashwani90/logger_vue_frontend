import axios from 'axios';

export const fetchPosts = async () => {
    const data = await axios.get('http://localhost:3000/posts');
    return await data.data.data;
};

export const createPost = (payload) => {
    return axios.post('http://localhost:3000/posts', payload);
};

export const disablePost = async (postId) => {
    const data = await axios.put('http://localhost:3000/posts/' + postId, {disabled: true});
    return await data.data.success;
};

export const getPost = async (postId) => {
    const data = await axios.get('http://localhost:3000/posts/' + postId);
    return await data.data.data;
};