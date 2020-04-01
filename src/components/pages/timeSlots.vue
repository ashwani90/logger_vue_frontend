<template>
    <div class="container">
        <h5 class="black-text"> Page will serve to create time slots in a day for recurring tasks </h5>

        <app-float-button v-on:buttonClicked="addButtonClicked"></app-float-button>

        <form v-if="showAdd">
            <div class="row">
                <div class="col s12 m6 l4">
                    <input id="from_timepicker" type="text" class="timepicker" v-model="fromTime">
                    <label for="from_timepicker">From</label>
                </div>

                <div class="col s12 m6 l4">
                    <input id="to_timepicker" type="text" class="timepicker" v-model="toTime">
                    <label for="to_timepicker">Untill</label>
                </div>
                <div class="input-field">
                    <input
                            type="submit" value="Submit" class="btn pink white-text" @click="addSlot"
                    />
                </div>
            </div>
        </form>

        <h5>Time Slot List</h5>
        <!-- fetch the slot list here -->
        <table class="centered">
            <thead>
            <tr>
                <th>Task Name</th>
                <th>From</th>
                <th>Untill</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td>Do Something</td>
                <td>10 AM</td>
                <td>12 PM</td>
            </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    import AppFloatButton from '../common/floatButton';

    export default {
        data: function () {
            return {
                showAdd: false
            }
        },
        components: {
            appFloatButton: AppFloatButton
        },
        methods: {
            addSlot: function () {

            },
            addButtonClicked: function() {
                this.showAdd = !this.showAdd;
            }
        }
    }
</script>