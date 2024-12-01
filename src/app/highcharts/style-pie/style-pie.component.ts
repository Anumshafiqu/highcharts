import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-style-pie',
  templateUrl: './style-pie.component.html',
  styleUrl: './style-pie.component.css'
})
export class StylePieComponent {
  Highcharts: typeof Highcharts = Highcharts; // Reference to Highcharts
  chartOptions: Highcharts.Options = {}; // Chart configuration options

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
  chart: {
      styledMode: true
  },
  title: {
      text: 'Mobile vendor market share, June 2024',
      align: 'left'
  },
  series: [{
      type: 'pie',
      allowPointSelect: true,
      keys: ['name', 'y', 'selected', 'sliced'],
      data: [
          ['Apple', 27.16, true, true],
          ['Samsung', 23.72, false],
          ['Xiaomi', 11.92, false],
          ['Unknown', 6.86, false],
          ['Oppo', 6.12, false],
          ['Vivo', 5.48, false],
          ['Realme', 3.89, false],
          ['Huawei', 3.49, false],
          ['Motorola', 2.38, false],
          ['Infinix', 1.59, false],
          ['Other', 7.39, false]
      ],
      showInLegend: true
  }]
};
  }
}
