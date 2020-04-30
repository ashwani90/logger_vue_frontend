<template  v-for="task in tasks" :key="task.taskIdentifier">
    <div class="col s12 m6 l3">
        <div class="card-panel blue lighten-1 white-text center">
            <span>Name : {{task.taskName}}</span>
            <h5>Start Date : {{task.startDate}}</h5>
            <span>Expected To finish : {{task.expectedFinishDate}}</span>
            <div class="progress grey lighten-1">
                <div class="determinate white" style="width: 40%;"></div>
            </div>
            <router-link :to="{path: 'task', query: { taskId: task._id }}"><button class="btn orange lighten-2">Details</button></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['task']
    }
</script>