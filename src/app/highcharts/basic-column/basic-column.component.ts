import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-basic-column',
  templateUrl: './basic-column.component.html',
  styleUrl: './basic-column.component.css'
})
export class BasicColumnComponent {
  Highcharts: typeof Highcharts = Highcharts; // Reference to Highcharts
  chartOptions: Highcharts.Options = {}; // Chart configuration options

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Corn vs wheat estimated production for 2023',
        align: 'left',
      },
      subtitle: {
        text: 'Source: <a target="_blank" href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
        align: 'left',
      },
      xAxis: {
        categories: ['USA', 'China', 'Brazil', 'EU', 'Argentina', 'India'],
        crosshair: true,
        accessibility: {
          description: 'Countries',
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: '1000 metric tons (MT)',
        },
      },
      tooltip: {
        valueSuffix: ' (1000 MT)',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'Corn',
          type: 'column', // Specify the series type
          data: [387749, 280000, 129000, 64300, 54000, 34300],
        },
        {
          name: 'Wheat',
          type: 'column', // Specify the series type
          data: [45321, 140000, 10000, 140500, 19500, 113500],
        },
      ],
    };
  }
}
