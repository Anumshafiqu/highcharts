import { Component } from '@angular/core';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-parallel',
  templateUrl: './parallel.component.html',
  styleUrl: './parallel.component.css'
})
export class ParallelComponent {
  Highcharts: typeof Highcharts = Highcharts; // Assign Highcharts for the template
  chartOptions: Highcharts.Options = {
    accessibility: {
        point: {
            valueDescriptionFormat: '{point.name}: {point.longDescription}.'
        }
    },
    series: [{
        type: 'venn',
        data: [{
            sets: ['A'],
            value: 4,
            name: 'Euler diagrams',
       
        }, {
            sets: ['B'],
            value: 1,
            name: 'Venn diagrams',
        
        }, {
            sets: ['A', 'B'],
            value: 1
        }]
    }],
    tooltip: {
        headerFormat:
            '<span style="color:{point.color}">\u2022</span> ' +
            '<span style="font-size: 14px"> {point.point.name}</span><br/>',
        pointFormat: '{point.longDescription}<br><span style="font-size: ' +
            '10px">Source: Wikipedia</span>'
    },
    title: {
        text: 'Relationship between Euler and Venn diagrams',
        align: 'left'
    }
}

  
  
}
