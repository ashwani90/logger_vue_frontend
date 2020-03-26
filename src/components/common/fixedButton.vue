<template>
    <!-- Fixed Action Button -->
<div class="fixed-action-btn">
    <router-link :to="link">
    <button data-target="post-modal" class="modal-trigger btn-floating btn-large red">
        <i class="material-icons">add</i>
    </button>
    </router-link>
</div>
</template>
<script>

    export default {
        props: ['link']
    }
</script>