import { Component } from '@angular/core';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
declare module 'highcharts' {
  interface PointOptionsObject {
      country?: string; // Add custom property
  }
}


// Load additional modules
HighchartsMore(Highcharts);
@Component({
  selector: 'app-bubble-charts',
  templateUrl: './bubble-charts.component.html',
  styleUrl: './bubble-charts.component.css'
})
export class BubbleChartsComponent {
  Highcharts: typeof Highcharts = Highcharts; // Reference to Highcharts
  chartOptions: Highcharts.Options = {}; // Chart configuration options

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
    chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zooming: {
            type: 'xy',
        },
    },
    legend: {
        enabled: false,
    },
    title: {
        text: 'Sugar and fat intake per country',
    },
    subtitle: {
        text: 'Source: <a href="http://www.euromonitor.com/">Euromonitor</a> and <a href="https://data.oecd.org/">OECD</a>',
    },
    accessibility: {
        point: {
            valueDescriptionFormat:
                '{index}. {point.name}, fat: {point.x}g, sugar: {point.y}g, obesity: {point.z}%.',
        },
    },
    xAxis: {
        gridLineWidth: 1,
        title: {
            text: 'Daily fat intake',
        },
        labels: {
            format: '{value} gr',
        },
        plotLines: [
            {
                color: 'black',
                dashStyle: 'Dot', // Correct casing
                width: 2,
                value: 65,
                label: {
                    rotation: 0,
                    y: 15,
                    style: {
                        fontStyle: 'italic',
                    },
                    text: 'Safe fat intake 65g/day',
                },
                zIndex: 3,
            },
        ],
        accessibility: {
            rangeDescription: 'Range: 60 to 100 grams.',
        },
    },
    yAxis: {
        startOnTick: false,
        endOnTick: false,
        title: {
            text: 'Daily sugar intake',
        },
        labels: {
            format: '{value} gr',
        },
        maxPadding: 0.2,
        plotLines: [
            {
                color: 'black',
                dashStyle: 'Dot', // Correct casing
                width: 2,
                value: 50,
                label: {
                    align: 'right',
                    style: {
                        fontStyle: 'italic',
                    },
                    text: 'Safe sugar intake 50g/day',
                    x: -10,
                },
                zIndex: 3,
            },
        ],
        accessibility: {
            rangeDescription: 'Range: 0 to 160 grams.',
        },
    },
    tooltip: {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat:
            '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
            '<tr><th>Fat intake:</th><td>{point.x}g</td></tr>' +
            '<tr><th>Sugar intake:</th><td>{point.y}g</td></tr>' +
            '<tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>',
        footerFormat: '</table>',
        followPointer: true,
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}',
            },
        },
    },
    series: [
        {
            type: 'bubble', // Specify series type explicitly
            data: [
                { x: 95, y: 95, z: 13.8, name: 'BE', country: 'Belgium', color: '#7cb5ec' },
                { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: 'Germany', color: '#434348' },
                { x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: 'Finland', color: '#90ed7d' },
                { x: 80.4, y: 102.5, z: 12, name: 'NL', country: 'Netherlands', color: '#f7a35c' },
                { x: 80.3, y: 86.1, z: 11.8, name: 'SE', country: 'Sweden', color: '#8085e9' },
                { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: 'Spain', color: '#f15c80' },
                { x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: 'France', color: '#e4d354' },
                { x: 73.5, y: 83.1, z: 10, name: 'NO', country: 'Norway', color: '#2b908f' },
                { x: 71, y: 93.2, z: 24.7, name: 'UK', country: 'United Kingdom', color: '#f45b5b' },
                { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: 'Italy', color: '#91e8e1' },
                { x: 68.6, y: 20, z: 16, name: 'RU', country: 'Russia', color: '#1aadce' },
                { x: 65.5, y: 126.4, z: 35.3, name: 'US', country: 'United States', color: '#4572a7' },
                { x: 65.4, y: 50.8, z: 28.5, name: 'HU', country: 'Hungary', color: '#aa4643' },
                { x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: 'Portugal', color: '#89a54e' },
                { x: 64, y: 82.9, z: 31.3, name: 'NZ', country: 'New Zealand', color: '#80699b' },
            ],
        },
    ],
};
  }

}
