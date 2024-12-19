import { Component } from '@angular/core';
import Highcharts from 'highcharts';



@Component({
  selector: 'app-dependencewheel',
  templateUrl: './dependencewheel.component.html',
  styleUrl: './dependencewheel.component.css'
})
export class DependencewheelComponent {
  Highcharts: typeof Highcharts = Highcharts; // Assign Highcharts for the template
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'boxplot'
    },

    title: {
      text: 'Highcharts Box Plot Example'
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: ['1', '2', '3', '4', '5'],
      title: {
        text: 'Experiment No.'
      }
    },

    yAxis: {
      title: {
        text: 'Observations'
      },
      plotLines: [{
        value: 932,
        color: 'red',
        width: 1,
        label: {
          text: 'Theoretical mean: 932',
          align: 'center',
          style: {
            color: 'gray'
          }
        }
      }]
    },

    series: [
      {
        name: 'Observations',
        type: 'boxplot', // Specify the type of series as 'boxplot'
        data: [
          [760, 801, 848, 895, 965],
          [733, 853, 939, 980, 1080],
          [714, 762, 817, 870, 918],
          [724, 802, 806, 871, 950],
          [834, 836, 864, 882, 910]
        ],
        tooltip: {
          headerFormat: '<em>Experiment No {point.key}</em><br/>'
        }
      },
      {
        name: 'Outliers',
        type: 'scatter', // Specify the type of series as 'scatter'
        // color: Highcharts.getOptions().colors[0],
        data: [ // x, y positions where 0 is the first category
          [0, 644],
          [4, 718],
          [4, 951],
          [4, 969]
        ],
        marker: {
          fillColor: 'white',
          lineWidth: 1,
          // lineColor: Highcharts.getOptions().colors[0]
        },
        tooltip: {
          pointFormat: 'Observation: {point.y}'
        }
      }
    ]
  }
}
  



