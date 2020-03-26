<template>
    <div class="container">
    <h4>Add Post</h4>
    <form>
        <div class="input-field">
            <input type="text" id="title" />
            <label for="title">Post Name</label>
        </div>
        <div class="input-field">
            <input type="text" id="details" />
            <label for="details">Post Details</label>
        </div>
        <div class="input-field">
        <select>
            <option value="" disabled selected>Select Task</option>
            <option v-for="task in tasks" v-bind:key="task.taskName" :value="task.taskIdentifier">
                {{ task.taskName }}
            </option>
        </select>
        </div>
        <div class="row">
            <div class="col s12 m6 l6">
                <input id="from_timepicker" type="text" class="timepicker">
                <label for="from_timepicker">From</label>
            </div>

            <div class="col md-6 sm-12">
            <input id="to_timepicker" type="text" class="timepicker">
            <label for="to_timepicker">Untill</label>
            </div>
        <div>
        </div>
    </div>
        <div class="input-field">
          <input
                 type="submit" value="Submit" class="btn pink white-text" @click="addPosts"
          />
        </div>
    </form>
    </div>
</template>

<script>
    import M from 'materialize-css';

    export default {
        computed: {
            tasks() {
                return this.$store.getters.tasks;
            }
        },
        methods: {
            addPosts(e) {
                e.preventDefault();
                console.log(e);
            }
        },
        created() {
            if (this.$store.getters.tasks.length == 0) {
                this.$store.dispatch('fetchTasks');
            }
        },
        mounted() {
            M.AutoInit();
            let selectElems = document.querySelectorAll('select');
            M.FormSelect.init(selectElems);
        },

    };
</script>