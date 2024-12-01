import { Component } from '@angular/core';
import Highcharts from 'highcharts';


@Component({
  selector: 'app-line-style',
  templateUrl: './line-style.component.html',
  styleUrl: './line-style.component.css'
})
export class LineStyleComponent {
  // const colors = Highcharts.getOptions().colors;

  Highcharts: typeof Highcharts = Highcharts; // Reference to Highcharts
  chartOptions: Highcharts.Options = {}; // Chart configuration options

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'spline'
      },
  
      legend: {
          symbolWidth: 40
      },
  
      title: {
          text: 'Most common desktop screen readers',
          align: 'left'
      },
  
      subtitle: {
          text: 'Source: WebAIM. Click on points to visit official screen ' +
              'reader website',
          align: 'left'
      },
  
      yAxis: {
          title: {
              text: 'Percentage usage'
          },
          accessibility: {
              description: 'Percentage usage'
          }
      },
  
      xAxis: {
          title: {
              text: 'Time',
              style: {
                  fontSize: '14px' // Example customization
              }
          },
          accessibility: {
              description: 'Time from December 2010 to September 2019'
          },
          categories: [
              'December 2010', 'May 2012', 'January 2014', 'July 2015',
              'October 2017', 'September 2019'
          ]
      },
  
      tooltip: {
          valueSuffix: '%',
          stickOnContact: true
      },
  
      plotOptions: {
          series: {
              point: {
                  events: {
                      click: function () {
                          // window.location.href = (this.series.options as CustomSeriesOptions).website!;
                      }
                  }
              },
              cursor: 'pointer',
              lineWidth: 2
          }
      },

  
      responsive: {
          rules: [{
              condition: {
                  maxWidth: 550
              },
              chartOptions: {
                  chart: {
                      spacingLeft: 3,
                      spacingRight: 3
                  },
                  legend: {
                      itemWidth: 150
                  },
                  xAxis: {
                      categories: [
                          'Dec. 2010', 'May 2012', 'Jan. 2014', 'July 2015',
                          'Oct. 2017', 'Sep. 2019'
                      ],
                      title: {
                          text: '' // Ensure title conforms to `XAxisTitleOptions`
                      }
                  },
                  yAxis: {
                      visible: false
                  }
              }
          }]
      }
  };
}
}
