import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-arearange',
  templateUrl: './arearange.component.html',
  styleUrl: './arearange.component.css'
})
export class ArearangeComponent{
constructor(){

    document.addEventListener('DOMContentLoaded', () => {
        const chartOptions: Highcharts.Options = {
            data: {
                csvURL: 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@b99fc27c/samples/data/temp-florida-bergen-2023.csv',
                beforeParse: function (csv) {
                    return csv.replace(/\n\n/g, '\n');
                }
            },
            chart: {
                type: 'arearange',
                panning: {
                    enabled: true,
                    type: 'xy' // Use 'xy' to enable panning in both horizontal and vertical directions
                },
                scrollablePlotArea: {
                    minWidth: 600,
                    scrollPositionX: 1
                }
            },
            title: {
                text: 'Temperature variation by day',
                align: 'left'
            },
            subtitle: {
                text: 'Source: ' +
                    '<a href="https://veret.gfi.uib.no/" target="_blank">Universitetet i Bergen</a>',
                align: 'left'
            },
            xAxis: {
                type: 'datetime',
                accessibility: {
                    rangeDescription: 'Range: Jan 1st 2023 to Jan 1st 2024.'
                }
            },
            yAxis: {
                title: {
                    text: null
                }
            },
            tooltip: {
                // crosshairs: true,
                shared: true,
                valueSuffix: '°C',
                xDateFormat: '%A, %b %e'
            },
            legend: {
                enabled: false
            },
            series: [{
                type:'area',
                name: 'Temperatures',
                color: {
                    linearGradient: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#ff0000'],
                        [1, '#0000ff']
                    ]
                }
            }]
        };
    
        // Initialize the Highcharts chart with the options
        Highcharts.chart('container', chartOptions);
    });
    
    
      
}
}
