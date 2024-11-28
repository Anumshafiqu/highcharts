import { Component } from '@angular/core';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrl: './column.component.css'
})
export class ColumnComponent {
  Highcharts: typeof Highcharts = Highcharts; // Reference to Highcharts
  chartOptions: Highcharts.Options = {}; // Chart configuration options

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
    chart: {
        type: 'column' as const // Specify the type as a literal
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        column: {
            borderRadius: '25%' // Styling option for columns
        }
    },
    series: [
        {
          type:'column',
            name: 'John',
            data: [5, 3, 4, 7, 2]
        },
        {
          type:'column',
            name: 'Jane',
            data: [2, -2, -3, 2, 1]
        },
        {
          type:'column',
            name: 'Joe',
            data: [3, 4, 4, -2, 5]
        }
    ]
};
}
}
