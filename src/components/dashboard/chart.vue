<template>
    <div id="chartContainer" class="small" style="height: 300px; width: 100%;">

         <canvas id="planet-chart"></canvas>
    </div>
</template>

<script>
    import Chart from 'chart.js';
    import planetChartData from '../charts/planetChartData.js';

    export default {
        methods: {
            createChart(chartId, chartData) {
                const ctx = document.getElementById(chartId);
                 new Chart(ctx, {
                    type: chartData.type,
                    data: chartData.data,
                    options: chartData.options,
                });
            }
        },
        data() {
            return {
                planetChartData: planetChartData
            }
        },
        mounted() {
            this.createChart('planet-chart', this.planetChartData);
        }
    }

</script>
<style>
    .small {
        max-width: 600px;
        max-height: 400px;
        margin:  150px auto;
    }
</style>