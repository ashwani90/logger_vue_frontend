<template>
    <div class="container">
        <h4>Add Task</h4>
        <form>
            <div class="input-field">
                <input type="text" id="taskName" v-model="taskName"/>
                <label for="taskName">Task Name</label>
            </div>
            <div class="input-field">
                <input type="text" id="details" v-model="details"/>
                <label for="details">Task Details</label>
            </div>
            <div>
                <input type="text" class="datepicker" v-model="expectedFinishDate">
            </div>
            <div class="input-field">
                <textarea name="description" id="description" class="materialize-textarea" v-model="description"></textarea>
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
        data() {
            return {
                taskName: '',
                expectedFinishDate: '',
                endDate: '',
                description: '',
                details: '',
            }
        },
        mounted() {
            M.AutoInit();
            let elems = document.querySelectorAll('.datepicker');
             M.Datepicker.init(elems);
        },
        methods: {
            addTask(e) {
                e.preventDefault();
                let payload = {
                    taskName: this.taskName,
                    expectedFinishDate: this.expectedFinishDate,
                    endDate: this.endDate,
                    description: this.description,
                    details: this.details
                };

                if (this.$props.task && this.$props.task.taskIdentifier) {
                    editTask(this.$props.taskId, payload)
                }

                this.$store.dispatch('addTask', payload);
            },
            editTask(taskId, payload) {
                this.$store.dispatch('editTask', taskId, payload);
            }
        }
    }
</script>