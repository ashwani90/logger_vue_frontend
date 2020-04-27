<template>

    <div class="container">
        <div>
            <div class="row">
                <app-post-card :title="'Post Name'" :content="post.postName"></app-post-card>
                <app-post-card :title="'Task Name'" :content="post.task.taskName"></app-post-card>
                <app-post-card :title="'Time Spent'" :content="post.timespent"></app-post-card>
                <app-post-card :title="'Details'" :content="post.details"></app-post-card>
            </div>
            // TODO: Need to work on the disable the post when the switch button is clicked
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
        props: ['postId'],
        data () {
            return {

            }
        },
        computed: {
            posts() {
                return this.$store.getters.getPost(this.$props.postId);
            }
        },
        methods: {
            disablePost() {
                this.$store.dispatch('disablePost', this.$props.postId);
            },
        }
    }
</script>