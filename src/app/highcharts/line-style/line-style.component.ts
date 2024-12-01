import { Component } from '@angular/core';
import Highcharts from 'highcharts';


@Component({
  selector: 'app-line-style',
  templateUrl: './line-style.component.html',
  styleUrl: './line-style.component.css'
})
export class LineStyleComponent {
    Highcharts: typeof Highcharts = Highcharts; // Reference to Highcharts
    chartOptions: Highcharts.Options = {}; // Chart configuration options
  
    constructor() {}
  
    ngOnInit(): void {
      this.chartOptions = {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Born persons, by girls\' name'
    },

    subtitle: {
        text: 'Resize the frame or click buttons to change appearance'
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical'
    },

    xAxis: {
        categories: ['2021', '2022', '2023'],
        labels: {
            x: -10
        }
    },

    yAxis: {
        allowDecimals: false,
        title: {
            text: 'Amount'
        }
    },

    series: [{
        type: 'column',
        name: 'Ava',
        data: [34, 39, 53]
    }, {
        type: 'column',
        name: 'Dina',
        data: [27, 21, 22]
    }, {
        type: 'column',
        name: 'Malin',
        data: [41, 34, 32]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'horizontal'
                },
                yAxis: {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -5
                    },
                    title: {
                        text: null
                    }
                },
                subtitle: {
                    text: undefined
                },
                credits: {
                    enabled: false
                }
            }
        }]
    }
};
    }
// document.getElementById('small').addEventListener('click', function () {
//     chart.setSize(400);
// });

// document.getElementById('large').addEventListener('click', function () {
//     chart.setSize(600);
// });

// document.getElementById('auto').addEventListener('click', function () {
//     chart.setSize(null);
// });
    
    
}
