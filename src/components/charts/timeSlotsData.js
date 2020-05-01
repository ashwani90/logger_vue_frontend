
import {generateRandomColor} from "../../library/design/color";

export const getChartData = (widthArray) => {
    let labels = [];
    let data = [];
    let colors = [];
    for (let i = 0; i<widthArray.length; i++) {
        if (widthArray[i].work) {
            data.push((widthArray[i].width/60).toFixed(2));
            labels.push(widthArray[i].work);
            colors.push(generateRandomColor());
        } else {
            data.push((widthArray[i].width/60).toFixed(2));
            labels.push("No work");
            colors.push('rgba(0,0,0, 0.8)')
        }
    }

    return {
        type: 'pie',
        data: {
            datasets: [{
                data: data,
                backgroundColor: colors
            }],
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: labels
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
    }
};

// export const timeSlotsData = {
//     type: 'pie',
//     data: {
//         datasets: [{
//             data: [100/60, 200/60, 300/60, 40/60, 500/60,250/60,50/60],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.8)',
//                 'rgba(54, 162, 235, 0.8)',
//                 'rgba(255, 206, 86, 0.8)',
//                 'rgba(75, 192, 192, 0.8)',
//                 'rgba(153, 102, 255, 0.8)',
//                 'rgba(255, 159, 64, 0.8)'
//             ],
//         }],
//         // These labels appear in the legend and in the tooltips when hovering different arcs
//         labels: [
//             'A1',
//             'A2',
//             'A3',
//             'A4',
//             'A5',
//             'A6',
//             'A7',
//         ]
//     },
//     options: {
//         responsive: true,
//         lineTension: 1,
//         // scales: {
//         //     yAxes: [{
//         //         ticks: {
//         //             beginAtZero: true,
//         //             padding: 25,
//         //         }
//         //     }]
//         // }
//     }
// };