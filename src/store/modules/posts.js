import {fetchPosts, createPost, disablePost, getPost} from "../../services/apis/posts";

const state = {
    posts: [],
    postCreated: false,
    postDisabled: false,
    post: {}
};

const getters = {
    posts: state => {
        return state.posts;
    },
    createPostFlag: state => {
        return state.postCreated;
    },
    getPostDisabled: state => {
        return state.postDisabled;
    },
    getPost: state => {
        return state.post;
    }

};

const mutations = {
    'SET_POSTS' (state, posts) {
        state.posts = posts;
    },
    'SET_CREATE_POST' (state, data) {
        state.postCreated = data;
    },
    'SET_DISABLED_POST' (state, data) {
        state.postDisabled = data;
    },
    'SET_POST' (state, data) {
        state.post = data;
    }
};

const actions = {
    fetchPosts: async ({commit}) => {
        const data = await fetchPosts();
        console.log(data);
        commit('SET_POSTS', data)
    },
    createPost: async ({commit}, requestData) => {
        const data = await createPost(requestData);
        commit('SET_CREATE_POST', data);
    },
    disablePost: async ({commit}, postId) => {
        const data = await disablePost(postId);
        commit('SET_DISABLED_POST', data);
    },
    getPost: async ({commit}, postId) => {
        const data = await getPost(postId);
        commit('SET_POST', data);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};