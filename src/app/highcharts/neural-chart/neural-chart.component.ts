import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import ParallelCoordinatesModule from 'highcharts/modules/parallel-coordinates';

// Load the Highcharts Parallel Coordinates module
ParallelCoordinatesModule(Highcharts);

// Define the structure of a layer
interface Layer {
    nodes: number;
    activation: string;
    label: string;
}
@Component({
  selector: 'app-neural-chart',
  templateUrl: './neural-chart.component.html',
  styleUrl: './neural-chart.component.css'
})
export class NeuralChartComponent {
  Highcharts: typeof Highcharts = Highcharts; // Assign Highcharts for the template
  chartOptions: Highcharts.Options = {}; // Initialize chartOptions

  // Define layers for the neural network
  layers: Array<{ nodes: number; activation: string; label: string }> = [
    { nodes: 1, activation: 'tanh', label: 'Input Layer (#0)' },
    { nodes: 6, activation: 'tanh', label: 'Hidden Layer #1 (tanh)' },
    { nodes: 6, activation: 'ReLU', label: 'Hidden Layer #2 (ReLU)' },
    { nodes: 6, activation: 'ReLU', label: 'Hidden Layer #3 (ReLU)' },
    { nodes: 2, activation: 'sigmoid', label: 'Output Layer (sigmoid)' }
  ];

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'line',
        parallelCoordinates: true,
        inverted: true
      },
      title: {
        text: 'Visualizing a neural network with Highcharts',
        align: 'left'
      },
      subtitle: {
        text: 'You can use the parallel-coordinates module to visualize a neural network.',
        align: 'left'
      },
      accessibility: {
        typeDescription: 'Neural network chart',
        point: {
          descriptionFormat: 'node on layer {point.x + 1}: {point.y}'
        }
      },
      tooltip: {
        stickOnContact: true,
        formatter: function () {
          const customLayers = (this.series.chart.xAxis[0].options as any).custom?.layers;
          if (customLayers) {
            const layerInfo = customLayers[this.point.x];
            return `
              <span style="font-weight: bold">Activation function:</span> ${layerInfo.activation}<br>
              <span style="font-weight: bold">Number of nodes in the layer:</span> ${layerInfo.nodes}
            `;
          }
          return '';
        }
      },
      plotOptions: {
        line: {
          lineWidth: 0.5,
          color: '#a752d115',
          marker: {
            symbol: 'circle',
            enabled: true,
            radius: 10,
            fillColor: 'white',
            lineWidth: 1.5,
            lineColor: '#7f30a6',
            states: {
              hover: {
                lineColor: '#fa56fc'
              }
            }
          },
          states: {
            inactive: {
              enabled: false
            },
            hover: {
              lineColor: '#7f30a6',
              lineWidthPlus: 0
            }
          }
        }
      },
      xAxis: {
        categories: this.layers.map(layer => layer.label),
        accessibility: {
          description: 'Layers of a neural network.'
        },
        custom: { // Use custom field for extra data
          layers: this.layers
        }
      } as Highcharts.XAxisOptions & { custom: { layers: any } }, // Extend type with custom
      yAxis: this.layers.map(layer => ({
        type: 'category',
        visible: false,
        accessibility: {
          description: `Axis for the nodes contained in the layer ${layer.label}.`
        }
      })),
      series: this.generateData(),
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              xAxis: {
                categories: this.layers.map(layer => layer.activation)
              }
            }
          }
        ]
      }
    };
    
  }

  // Generates data for the neural network chart
  private generateData(): Highcharts.SeriesOptionsType[] {
    const data: { data: number[] }[] = [];

    const generate = (currentIndices: number[]) => {
      if (currentIndices.length === this.layers.length) {
        data.push({ data: [...currentIndices] });
        return;
      }

      const dimensionIndex = currentIndices.length;

      for (let i = 0; i < this.layers[dimensionIndex].nodes; i++) {
        generate([...currentIndices, i]);
      }
    };

    generate([]);
    return data.map(d => ({
      data: d.data,
      type: 'line'
    }));
  }


}
