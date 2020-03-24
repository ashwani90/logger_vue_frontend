<template>
<tr>
        <td>{{ post.postName }}</td>
        <td>{{ post.task.taskName }}</td>
        <td>{{ post.createdAt }}</td>
        <td>{{ post.timeSpent }}</td>
    <td><p class="truncate">{{ post.details }}</p></td>
        <td>
            <a href="details.html" class="btn blue lighten-2">Details</a>
        </td>
</tr>
</template>

<script>
    export default {
        props: [ 'post' ]
    }
</script>