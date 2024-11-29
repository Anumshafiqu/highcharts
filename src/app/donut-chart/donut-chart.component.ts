import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
interface DrilldownData {
  name: string;
  categories: string[];
  data: number[];
}

interface BrowserData {
  y: number;
  color: Highcharts.ColorType;
  drilldown: DrilldownData;
}

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrl: './donut-chart.component.css'
})
export class DonutChartComponent {
 
  colors: string[] = [];


Highcharts: typeof Highcharts = Highcharts; // Reference to Highcharts
chartOptions: Highcharts.Options = {}; // Chart configuration options

constructor() {
 
}

ngOnInit(): void {
  this.chartOptions = {
  chart: {
      // plotBackgroundColor: null,
      // plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      // text: 'Browser market shares in February, 2022',
      align: 'left'
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          
          borderRadius: 5,
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
              distance: -50,
              filter: {
                  property: 'percentage',
                  operator: '>',
                  value: 4
              }
          }
      }
  },
  series: [{
    type:'pie',
      name: 'Share',
      data: [
          { name: 'Chrome', y: 74.03 },
          { name: 'Edge', y: 12.66 },
          { name: 'Firefox', y: 4.96 },
          { name: 'Safari', y: 2.49 },
          { name: 'Internet Explorer', y: 2.31 },
          { name: 'Other', y: 3.398 }
      ]
  }]
};
}

}
