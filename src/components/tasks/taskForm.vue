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
                <label for="expectedFinishDate">Expected Finish Date</label>
                <input type="text" class="datepicker" v-model="expectedFinishDate" id="expectedFinishDate">

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
    import { createTask } from "../../services/apis/tasks";

    export default {
        data() {
            return {
                taskName: '',
                expectedFinishDate: '',
                description: '',
                details: '',
            }
        },
        mounted() {
            M.AutoInit();
            let elems = document.querySelectorAll('.datepicker');
            this.datepickerInstance = M.Datepicker.init(elems);
        },
        methods: {
            addTask(e) {
                e.preventDefault();

                let selectedDate = this.datepickerInstance[0].date;
                let dateString = selectedDate.getFullYear() + '-' + (selectedDate.getMonth()+1) + '-' +
                selectedDate.getDate();

                let startDate = new Date();
                let startDateString = startDate.getFullYear() + '-' + (startDate.getMonth()+1) + '-' +
                    startDate.getDate();

                let payload = {
                    taskName: this.taskName,
                    expectedFinishDate: dateString,
                    startDate: startDateString,
                    description: this.description,
                    details: this.details
                };

                console.log(payload);
                // if (this.$props.task && this.$props.task.taskIdentifier) {
                //     this.editTask(this.$props.taskId, payload)
                // }

                createTask(payload).then((res, err) => {
                    if (err) {
                        console.log(err);
                    }

                    if (res.data.success == true) {
                        this.$router.push('/tasks')
                    }
                });

                //this.$store.dispatch('addTask', payload);
            },
            // editTask(taskId, payload) {
            //     //this.$store.dispatch('editTask', taskId, payload);
            // }
        }
    }
</script>