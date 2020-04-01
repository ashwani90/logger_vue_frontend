<template>
    <!-- Fixed Action Button -->
    <div class="fixed-action-btn">
            <button data-target="post-modal" class="modal-trigger btn-floating btn-large red" @click="addButtonClick">
                <i class="material-icons">add</i>
            </button>
    </div>
</template>
<script>
    export default {
        methods: {
            addButtonClick: function () {
                this.$emit('buttonClicked')
            }
        }
    }
</script>