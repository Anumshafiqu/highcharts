import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import Heatmap from 'highcharts/modules/heatmap';

// Import the required module
Heatmap(Highcharts);

@Component({
  selector: 'app-interpolationmap',
  templateUrl: './interpolationmap.component.html',
  styleUrl: './interpolationmap.component.css'
})
export class InterpolationmapComponent {
    Highcharts = Highcharts; // Assign Highcharts to be used in the template
   chartOptions: Highcharts.Options = {
    chart: {
      height: '100%',
      type: 'heatmap',
      plotBackgroundImage: 'https://www.highcharts.com/samples/graphics/example-screenshot.png'
    },
    title: {
      text: 'Interpolated heatmap image displaying user activity on a website'
    },
    yAxis: {
      title: {
        text: undefined // Explicitly use `undefined` for no title
      },
      endOnTick: false,
      visible: false,
      minPadding: 0,
      maxPadding: 0
    },
    xAxis: {
      visible: false,
      margin: 0,
      minPadding: 0,
      maxPadding: 0
    },
    tooltip: {
      pointFormat: '{point.value:.0f} interactions in this region'
    },
    legend: {
      title: {
        text: 'User interactions per region'
      }
    },
    colorAxis: {
      stops: [
        [0, 'rgba(61, 0, 255, 0.2)'],
        [0.3, 'rgba(0, 255, 188, 0.3)'],
        [0.6, 'rgba(194, 255, 0, 0.6)'],
        [0.9, 'rgba(255, 0, 67, 0.9)']
      ]
    },
    series: [{
      type: 'heatmap',
      name: 'User activity',
      // data: JSON.parse(document.getElementById('data')?.innerText || '[]') as Highcharts.HeatmapPointOptionsObject[],
      interpolation: true
    }],
    responsive: {
      rules: [{
        condition: {
          minWidth: 600
        },
        chartOptions: {
          chart: {
            height: 550
          }
        }
      }]
    }
  };
  
  // Render the chart
  // Highcharts.chart('container', chartOptions);
}
