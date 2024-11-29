import { Component } from '@angular/core';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-radius-pie',
  templateUrl: './radius-pie.component.html',
  styleUrl: './radius-pie.component.css'
})
export class RadiusPieComponent {
  Highcharts: typeof Highcharts = Highcharts; // Reference to Highcharts
  chartOptions: Highcharts.Options = {}; // Chart configuration options

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
  chart: {
      type: 'variablepie'
  },
  title: {
      text: 'Countries compared by population density and total area, 2024.',
      align: 'left'
  },
  tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> ' +
          '{point.name}</b><br/>' +
          'Area (square km): <b>{point.y}</b><br/>' +
          'Population density (people per square km): <b>{point.z}</b><br/>'
  },
  series: [{
    type:'pie',
      // minPointSize: 10,
      innerSize: '20%',
      // zMin: 0,
      name: 'countries',
      borderRadius: 5,
      data: [{
          name: 'Spain',
          y: 505992,
          z: 95
      }, {
          name: 'France',
          y: 551695,
          z: 118
      }, {
          name: 'Poland',
          y: 312679,
          z: 131
      }, {
          name: 'Czech Republic',
          y: 78865,
          z: 136
      }, {
          name: 'Italy',
          y: 301336,
          z: 198
      }, {
          name: 'Switzerland',
          y: 41284,
          z: 224
      }, {
          name: 'Germany',
          y: 357114,
          z: 238
      }],
      colors: [
          '#4caefe',
          '#3dc3e8',
          '#2dd9db',
          '#1feeaf',
          '#0ff3a0',
          '#00e887',
          '#23e274'
      ]
  }]
};
  }
}
