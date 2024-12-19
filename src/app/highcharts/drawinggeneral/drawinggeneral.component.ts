import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-drawinggeneral',
  templateUrl: './drawinggeneral.component.html',
  styleUrl: './drawinggeneral.component.css'
})
export class DrawinggeneralComponent {
   Highcharts: typeof Highcharts = Highcharts; // Assign Highcharts for the template
   chartOptions: Highcharts.Options = {};

   constructor() {}
 
   ngOnInit(): void {
     this.chartOptions = {
       chart: {
         type: 'columnpyramid'
       },
       title: {
         text: 'The 5 highest pyramids in the World'
       },
       colors: ['#C79D6D', '#B5927B', '#CE9B84', '#B7A58C', '#C7A58C'],
       xAxis: {
         crosshair: true,
         labels: {
           style: {
             fontSize: '14px'
           }
         },
         type: 'category'
       },
       yAxis: {
         min: 0,
         title: {
           text: 'Height (m)'
         }
       },
       tooltip: {
         valueSuffix: ' m'
       },
       series: [{
        type: 'columnpyramid',
         name: 'Height',
         colorByPoint: true,
         data: [
           ['Pyramid of Khufu', 138.8],
           ['Pyramid of Khafre', 136.4],
           ['Red Pyramid', 104],
           ['Bent Pyramid', 101.1],
           ['Pyramid of the Sun', 75]
         ],
         showInLegend: false
       }]
     };
   }
}
