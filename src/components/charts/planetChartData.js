

export const planetChartData = {
    type: 'pie',
    data: {
        datasets: [{
            data: [1, 2, 3, 4, 5,6,7],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)'
            ],
        }],
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'A1',
            'A2',
            'A3',
            'A4',
            'A5',
            'A6',
            'A7',
        ]
    },
    options: {
        responsive: true,
        lineTension: 1,
        // scales: {
        //     yAxes: [{
        //         ticks: {
        //             beginAtZero: true,
        //             padding: 25,
        //         }
        //     }]
        // }
    }
};

export default planetChartData;