import { Component } from '@angular/core';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  Highcharts: typeof Highcharts = Highcharts; // Reference to Highcharts
  chartOptions: Highcharts.Options = {}; // Chart configuration options

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          zooming: {
              type: 'xy'
          }
      },
      title: {
          text: 'Average Monthly Weather Data for Tokyo',
          align: 'left'
      },
      subtitle: {
          text: 'Source: WorldClimate.com',
          align: 'left'
      },
      xAxis: [{
          categories: [
              'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
          ],
          crosshair: true
      }],
      yAxis: [{ // Primary yAxis
          labels: {
              format: '{value}°C',
              style: {
                  // color: Highcharts.getOptions().colors[2]
              }
          },
          title: {
              text: 'Temperature',
              style: {
                  // color: Highcharts.getOptions().colors[2]
              }
          },
          opposite: true
      }, { // Secondary yAxis
          gridLineWidth: 0,
          title: {
              text: 'Rainfall',
              style: {
                  // color: Highcharts.getOptions().colors[0]
              }
          },
          labels: {
              format: '{value} mm',
              style: {
                  // color: Highcharts.getOptions().colors[0]
              }
          }
      }, { // Tertiary yAxis
          gridLineWidth: 0,
          title: {
              text: 'Sea-Level Pressure',
              style: {
                  // color: Highcharts.getOptions().colors[1]
              }
          },
          labels: {
              format: '{value} mb',
              style: {
                  // color: Highcharts.getOptions().colors[1]
              }
          },
          opposite: true
      }],
      tooltip: {
          shared: true
      },
      legend: {
          layout: 'vertical',
          align: 'left',
          x: 80,
          verticalAlign: 'top',
          y: 55,
          floating: true,
          backgroundColor: Highcharts.defaultOptions?.legend?.backgroundColor || 'rgba(255,255,255,0.25)' // Optional chaining
      },
      series: [{
          name: 'Rainfall',
          type: 'column',
          yAxis: 1,
          data: [
              49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
              95.6, 54.4
          ],
          tooltip: {
              valueSuffix: ' mm'
          }
      }, {
          name: 'Sea-Level Pressure',
          type: 'spline',
          yAxis: 2,
          data: [
              1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1,
              1016.9, 1018.2, 1016.7
          ],
          marker: {
              enabled: false
          },
          // dashStyle: 'shortdot',
          tooltip: {
              valueSuffix: ' mb'
          }
      }, {
          name: 'Temperature',
          type: 'spline',
          data: [
              7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6
          ],
          tooltip: {
              valueSuffix: ' °C'
          }
      }],
      responsive: {
          rules: [{
              condition: {
                  maxWidth: 500
              },
              chartOptions: {
                  legend: {
                      floating: false,
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'bottom',
                      x: 0,
                      y: 0
                  },
                  yAxis: [{
                      labels: {
                          align: 'right',
                          x: 0,
                          y: -6
                      },
                      showLastLabel: false
                  }, {
                      labels: {
                          align: 'left',
                          x: 0,
                          y: -6
                      },
                      showLastLabel: false
                  }, {
                      visible: false
                  }]
              }
          }]
      }
  };
}



}
