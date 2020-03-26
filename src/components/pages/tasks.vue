<template>
    <div>
    <h4 class="grey-text lighten-3">Tasks</h4>
        <div class="row">
        <div class="col s12 m6 l3" v-for="task in tasks" :key="task.taskIdentifier">
            <div class="card-panel blue lighten-1 white-text center">
                <span>{{task.taskName}}</span>
                <h5>{{task.totalTimeSpent}}</h5>
                <span>{{task.expectedFinishDate}}</span>
               <div class="progress grey lighten-1">
                    <div class="determinate white" style="width: 40%;"></div>
                </div>
                    <button class="btn orange lighten-2">Details</button>
            </div>
        </div>
        </div>
        <app-task-form-button :link="addTaskLink"></app-task-form-button>
    </div>
</template>

<script>
    import TaskFormButton from '../common/fixedButton';

    export default {
        data() {
            return {
                addTaskLink: '/add-tasks'
            };
        },
        components: {
            appTaskFormButton:  TaskFormButton
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