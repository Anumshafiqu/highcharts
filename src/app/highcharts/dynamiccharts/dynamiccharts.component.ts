import { Component } from '@angular/core';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-dynamiccharts',
  templateUrl: './dynamiccharts.component.html',
  styleUrl: './dynamiccharts.component.css'
})
export class DynamicchartsComponent {
    Highcharts: typeof Highcharts = Highcharts; // Reference to Highcharts
    chartOptions: Highcharts.Options = {}; // Chart configuration options
  
    constructor() {}
  
    ngOnInit(): void {
      this.chartOptions = {
        title: {
            text: 'Unemployment rates in engineering and ICT subjects, 2023',
            align: 'left'
        },
        subtitle: {
            text: 'Chart option: Plain | Source: ' +
                '<a href="https://www.nav.no/no/nav-og-samfunn/statistikk/arbeidssokere-og-stillinger-statistikk/helt-ledige"' +
                'target="_blank">NAV</a>',
            align: 'left'
        },
        colors: [
            '#4caefe',
            '#3fbdf3',
            '#35c3e8',
            '#2bc9dc',
            '#20cfe1',
            '#16d4e6',
            '#0dd9db',
            '#03dfd0',
            '#00e4c5',
            '#00e9ba',
            '#00eeaf',
            '#23e274'
        ],
        xAxis: {
            categories: [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'
            ]
        },
        series: [{
            type: 'column',
            name: 'Unemployed',
            borderRadius: 5,
            colorByPoint: true,
            data: [
                2396, 2434, 2491, 2602, 2536, 2618, 2928, 2899,
                2780, 2853, 2923, 2999
            ],
            showInLegend: false
        }]
    };
    

} 

    
 
    
}
