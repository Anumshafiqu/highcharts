import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import TreemapModule from 'highcharts/modules/treemap';

// Initialize the Treemap module
TreemapModule(Highcharts);
@Component({
  selector: 'app-tree-map',
  templateUrl: './tree-map.component.html',
  styleUrl: './tree-map.component.css'
})
export class TreeMapComponent {
  Highcharts = Highcharts; // Assign Highcharts to be used in the template
  chartOptions: Highcharts.Options = {
    title: {
      text: 'Highcharts Treemap',
    },
    colorAxis: {
      minColor: '#FFFFFF',
      maxColor: Highcharts.getOptions().colors?.[0] || '#000000',
    },
    series: [
      {
        type: 'treemap',
        layoutAlgorithm: 'squarified',
        clip: false,
        data: [
          { name: 'A', value: 6, colorValue: 1 },
          { name: 'B', value: 6, colorValue: 2 },
          { name: 'C', value: 4, colorValue: 3 },
          { name: 'D', value: 3, colorValue: 4 },
          { name: 'E', value: 2, colorValue: 5 },
          { name: 'F', value: 2, colorValue: 6 },
          { name: 'G', value: 1, colorValue: 7 },
        ],
      },
    ],
  };
}
