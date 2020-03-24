import {fetchPosts} from "../../services/apis/posts";

const state = {
    posts: []
};

const getters = {
    posts: state => {
        console.log('operation to fetch the posts');
        return state.posts;
    }
};

const mutations = {
    'SET_POSTS' (state, posts) {
        state.posts = posts;
    }
};

const actions = {
    fetchPosts: async ({commit}) => {
        const data = await fetchPosts();
        commit('SET_POSTS', data)
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};