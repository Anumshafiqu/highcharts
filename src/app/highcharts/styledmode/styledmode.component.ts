import { Component } from '@angular/core';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-styledmode',
  templateUrl: './styledmode.component.html',
  styleUrl: './styledmode.component.css'
})
export class StyledmodeComponent {


  Highcharts: typeof Highcharts = Highcharts; // Reference to Highcharts
  chartOptions: Highcharts.Options = {}; // Chart configuration options

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'column',
        styledMode: true,
      },
      title: {
        text: 'Average weight and BMI in some countries, women',
        align: 'left'
      },
      subtitle: {
        text: 'Source: ' +
          '<a href="https://www.worlddata.info/average-bodyheight.php" target="_blank">WorldData</a>',
        align: 'left'
      },
      xAxis: {
        categories: ['Tokelau', 'Ireland', 'Italy', 'Timor-Leste']
      },
      yAxis: [
        {
          className: 'highcharts-color-0', // Primary axis styling class
          title: {
            text: 'Weight'
          }
        },
        {
          className: 'highcharts-color-1', // Secondary axis styling class
          opposite: true,
          title: {
            text: 'BMI'
          }
        }
      ],
      plotOptions: {
        column: {
          borderRadius: 5 // Rounded corners for columns
        }
      },
      series: [
        {
          type: 'column', // Specify the series type
          name: 'Weight',
          data: [92.5, 73.1, 64.8, 49.0],
          tooltip: {
            valueSuffix: ' kg'
          }
        },
        {
          type: 'column', // Specify the series type
          name: 'BMI',
          data: [33.7, 27.1, 24.9, 21.2],
          yAxis: 1 // Assigns to the secondary axis
        }
      ]
    };
  }
  }

