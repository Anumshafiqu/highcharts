import { Component } from '@angular/core';
import Highcharts from 'highcharts';
import Boost from 'highcharts/modules/boost';
import Accessibility from 'highcharts/modules/accessibility';
// Load the required Highcharts modules
Boost(Highcharts);
Accessibility(Highcharts);
@Component({
  selector: 'app-scatter-plot',
  templateUrl: './scatter-plot.component.html',
  styleUrl: './scatter-plot.component.css'
})
export class ScatterPlotComponent {
  data: [number, number][] = []; // Class property
  n: number = 1000000; // Class property

  constructor() {
      // Generate data points
      for (let i = 0; i < this.n; i++) {
          const theta = Math.random() * 2 * Math.PI;
          const radius = Math.pow(Math.random(), 2) * 100;
          const waveDeviation = (Math.random() - 0.5) * 70;
          const waveValue = Math.tan(theta) * waveDeviation;

          this.data.push([
              50 + (radius + waveValue) * Math.cos(theta),
              50 + (radius + waveValue) * Math.sin(theta)
          ]);
      }
  }

  ngOnInit(): void {
      // Initialize Highcharts chart
      Highcharts.chart('container', {
          chart: {
              zooming: {
                  type: 'xy'
              },
              height: '100%'
          },
          boost: {
              useGPUTranslations: true,    // Enable GPU rendering for large datasets
              usePreallocated: true        // Use pre-allocated memory
          },
          accessibility: {
              screenReaderSection: {
                  beforeChartFormat: 
                      `<{headingTagName}>{chartTitle}</{headingTagName}>
                       <div>{chartLongdesc}</div>
                       <div>{xAxisDescription}</div>
                       <div>{yAxisDescription}</div>`
              }
          },
          xAxis: {
              min: 0,
              max: 100,
              gridLineWidth: 1
          },
          yAxis: {
              min: 0,
              max: 100,
              minPadding: 0,
              maxPadding: 0,
              title: {
                  text: null
              }
          },
          title: {
              text: 'Scatter chart with 1 million points',
              align: 'left'
          },
          legend: {
              enabled: false
          },
          series: [{
              type: 'scatter',
              color: 'rgba(152,0,67,0.1)', // Semi-transparent color for dots
              data: this.data, // Bind the class data to the chart
              marker: {
                  radius: 0.5, // Small marker radius for better performance
                  states: {
                      hover: {
                          radiusPlus: 2 // Make the marker bigger on hover
                      }
                  }
              },
              tooltip: {
                  followPointer: false,
                  pointFormat: '[{point.x:.1f}, {point.y:.1f}]' // Display formatted coordinates
              }
          }]
      });
  }
}


