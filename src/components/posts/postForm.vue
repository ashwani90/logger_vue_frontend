<template>
    <div class="container">
    <h4>Add Post</h4>
    <form>
        <div class="input-field">
            <input type="text" id="postName" v-model="postName"/>
            <label for="postName">Post Name</label>
        </div>
        <div class="input-field">
            <input type="text" id="details" v-model="details"/>
            <label for="details">Post Details</label>
        </div>
        <div class="input-field">
        <select v-model="taskIdentifier">
            <option value="" disabled selected>Select Task</option>
            <option v-for="task in tasks" v-bind:key="task.taskName" :value="task.taskIdentifier">
                {{ task.taskName }}
            </option>
        </select>
        </div>
        <div class="row">
            <div class="col s12 m4 l4">
                <input id="date" type="text" class="datepicker" v-model="date">
                <label for="date">Select Date</label>
            </div>

            <div class="col s12 m4 l4">
                <input id="from_timepicker" type="text" class="timepicker" v-model="fromTime">
                <label for="from_timepicker">From</label>
            </div>

            <div class="col s12 m4 l4">
            <input id="to_timepicker" type="text" class="timepicker" v-model="toTime">
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
        props: ['post'],
        data() {
            return {
                postName: '',
                details: '',
                taskIdentifier: '',
                fromTime: '',
                toTime: '',
                timepickerInstance: '',
                date: '',
                datepickerInstance: ''
            };
        },
        computed: {
            tasks() {
                return this.$store.getters.tasks;
            }
        },
        methods: {
            addPosts(e) {
                e.preventDefault();
                let postName = this.postName;
                let details = this.details;
                let taskIdentifier = this.taskIdentifier;

                let selectedDate = this.datepickerInstance[0].date;

                let startTime = selectedDate.getFullYear() + '-' + (selectedDate.getMonth()+1) + '-' +
                    selectedDate.getDate() + ' ' + this.timepickerInstance[0].time + ':00';
                let endTime = selectedDate.getFullYear() + '-' + (selectedDate.getMonth()+1) + '-' +
                    selectedDate.getDate() + ' ' + this.timepickerInstance[1].time + ':00';

                let timeSpentInSeconds = (endTime - startTime)/1000;

                let requestData = {
                    postName,
                    details,
                    taskId: taskIdentifier,
                    timeSpent: timeSpentInSeconds,
                    startTime,
                    endTime
                };

                this.$store.dispatch('createPost', requestData);
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
            var timePickerElems = document.querySelectorAll('.timepicker');
            this.timepickerInstance = M.Timepicker.init(timePickerElems, {twelveHour: false});
            let dateElems = document.querySelectorAll('.datepicker');
            this.datepickerInstance = M.Datepicker.init(dateElems);
        },

    };
</script>
