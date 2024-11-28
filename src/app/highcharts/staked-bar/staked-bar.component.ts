import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-staked-bar',
  templateUrl: './staked-bar.component.html',
  styleUrl: './staked-bar.component.css'
})
export class StakedBarComponent {
// Data retrieved from: https://ferjedatabanken.no/statistikk
Highcharts: typeof Highcharts = Highcharts; // Reference to Highcharts
chartOptions: Highcharts.Options = {}; // Chart configuration options

constructor() {}

ngOnInit(): void {
  this.chartOptions = {
  chart: {
      type: 'bar'
  },
  title: {
      text: 'Ferry passengers by vehicle type 2024',
      align: 'left'
  },
  xAxis: {
      categories: [
          'January', 'February', 'March', 'April', 'May'
      ]
  },
  yAxis: {
      min: 0,
      title: {
          text: ''
      }
  },
  legend: {
      reversed: true
  },
  plotOptions: {
      series: {
          stacking: 'normal',
          dataLabels: {
              enabled: true
          }
      }
  },
  series: [{
    type:'column',
      name: 'Motorcycles',
      data: [74, 27, 52, 93, 1272]
  }, {
    type:'column',
      name: 'Null-emission vehicles',
      data: [2106, 2398, 3046, 3195, 4916]
  }, {
    type:'column',
      name: 'Conventional vehicles',
      data: [12213, 12721, 15242, 16518, 25037]
  }]
};
}
}
