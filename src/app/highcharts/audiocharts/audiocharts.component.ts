import { Component } from '@angular/core';
import Highcharts from 'highcharts';
import Sonification from 'highcharts/modules/sonification';

// Initialize the Sonification module
Sonification(Highcharts);

@Component({
  selector: 'app-audiocharts',
  templateUrl: './audiocharts.component.html',
  styleUrl: './audiocharts.component.css'
})
export class AudiochartsComponent {

  Highcharts: typeof Highcharts = Highcharts; // Reference to Highcharts
  chartOptions: Highcharts.Options = {}; // Chart configuration options

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      title: {
        text: 'Helsinki Average Monthly Temperature',
        align: 'left',
        margin: 25
      },
      sonification: {
        duration: 8000,
        defaultInstrumentOptions: {
          mapping: {
            pitch: {
              min: 'c3',
              max: 'd6'
            }
          }
        },
        globalContextTracks: [
          {
            instrument: 'piano',
            valueInterval: 1 / 3,
            mapping: {
              pitch: {
                mapTo: 'y',
                value: 0
              },
              volume: 0.1
            }
          },
          {
            instrument: 'shaker',
            activeWhen: {
              // valueProp: 'x',
              min: 4,
              max: 9
            },
            timeInterval: 100,
            mapping: {
              volume: 0.1
            }
          },
          {
            type: 'speech',
            valueInterval: 1,
            activeWhen: {
              crossingUp: 4
            },
            mapping: {
              text: 'Summer',
              rate: 2.5,
              volume: 0.3
            }
          }
        ]
      },
      yAxis: {
        plotLines: [
          {
            value: 0,
            color: '#59D',
            dashStyle: 'ShortDash', // Correct style
            width: 2
          }
        ],
        // title: {
        //   enabled: false
        // },
        labels: {
          format: '{text}°C'
        },
        gridLineWidth: 0
      },
      xAxis: {
        plotBands: [
          {
            from: 3.5,
            to: 8.5,
            color: '#EEFFF4',
            label: {
              text: 'Summer',
              align: 'left',
              x: 10
            }
          }
        ],
        plotLines: [
          { value: 3.5, color: '#4EA291', width: 3 },
          { value: 8.5, color: '#4EA291', width: 3 }
        ],
        crosshair: true,
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June',
          'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
        ]
      },
      legend: { enabled: false },
      tooltip: { valueSuffix: '°C' },
      series: [
        {
          name: 'Helsinki',
          data: [-5, -6, -2, 4, 10, 14, 17, 15, 10, 6, 0, -4],
          type: 'line', // Specify the chart type
          color: '#2F2D2E'
        }
      ]
    };
  }
}

