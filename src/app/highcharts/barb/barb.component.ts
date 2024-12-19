import { Component } from '@angular/core';
import Highcharts from 'highcharts';
import Windbarb from 'highcharts/modules/windbarb';

Windbarb(Highcharts); // Load the Windbarb module
@Component({
  selector: 'app-barb',
  templateUrl: './barb.component.html',
  styleUrl: './barb.component.css'
})
export class BarbComponent {
  data: [number, number][] = [
    [2.3, 147],
    [2.0, 120],
    [1.6, 90],
    // ...rest of your data
];

ngOnInit() {
    Highcharts.chart('container', {
        title: {
            text: 'Observed wind in Vik, 10. July 2024'
        },
        subtitle: {
            text: 'Source: ' +
                '<a href="https://seklima.met.no/"' +
                'target="_blank">seklima</a>'
        },
        xAxis: {
            type: 'datetime',
            offset: 40
        },
        yAxis: {
            title: {
                text: 'Wind speed (m/s)'
            }
        },
        plotOptions: {
            series: {
                pointStart: Date.UTC(2024, 6, 11), // Use Date.UTC for date formatting
                pointInterval: 36e5
            }
        },
        series: [{
            type: 'windbarb',
            data: this.data, // Use 'this.data' as it is an instance member
            name: 'Wind',
            // color: Highcharts.getOptions().colors[1] as string, // Cast to string if necessary
            showInLegend: false,
            tooltip: {
                valueSuffix: ' m/s'
            }
        }, {
            type: 'area',
            keys: ['y'],
            data: this.data,
            // color: Highcharts.getOptions().colors[0] as string, // Cast to string if necessary
            fillColor: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, '#00ff00'], // Use string color codes
                    [1, '#00cc00']
                ]
            },
            name: 'Wind speed',
            tooltip: {
                valueSuffix: ' m/s'
            },
            states: {
                inactive: {
                    opacity: 1
                }
            }
        }]
    });
}
}
