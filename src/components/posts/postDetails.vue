<template>

    <div class="container"><h2>Post Details</h2>
        <div>
            <div class="row">
                <app-post-card :title="'Post Name'" :content="post.postName"></app-post-card>
                <app-post-card :title="'Task Name'" :content="post.task.taskName"></app-post-card>
                <app-post-card :title="'Time Spent'" :content="post.timeSpent"></app-post-card>
                <app-post-card :title="'Details'" :content="post.details"></app-post-card>
            </div>

            <div class="switch">
                <label>
                    Disable Post
                    <input :disabled="post.disabled" type="checkbox" >
                    <span class="lever"></span>
                </label>
            </div>
        </div>
    </div>

</template>

<script>
     import AppPostCard from '../common/simpleCard';

    export default {
        components: {
             appPostCard: AppPostCard
        },
        data () {
            return {

            }
        },
        created() {
            this.$store.dispatch('getPost', this.$route.query.postId);
        },
        computed: {
            post() {
                return this.$store.getters.getPost;
            }
        },
        methods: {
            disablePost() {
                //this.$store.dispatch('disablePost', this.$props.postId);
            },
        }
    }
</script>