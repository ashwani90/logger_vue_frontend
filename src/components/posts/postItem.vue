<template>
    <tr>
        <td>{{post.postName}}</td>
        <td>{{post.task.taskName}}</td>
        <td>{{post.createdAt}}</td>
        <td>{{post.timeSpent}}</td>
        <td>{{post.details}}</td>
        <td>
            <router-link :to="'post/'+post._id"><button class="btn blue lighten-2">Details</button></router-link>
        </td>
    </tr>
</template>
<script>
    export default {
        props: ['post']
    }
</script>