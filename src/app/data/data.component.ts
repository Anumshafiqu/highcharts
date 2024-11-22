import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
interface chart {
  sticky?: any;  // Add the sticky property
}

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Chart showing data loaded dynamically.'
    },
    subtitle: {
      text: 'The individual data points can be clicked to display more information.'
    },
    xAxis: {
      categories: ['18 Dec', '25 Dec', '1 Jan', '8 Jan', '15 Jan'],
      crosshair: true,  // Added crosshair under xAxis
    },
    yAxis: {
      title: {
        text: 'Value'
      },
      crosshair: true,  // Added crosshair under yAxis
    },
    // tooltip: {
    //   shared: true,
    //   formatter: function() {
    //     return `<b>${this.x}</b><br/>${this.points.map((point: Highcharts.Point) => `${point.series.name}: ${point.y}`).join('<br/>')}`;
    //   }
    // },
    series: [
      {
        type: 'line', // Added type property
        name: 'Users',
        data: [40, 42, 45, 47, 44], // Sample data for Users
        color: 'blue',
        marker: {
          symbol: 'circle'
        }
      },
      {
        type: 'line', // Added type property
        name: 'Sessions',
        data: [50, 52, 55, 53, 51], // Sample data for Sessions
        color: 'purple',
        marker: {
          symbol: 'circle'
        }
      }
    ]
  };

  ngOnInit(): void {
    if (this.chartOptions) {
      Highcharts.chart('container', this.chartOptions); // Make sure chartOptions is defined before using
    }
  }

}

