import { Component } from '@angular/core';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrl: './comparison.component.css'
})
export class ComparisonComponent {


 
    Highcharts: typeof Highcharts = Highcharts; // Reference to Highcharts
    chartOptions: Highcharts.Options = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Major trophies for some English teams',
        align: 'left'
      },
      xAxis: {
        categories: ['Arsenal', 'Chelsea', 'Liverpool', 'Manchester United']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Count trophies'
        },
        stackLabels: {
          enabled: true
        }
      },
      legend: {
        align: 'left',
        x: 70,
        verticalAlign: 'top',
        y: 70,
        floating: true,
        backgroundColor:
          Highcharts.defaultOptions?.legend?.backgroundColor ?? 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
      },
      tooltip: {
        headerFormat: '<b>{category}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true
          }
        }
      },
      series: [
        {
          type:'column',
          name: 'BPL',
          data: [3, 5, 1, 13]
        },
        {
          type:'column',
          name: 'FA Cup',
          data: [14, 8, 8, 12]
        },
        {
          type:'column',
          name: 'CL',
          data: [0, 2, 6, 3]
        }
      ]
    };
  }
  


