import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-accessiblecharts',
  templateUrl: './accessiblecharts.component.html',
  styleUrl: './accessiblecharts.component.css'
})
export class AccessiblechartsComponent {


Highcharts: typeof Highcharts = Highcharts; // Reference to Highcharts
chartOptions: Highcharts.Options = {}; // Chart configuration options

constructor() {}

ngOnInit(): void {
  this.chartOptions = {
  chart: {
      type: 'lowmedhigh'
  },
  title: {
      text: 'Monthly earnings, by level of education in Norway',
      align: 'left'
  },
  subtitle: {
      text: 'Source: ' +
          '<a href="https://www.ssb.no/en/statbank/table/11420/" target="_blank">SSB</a>',
      align: 'left'
  },
  accessibility: {
      point: {
          descriptionFormat: '{#unless isNull}{category}, low {low}, ' +
              'median {median}, high {high}{/unless}'
      },
      series: {
          descriptionFormat: '{series.name}, series {seriesNumber} of ' +
              '{chart.series.length} with {series.points.length} data points.'
      },
      typeDescription: 'Low, median, high. Each data point has a low, ' +
          'median and high value, depicted vertically as small ticks.' //
          // Describe the chart type to screen reader users, since this is
          // not a traditional boxplot chart
  },
  xAxis: [{
      accessibility: {
          description: 'Year'
      },
      crosshair: true,
      categories: ['2017', '2018', '2019', '2020', '2021', '2022', '2023']
  }],
  yAxis: {
      title: {
          text: 'Monthly earnings (NOK)'
      },
      min: 0
  },
  tooltip: {
      shared: true,
      stickOnContact: true
  },
  plotOptions: {
      series: {
          stickyTracking: true,
          // whiskerWidth: 5
      }
  },
  series: [{
    type:'line',
      name: 'Scientific research and development',
      data: [
          [48230, 57210, 71900],
          [49360, 58450, 73490],
          [50610, 60240, 75770],
          [51150, 60600, 75950],
          [53060, 63080, 79130],
          [55480, 66210, 82020],
          [58740, 69870, 86360]
      ]
  }, {
    type:'line',
      name: 'Hospital activities',
      data: [
          [50830, 66240, 87490],
          [52490, 67620, 89250],
          [53690, 69430, 91790],
          [53720, 69210, 92380],
          [56510, 72640, 97000],
          [58840, 75490, 100400],
          [62280, 79790, 107100]
      ]
  }, {
    type:'line',
      name: 'Fire service activities',
      data: [
          [46760, 52350, 61050],
          [47920, 53860, 62090],
          [47900, 51830, 64170],
          [48820, 53330, 64500],
          [50980, 56090, 67870],
          [52870, 58330, 72250],
          [56670, 61110, 79620]
      ]
  }]

};

}

}