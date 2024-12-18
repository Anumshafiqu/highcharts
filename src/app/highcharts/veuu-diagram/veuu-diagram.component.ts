import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import VennModule from 'highcharts/modules/venn';

// Initialize the Venn module
VennModule(Highcharts);
@Component({
  selector: 'app-veuu-diagram',
  templateUrl: './veuu-diagram.component.html',
  styleUrl: './veuu-diagram.component.css'
})
export class VeuuDiagramComponent {
    Highcharts = Highcharts; // Assign Highcharts to be used in the template
    chartOptions: Highcharts.Options = {
      tooltip: {
          headerFormat: '',
          pointFormat: `
              {{#if (eq 1 point.sets.length)}}
                  Product:<br><b>Highcharts {point.sets.0}</b>
              {{else}}
                  Products:<br>
                  {{#each point.sets}}
                      Highcharts <b>{this}</b>{{#unless @last}} and {{/unless}}
                  {{/each}}<br><br>
                  Shared components:<br>
                  <b>{point.name}</b><br>
              {{/if}}
          `
      },
      series: [{
          type: 'venn',
          data: [
              { sets: ['Core'], value: 10, name: 'Highcharts Core', dataLabels: { style: { fontSize: '15px' } }, color: 'rgb(180, 210, 255)' },
              { sets: ['Stock'], value: 3, dataLabels: { style: { fontSize: '13px' } }, color: 'rgb(180, 255, 210)' },
              { sets: ['Dashboards'], value: 3, dataLabels: { style: { fontSize: '13px' } }, color: 'rgb(180, 235, 235)' },
              { sets: ['Gantt'], value: 2.5, dataLabels: { style: { fontSize: '13px' } }, color: 'rgb(200, 200, 200)' },
              { sets: ['Maps'], value: 3, dataLabels: { style: { fontSize: '13px' } }, color: 'rgb(170, 230, 250)' },
              { sets: ['Gantt', 'Maps', 'Stock'], value: 1, name: 'Core', color: 'rgb(170, 250, 230)' },
              { sets: ['Stock', 'Core'], value: 1, name: 'DateTime Series and Axis', color: 'rgb(170, 240, 240)' },
              { sets: ['Gantt', 'Core'], value: 1, name: 'X-range Series and DateTime Axis', color: 'rgb(190, 190, 190)' },
              { sets: ['Maps', 'Core'], value: 1, name: 'Heatmap and ColorAxis', color: 'rgb(160, 220, 245)' },
              { sets: ['Stock', 'Gantt'], value: 0.25, name: 'Navigator & RangeSelector', color: 'rgb(160, 245, 220)' },
              { sets: ['Dashboards', 'Core'], value: 1, name: 'Data Layer' },
              { sets: ['Dashboards', 'DataGrid'], value: 0.5, name: 'DataGrid' },
              { sets: ['Dashboards', 'KPI'], value: 0.5, name: 'KPI' },
              { sets: ['DataGrid'], value: 0.5, name: '' },
              { sets: ['KPI'], value: 0.2, name: 'KPI' },
              { sets: ['Custom'], value: 2, name: 'Custom component' },
              { sets: ['Custom', 'Dashboards'], value: 0.3, name: 'Sync API' }
          ],
          dataLabels: {
              style: {
                  textOutline: 'none'
              }
          }
      }],
      title: {
          text: 'Highsoft products relationships'
      },
      subtitle: {
          text: 'Highcharts Core, Stock, Maps, Gantt, and Dashboards'
      },
      accessibility: {
          point: {
              valueDescriptionFormat: `
                  {{#if (eq 1 point.sets.length)}}
                      Product: Highcharts {point.sets.0}
                  {{else}}
                      Products: 
                      {{#each point.sets}}
                          Highcharts {this}{{#unless @last}} and {{/unless}}
                      {{/each}},
                      Shared components: {point.name}
                  {{/if}}
              `
          },
          series: {
              describeSingleSeries: true,
              descriptionFormat: 'Venn diagram with {series.points.length} relations.'
          }
      }
  };
  

}
