<template>
    <div>
    <h4 class="grey-text lighten-3">Tasks</h4>
        <div class="row">
            <app-task-item v-for="task in tasks" :key="task.taskIdentifier" :task="task"></app-task-item>
        </div>
        <app-task-form-button :link="addTaskLink"></app-task-form-button>
    </div>
</template>

<script>
    import TaskFormButton from '../common/fixedButton';
    import AppTaskItem from '../tasks/taskItem';

    export default {
        data() {
            return {
                addTaskLink: '/add-tasks'
            };
        },
        components: {
            appTaskFormButton:  TaskFormButton,
            appTasKItem: AppTaskItem
        },
        computed: {
            tasks() {
                return this.$store.getters.tasks;
            }
        },
        created() {
            if (this.$store.getters.tasks.length == 0) {
                this.$store.dispatch('fetchTasks');
            }
        },
    }
</script>