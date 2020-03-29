<template>
    <div class="col s12 m6 l3" v-for="task in tasks" :key="task.taskIdentifier">
        <div class="card-panel blue lighten-1 white-text center">
            <span>{{task.taskName}}</span>
            <h5>{{task.totalTimeSpent}}</h5>
            <span>{{task.expectedFinishDate}}</span>
            <div class="progress grey lighten-1">
                <div class="determinate white" style="width: 40%;"></div>
            </div>
            <router-link :to="'task/'+task._id"><button class="btn orange lighten-2">Details</button></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['task']
    }
</script>