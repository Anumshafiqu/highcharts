import { Component } from '@angular/core';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-fixed-placement',
  templateUrl: './fixed-placement.component.html',
  styleUrl: './fixed-placement.component.css'
})
export class FixedPlacementComponent {

  Highcharts: typeof Highcharts = Highcharts; // Reference to Highcharts
  chartOptions: Highcharts.Options = {}; // Chart configuration options

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'column' as const
      },
      title: {
          text: 'Efficiency Optimization by Branch'
      },
      xAxis: {
          categories: ['Seattle HQ', 'San Francisco', 'Tokyo']
      },
      yAxis: [
          {
              min: 0,
              title: {
                  text: 'Employees'
              }
          },
          {
              title: {
                  text: 'Profit (millions)'
              },
              opposite: true
          }
      ],
      legend: {
          shadow: false
      },
      tooltip: {
          shared: true
      },
      plotOptions: {
          column: {
              grouping: false,
              shadow: false,
              borderWidth: 0
          }
      },
      series: [
          {
              name: 'Employees',
              type: 'column',
              color: 'rgba(165,170,217,1)',
              data: [150, 73, 20],
              pointPadding: 0.3,
              pointPlacement: -0.2
          },
          {
              name: 'Employees Optimized',
              type: 'column',
              color: 'rgba(126,86,134,.9)',
              data: [140, 90, 40],
              pointPadding: 0.4,
              pointPlacement: -0.2
          },
          {
              name: 'Profit',
              type: 'column',
              color: 'rgba(248,161,63,1)',
              data: [183.6, 178.8, 198.5],
              tooltip: {
                  valuePrefix: '$',
                  valueSuffix: ' M'
              },
              pointPadding: 0.3,
              pointPlacement: 0.2,
              yAxis: 1
          },
          {
              name: 'Profit Optimized',
              type: 'column',
              color: 'rgba(186,60,61,.9)',
              data: [203.6, 198.8, 208.5],
              tooltip: {
                  valuePrefix: '$',
                  valueSuffix: ' M'
              },
              pointPadding: 0.4,
              pointPlacement: 0.2,
              yAxis: 1
          }
      ]
  };
  
}
  
}
