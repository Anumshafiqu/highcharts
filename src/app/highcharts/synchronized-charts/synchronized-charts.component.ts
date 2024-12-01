import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-synchronized-charts',
  templateUrl: './synchronized-charts.component.html',
  styleUrl: './synchronized-charts.component.css'
})
export class SynchronizedChartsComponent {
  Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {}; // Initialize with an empty object

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      title: {
        text: 'Synchronized Charts Example'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
      },
      series: [
        {
          type: 'line',
          name: 'Data Series 1',
          data: [1, 2, 3, 4, 5]
        }
      ],
      yAxis: {
        title: {
          text: 'Values'
        }
      }
    };
  }
}
