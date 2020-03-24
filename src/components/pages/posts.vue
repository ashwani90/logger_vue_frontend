<template>
    <section class="section section-posts grey lighten-4">
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <div class="card">
                        <div class="card-content">
                            <span class="card-title">Posts</span>
                            <table class="striped">
                                <thead>
                                <tr>
                                    <th>Posts</th>
                                    <th>Task</th>
                                    <th>Details</th>
                                    <th>Created At</th>
                                    <th>Time Spent</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>

                                    <app-post-item v-for="post in posts" v-bind:key="post" v-bind:post="post"></app-post-item>

                                </tbody>
                            </table>
                        </div>
                        <div class="card-action">
                            <ul class="pagination">
                                <li class="disabled">
                                    <a href="#!" class="blue-text">
                                        <i class="material-icons">chevron_left</i>
                                    </a>
                                </li>
                                <li class="active blue lighten-2">
                                    <a href="#!" class="white-text">1</a>
                                </li>
                                <li class="waves-effect">
                                    <a href="#!" class="blue-text">2</a>
                                </li>
                                <li class="waves-effect">
                                    <a href="#!" class="blue-text">3</a>
                                </li>
                                <li class="waves-effect">
                                    <a href="#!" class="blue-text">4</a>
                                </li>
                                <li class="waves-effect">
                                    <a href="#!" class="blue-text">5</a>
                                </li>
                                <li class="waves-effect">
                                    <a href="#!" class="blue-text">
                                        <i class="material-icons">chevron_right</i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

    import PostItem from '../posts/postItem';

    export default {
        components : {
            appPostItem: PostItem,
        },
        computed: {
            posts() {
                return this.$store.getters.posts;
            }
        },
        created() {
            this.$store.dispatch('fetchPosts');
        }
    }
</script>