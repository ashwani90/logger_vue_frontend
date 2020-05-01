<template>
    <div class="container">

        <h5 class="black-text"> Time distribution of a day in form of pie chart </h5>

        <div id="chartContainer" class="small" style="height: 300px; width: 100%;">

            <canvas id="time-chart"></canvas>
        </div>



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
    import {getChartData} from "../charts/timeSlotsData";
    import Chart from 'chart.js';
    import {fetchTimeTable} from "../../services/apis/timeTables";
    import {convertTimeSlots} from "../../library/Timer/timer";

    export default {
        data: function () {
            return {
                showAdd: false,
            }
        },
        mounted() {

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
            fetchTimeTable().then((res, err) => {
               if (err) {
                   console.log(err);
               }
               //console.log(res.data.data[0].timeSlots);
                let widthArray = convertTimeSlots(res.data.data[0].timeSlots);
                let chartData = getChartData(widthArray);
                this.createChart('time-chart', chartData);

            });
            this.$store.dispatch('fetchTimeTable');
        }
    }
</script>