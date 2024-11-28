import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-bar-race',
  templateUrl: './bar-race.component.html',
  styleUrl: './bar-race.component.css'
})
export class BarRaceComponent {


  Highcharts: typeof Highcharts = Highcharts; // Reference to Highcharts
  chartOptions: Highcharts.Options = {};
  ngOnInit(): void {
    this.chartOptions = {
    chart: {
        type: 'column' as const
    },
    title: {
        text: 'Olympic Games all-time medal table, grouped by continent',
        align: 'left' as const
    },
    xAxis: {
        categories: ['Gold', 'Silver', 'Bronze'] // Categories for the X-axis
    },
    yAxis: {
        allowDecimals: false, // Disable decimals on the Y-axis
        min: 0, // Set the minimum value for the Y-axis
        title: {
            text: 'Count medals' // Title for the Y-axis
        }
    },
    tooltip: {
        formatter: function () {
            return `<b>${this.key}</b><br/>${this.series.name}: ${this.y}<br/>Total: ${this.point}`;
        }
    },
    plotOptions: {
        column: {
            stacking: 'normal' // Stack columns for the chart
        }
    },
    series: [{
      type:'bar',
        name: 'Norway',
        data: [148, 133, 124],
        stack: 'Europe' // Group data by continent
    }, {
      type:'bar',
        name: 'Germany',
        data: [102, 98, 65],
        stack: 'Europe'
    }, {
      type:'bar',
        name: 'United States',
        data: [113, 122, 95],
        stack: 'North America'
    }, {
      type:'bar',
        name: 'Canada',
        data: [77, 72, 80],
        stack: 'North America'
    }]
};



  
} 
}
