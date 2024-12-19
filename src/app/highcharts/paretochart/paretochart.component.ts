import { Component } from '@angular/core';
import Highcharts from 'highcharts';
import Pareto from 'highcharts/modules/pareto';

Pareto(Highcharts); // Load the Pareto module

@Component({
  selector: 'app-paretochart',
  templateUrl: './paretochart.component.html',
  styleUrl: './paretochart.component.css'
})
export class ParetochartComponent {
  Highcharts: typeof Highcharts = Highcharts; // Assign Highcharts for the template
  chartOptions: Highcharts.Options = {
    chart: {
        renderTo: 'container',
        type: 'column'
    },
    title: {
        text: 'Restaurants Complaints'
    },
    tooltip: {
        shared: true
    },
    xAxis: {
        categories: [
            'Overpriced',
            'Small portions',
            'Wait time',
            'Food is tasteless',
            'No atmosphere',
            'Not clean',
            'Too noisy',
            'Unfriendly staff'
        ],
        crosshair: true
    },
    yAxis: [{
        title: {
            text: ''
        }
    }, {
        title: {
            text: ''
        },
        minPadding: 0,
        maxPadding: 0,
        max: 100,
        min: 0,
        opposite: true,
        labels: {
            format: '{value}%'
        }
    }],
    series: [{
        type: 'pareto',
        name: 'Pareto',
        yAxis: 1,
        zIndex: 10,
        baseSeries: 1,
        tooltip: {
            valueDecimals: 2,
            valueSuffix: '%'
        }
    }, {
        name: 'Complaints',
        type: 'column',
        zIndex: 2,
        data: [755, 222, 151, 86, 72, 51, 36, 10]
    }]
};
}
