import Vue from 'vue';

export const loadData = () => {
    Vue.http.get('posts.json')
        .then(response => response.json())
        .then(data => {
            if (data) {
                console.log("it is coming here");
                console.log(data);

                // commit('SET_STOCKS', stocks);
                // commit('SET_PORTFOLIO', portfolio);
            }
        });
};