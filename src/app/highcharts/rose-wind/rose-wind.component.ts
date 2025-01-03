import { Component } from '@angular/core';
import Highcharts from 'highcharts';
import Data from 'highcharts/modules/data';

Data(Highcharts);
@Component({
  selector: 'app-rose-wind',
  templateUrl: './rose-wind.component.html',
  styleUrl: './rose-wind.component.css'
})
export class RoseWindComponent {
  Highcharts: typeof Highcharts = Highcharts; // Assign Highcharts for the template
  chartOptions: Highcharts.Options = {
    chart: {
        zooming: {
            type: 'xy'
        }
    },
    title: {
        text: 'Temperature vs Rainfall'
    },
    xAxis: [
        {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ]
        }
    ],
    yAxis: [
        {
            // Primary yAxis
            labels: {
                format: '{value} °C',
                style: {
                    color: '#DF8500'
                }
            },
            title: {
                text: 'Temperature',
                style: {
                    color: '#DF8500'
                }
            }
        },
        {
            // Secondary yAxis
            title: {
                text: 'Rainfall',
                style: {
                    color: '#6b8abc'
                }
            },
            labels: {
                format: '{value} mm',
                style: {
                    color: '#6b8abc'
                }
            },
            opposite: true
        }
    ],

    tooltip: {
        shared: true
    },

    series: [
        {
            name: 'Rainfall',
            type: 'column',
            color: '#6b8abc',
            yAxis: 1,
            data: [
                49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4,
                194.1, 95.6, 54.4
            ],
            tooltip: {
                pointFormat:
                    '<span style="font-weight: bold; color: {series.color}">' +
                    '{series.name}</span>: <b>{point.y:.1f} mm</b> '
            }
        },
        {
            name: 'Rainfall error',
            type: 'errorbar',
            yAxis: 1,
            data: [
                [48, 51],
                [68, 73],
                [92, 110],
                [128, 136],
                [140, 150],
                [171, 179],
                [135, 143],
                [142, 149],
                [204, 220],
                [189, 199],
                [95, 110],
                [52, 56]
            ],
            tooltip: {
                pointFormat: '(error range: {point.low}-{point.high} mm)<br/>'
            }
        },
        {
            name: 'Temperature',
            type: 'spline',
            color: '#DF8500',
            lineWidth: 2,
            zones: [
                {
                    value: 0,
                    color: '#00ffff'
                },
                {
                    value: 10,
                    color: '#90EE90'
                },
                {
                    value: 15,
                    color: '#FFD700'
                },
                {
                    value: 20,
                    color: '#FFA500'
                },
                {
                    value: 25,
                    color: '#FF8C00'
                },
                {
                    value: 30,
                    color: '#FF5733'
                }
            ],

            data: [
                7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9,
                9.6
            ],
            tooltip: {
                pointFormat:
                    '<span style="font-weight: bold; color: {series.color}">' +
                    '{series.name}</span>: <b>{point.y:.1f}°C</b> '
            }
        },
        {
            name: 'Temperature error',
            type: 'errorbar',
            data: [
                [6, 8],
                [5.9, 7.6],
                [9.4, 10.4],
                [14.1, 15.9],
                [18.0, 20.1],
                [21.0, 24.0],
                [23.2, 25.3],
                [26.1, 27.8],
                [23.2, 23.9],
                [18.0, 21.1],
                [12.9, 14.0],
                [7.6, 10.0]
            ],
            tooltip: {
                pointFormat: '(error range: {point.low}-{point.high}°C)<br/>'
            }
        }
    ]
};

}

