<template>
    <div class="container">

        <div id="chartContainer" class="small" style="height: 300px; width: 100%;">

            <canvas id="time-chart"></canvas>
        </div>

        <h5 class="black-text"> Page will serve to create time slots in a day for recurring tasks </h5>

        <app-float-button v-on:buttonClicked="addButtonClicked"></app-float-button>

        <!--<form v-if="showAdd">-->
            <!--<div class="row">-->
                <!--<div class="col s12 m6 l4">-->
                    <!--<input id="from_timepicker" type="text" class="timepicker" v-model="fromTime">-->
                    <!--<label for="from_timepicker">From</label>-->
                <!--</div>-->

                <!--<div class="col s12 m6 l4">-->
                    <!--<input id="to_timepicker" type="text" class="timepicker" v-model="toTime">-->
                    <!--<label for="to_timepicker">Untill</label>-->
                <!--</div>-->
                <!--<div class="input-field">-->
                    <!--<input-->
                            <!--type="submit" value="Submit" class="btn pink white-text" @click="addSlot"-->
                    <!--/>-->
                <!--</div>-->
            <!--</div>-->
        <!--</form>-->

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
        mounted() {
            this.createChart('time-chart', this.planetChartData);
        },
        components: {
            appFloatButton: AppFloatButton
        },
        methods: {
            addSlot: function () {

            },
            addButtonClicked: function() {
                this.showAdd = !this.showAdd;
            },
            createChart(chartId, chartData) {
                const ctx = document.getElementById(chartId);
                new Chart(ctx, {
                    type: chartData.type,
                    data: chartData.data,
                    options: chartData.options,
                });
            }
        },
        created() {

        }
    }
</script>