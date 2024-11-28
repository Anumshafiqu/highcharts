import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-drilldown',
  templateUrl: './drilldown.component.html',
  styleUrl: './drilldown.component.css'
})
export class DrilldownComponent {


  Highcharts: typeof Highcharts = Highcharts; // Reference to Highcharts
  chartOptions: Highcharts.Options = {}; // Chart configuration options

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {

  chart: {
      type: 'column'
  },

  title: {
      text: 'Olympic Games all-time medal table, grouped by continent',
      align: 'left'
  },

  xAxis: {
      categories: ['Gold', 'Silver', 'Bronze']
  },

  yAxis: {
      allowDecimals: false,
      min: 0,
      title: {
          text: 'Count medals'
      }
  },

  tooltip: {
      format: '<b>{key}</b><br/>{series.name}: {y}<br/>' +
          'Total: {point.stackTotal}'
  },

  plotOptions: {
      column: {
          stacking: 'normal'
      }
  },

  series: [{
    type:'column',
      name: 'Norway',
      data: [148, 133, 124],
      stack: 'Europe'
  }, {
    type:'column',
      name: 'Germany',
      data: [102, 98, 65],
      stack: 'Europe'
  }, {
    type:'column',
      name: 'United States',
      data: [113, 122, 95],
      stack: 'North America'
  }, {
    type:'column',
      name: 'Canada',
      data: [77, 72, 80],
      stack: 'North America'
  }]
};
  }
  
}
