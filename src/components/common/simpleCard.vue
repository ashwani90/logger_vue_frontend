<template>
    <div class="col s12 m6">
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <span class="card-title">{{title}}</span>
                <p>{{content}}</p>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        props: ['title', 'content']
    }
</script>