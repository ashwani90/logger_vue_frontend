<template>
    <div class="container">
        <div v-if="!isEdit">
            <app-post-card :title="'Task Name'" :content="task.taskName"></app-post-card>
            <app-post-card :title="'Expected Finish Date'" :content="task.expectedFinishDate"></app-post-card>
            <app-post-card :title="'Start Date'" :content="task.startDate"></app-post-card>
            <app-post-card :title="'End Date'" :content="task.endDate"></app-post-card>
            <app-post-card :title="'Total Time Spent'" :content="task.totalTimeSpent"></app-post-card>
            <app-post-card :title="'Description'" :content="task.description"></app-post-card>
            <app-post-card :title="'Details'" :content="task.details"></app-post-card>
            <div class="buttons_container" style="margin: 50px 0">
            <button class="btn-floating btn-large red" @click="setEditFlag">
                <i class="material-icons">edit</i>
            </button>
            <button class="btn pink" @click="markTaskFinished" style="float: right; margin-right: 100px;">Finish</button>
            </div>
        </div>
        <div v-else>
            <app-task-form :task="task"></app-task-form>
        </div>
    </div>
</template>
<script>
    import AppTaskForm from '../tasks/taskForm';
    import AppPostCard from '../common/simpleCard';

    export default {
        data() {
            return {
                isEdit: false,
            }
        },
        components: {
             appTaskForm: AppTaskForm,
            appPostCard: AppPostCard
        },
        computed: {
            task: function() {
                let task = this.$store.getters.getTask;
                console.log(task);
                return task;
            }
        },
        created() {
            this.$store.dispatch('getTask', this.$route.query.taskId);
        },
        methods: {
            setEditFlag () {
                this.isEdit = !this.isEdit;
            },
            markTaskFinished() {
                let payload = { status: 'FINISHED' };
                this.$store.dispatch('editTask', this.$props.taskId, payload);
            }
        }
    }
</script>