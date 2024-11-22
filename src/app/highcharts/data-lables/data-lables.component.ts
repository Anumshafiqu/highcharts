import { Component } from '@angular/core';
// import * as Highcharts from 'highcharts';
declare var Highcharts: any;

@Component({
  selector: 'app-data-lables',
  templateUrl: './data-lables.component.html',
  styleUrl: './data-lables.component.css'
})
export class DataLablesComponent {

  ngOnInit(): void {
    Highcharts.chart('container', {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Monthly Average Temperature'
      },
      subtitle: {
        text: 'Source: ' +
          '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
          'target="_blank">Wikipedia.com</a>'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        title: {
          text: 'Temperature'
        },
        labels: {
          format: '{value}°'
        }
      },
      series: [{
        name: 'Tokyo',
        type: 'spline', // Specify the type
        data: [5.2, 5.7, 8.7, 13.9, 18.2, 21.4, 25.0, 26.4, 22.8, 17.5, 12.1, 7.6]
      }, {
        name: 'Bergen',
        type: 'spline', // Specify the type
        data: [1.5, 1.6, 3.3, 5.9, 10.5, 13.5, 14.5, 14.4, 11.5, 8.7, 4.7, 2.6]
      }]
    });
  }
}
