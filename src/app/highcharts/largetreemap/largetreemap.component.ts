import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import NetworkgraphModule from 'highcharts/modules/networkgraph';

NetworkgraphModule(Highcharts);

@Component({
  selector: 'app-largetreemap',
  templateUrl: './largetreemap.component.html',
  styleUrl: './largetreemap.component.css'
})
export class LargetreemapComponent {
  Highcharts = Highcharts; // Assign Highcharts to be used in the template
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'networkgraph',
      height: '100%'
    },
    title: {
      text: 'The Indo-European Language Tree',
      align: 'left'
    },
    subtitle: {
      text: 'A Force-Directed Network Graph in Highcharts',
      align: 'left'
    },
    plotOptions: {
      networkgraph: {
        keys: ['from', 'to'],
        layoutAlgorithm: {
          enableSimulation: true,
          friction: -0.9,
          gravitationalConstant: document.getElementById('container')?.scrollWidth! < 500 ? 0.2 : 0.06
        }
      }
    },
    series: [
      {
        type:'organization',
        accessibility: {
          enabled: false
        },
        dataLabels: {
          enabled: true,
          // linkFormat: '',
          style: {
            fontSize: '0.8em',
            fontWeight: 'normal'
          }
        },
        id: 'lang-tree',
        // Data structure for the 'data' property (links between nodes)
        data: [
          { from: 'Proto Indo-European', to: 'Balto-Slavic' },
          { from: 'Proto Indo-European', to: 'Germanic' },
          { from: 'Proto Indo-European', to: 'Celtic' },
          { from: 'Proto Indo-European', to: 'Italic' },
          { from: 'Proto Indo-European', to: 'Hellenic' },
          { from: 'Proto Indo-European', to: 'Anatolian' },
          { from: 'Proto Indo-European', to: 'Indo-Iranian' },
          { from: 'Proto Indo-European', to: 'Tocharian' },
          { from: 'Indo-Iranian', to: 'Dardic' },
          { from: 'Indo-Iranian', to: 'Indic' },
          { from: 'Indo-Iranian', to: 'Iranian' },
          { from: 'Iranian', to: 'Old Persian' },
          { from: 'Old Persian', to: 'Middle Persian' },
          { from: 'Indic', to: 'Sanskrit' },
          { from: 'Italic', to: 'Osco-Umbrian' },
          { from: 'Italic', to: 'Latino-Faliscan' },
          { from: 'Latino-Faliscan', to: 'Latin' },
          { from: 'Celtic', to: 'Brythonic' },
          { from: 'Celtic', to: 'Goidelic' },
          { from: 'Germanic', to: 'North Germanic' },
          { from: 'Germanic', to: 'West Germanic' },
          { from: 'Germanic', to: 'East Germanic' },
          { from: 'North Germanic', to: 'Old Norse' },
          { from: 'North Germanic', to: 'Old Swedish' },
          { from: 'North Germanic', to: 'Old Danish' },
          { from: 'West Germanic', to: 'Old English' },
          { from: 'West Germanic', to: 'Old Frisian' },
          { from: 'West Germanic', to: 'Old Dutch' },
          { from: 'West Germanic', to: 'Old Low German' },
          { from: 'West Germanic', to: 'Old High German' },
          { from: 'Old Norse', to: 'Old Icelandic' },
          { from: 'Old Norse', to: 'Old Norwegian' },
          { from: 'Old Norwegian', to: 'Middle Norwegian' },
          { from: 'Old Swedish', to: 'Middle Swedish' },
          { from: 'Old Danish', to: 'Middle Danish' },
          { from: 'Old English', to: 'Middle English' },
          { from: 'Old Dutch', to: 'Middle Dutch' },
          { from: 'Old Low German', to: 'Middle Low German' },
          { from: 'Old High German', to: 'Middle High German' },
          // Add remaining links...
        ]
      }
    ]
  };

}
