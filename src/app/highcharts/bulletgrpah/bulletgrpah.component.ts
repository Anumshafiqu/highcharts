import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_heatmap from 'highcharts/modules/heatmap';

@Component({
  selector: 'app-bulletgrpah',
  templateUrl: './bulletgrpah.component.html',
  styleUrl: './bulletgrpah.component.css',
})
export class BulletgrpahComponent {
  chartOptions: Highcharts.Options = {}; // Chart configuration options

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'bullet'  // Correct chart type for bullet graph
      },
      title: {
        text: 'Bullet Chart Example'
      },
      series: [{
        type: 'bullet', // Required type property for the series
        name: 'Bullet Series',
        data: [{
          y: 8,
          target: 7
        }]
      }]
    };
    
    // Initialize Highcharts with chartOptions
    Highcharts.chart('container', this.chartOptions);
  }

}
