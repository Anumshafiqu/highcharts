import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-stacked-percentage-column',
  templateUrl: './stacked-percentage-column.component.html',
  styleUrl: './stacked-percentage-column.component.css'
})
export class StackedPercentageColumnComponent {
  Highcharts: typeof Highcharts = Highcharts; // Reference to Highcharts
  chartOptions: Highcharts.Options = {}; // Chart configuration options

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Domestic passenger transport by mode of transport, Norway',
        align: 'left'
    },
    subtitle: {
        text: 'Source: <a href="https://www.ssb.no/transport-og-reiseliv/landtransport/statistikk/innenlandsk-transport">SSB</a>',
        align: 'left'
    },
    xAxis: {
        categories: ['2019', '2020', '2021']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percent'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>' +
            ': <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent',
            dataLabels: {
                enabled: true,
                format: '{point.percentage:.0f}%'
            }
        }
    },
    series: [{
      type:'column',
        name: 'Road',
        data: [434, 290, 307]
    }, {
      type:'column',
        name: 'Rail',
        data: [272, 153, 156]
    }, {
      type:'column',
        name: 'Air',
        data: [13, 7, 8]
    }, {
      type:'column',
        name: 'Sea',
        data: [55, 35, 41]
    }]
};
  }
}
