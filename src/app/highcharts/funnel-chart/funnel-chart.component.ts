import { Component } from '@angular/core';
import Highcharts from 'highcharts';
@Component({
  selector: 'app-funnel-chart',
  templateUrl: './funnel-chart.component.html',
  styleUrl: './funnel-chart.component.css'
})
export class FunnelChartComponent {
   Highcharts: typeof Highcharts = Highcharts; // Assign Highcharts for the template
   chartOptions: Highcharts.Options = {
    chart: {
        type: 'funnel'
    },
    title: {
        text: 'Sales funnel'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b> ({point.y:,.0f})',
                // softConnector: true
            },
            // center: ['40%', '50%'],
            // neckWidth: '30%',
            // neckHeight: '25%',
            // width: '80%'
        }
    },
    legend: {
        enabled: false
    },
    series: [{
      type: 'funnel',
        name: 'Unique users',
        data: [
            ['Website visits', 15654],
            ['Downloads', 4064],
            ['Requested price list', 1987],
            ['Invoice sent', 976],
            ['Finalized', 846]
        ]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                plotOptions: {
                    series: {
                        dataLabels: {
                            inside: true
                        },
                        // center: ['50%', '50%'],
                        // width: '100%'
                    }
                }
            }
        }]
    }
};
}
