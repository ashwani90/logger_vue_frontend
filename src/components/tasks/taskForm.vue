<template>
    <div class="container">
        <h4>Add Task</h4>
        <form>
            <div class="input-field">
                <input type="text" id="taskName" />
                <label for="taskName">Task Name</label>
            </div>
            <div class="input-field">
                <input type="text" id="details" />
                <label for="details">Task Details</label>
            </div>
            <div>
                <input type="text" class="datepicker">
            </div>
            <div class="input-field">
                <textarea name="description" id="description" class="materialize-textarea"></textarea>
                <label for="description">Task Description</label>
            </div>
            <div class="input-field">
                <input
                        type="submit" value="Submit" class="btn pink white-text" @click="addTask"
                />
            </div>


        </form>
    </div>
</template>

<script>
    import M from 'materialize-css';

    export default {
        mounted() {
            M.AutoInit();
            let elems = document.querySelectorAll('.datepicker');
             M.Datepicker.init(elems);
        },
        methods: {
            addTask(e) {
                e.preventDefault();
                console.log("the task was added");
            }
        }
    }
</script>