import { Component } from '@angular/core';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-gradient',
  templateUrl: './pie-gradient.component.html',
  styleUrl: './pie-gradient.component.css'
})
export class PieGradientComponent {

  Highcharts: typeof Highcharts = Highcharts; // Reference to Highcharts
  chartOptions: Highcharts.Options = {}; // Chart configuration options

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
  chart: {
      // plotBackgroundColor: null,
      // plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: 'Registered private vehicles in Norway, by type of fuel, 2020',
      align: 'left'
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<span style="font-size: 1.2em"><b>{point.name}</b>' +
                  '</span><br>' +
                  '<span style="opacity: 0.6">{point.percentage:.1f} ' +
                  '%</span>',
              connectorColor: 'rgba(128,128,128,0.5)'
          }
      }
  },
  series: [{
    type:'pie',
      name: 'Share',
      data: [
          { name: 'Petrol', y: 938899 },
          { name: 'Diesel', y: 1229600 },
          { name: 'Electricity', y: 325251 },
          { name: 'Other', y: 238751 }
      ]
  }]
};
  }
}
