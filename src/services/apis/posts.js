import axios from 'axios';

export const fetchPosts = async () => {
    const data = await axios.get('http://localhost/logger_vue/posts.php');
    return await data.data.posts;
};
