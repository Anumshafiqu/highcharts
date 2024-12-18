import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import SolidGauge from 'highcharts/modules/solid-gauge';
import HighchartsMore from 'highcharts/highcharts-more';


// Initialize modules
HighchartsMore(Highcharts);
SolidGauge(Highcharts);

@Component({
  selector: 'app-multiple-kpigauge',
  templateUrl: './multiple-kpigauge.component.html',
  styleUrl: './multiple-kpigauge.component.css'
})
export class MultipleKPIgaugeComponent {
  Highcharts: typeof Highcharts = Highcharts; // Reference to Highcharts
  chartOptions: Highcharts.Options = {}; // Chart configuration options

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'gauge',
        plotBorderWidth: 1,
        plotBackgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, '#FFF4C6'],
            [0.3, '#FFFFFF'],
            [1, '#FFF4C6'],
          ],
        },
        plotBackgroundImage: undefined,
        height: 200,
      },

      title: {
        text: 'VU meter',
      },

      pane: [
        {
          startAngle: -45,
          endAngle: 45,
          background: undefined,
          center: ['25%', '145%'],
          size: 300,
        },
        {
          startAngle: -45,
          endAngle: 45,
          background: undefined,
          center: ['75%', '145%'],
          size: 300,
        },
      ],

      exporting: {
        enabled: false,
      },

      tooltip: {
        enabled: false,
      },

      yAxis: [
        {
          min: -20,
          max: 6,
          minorTickPosition: 'outside',
          tickPosition: 'outside',
          labels: {
            // rotation: auto,
            distance: 20,
          },
          plotBands: [
            {
              from: 0,
              to: 6,
              color: '#C02316',
              innerRadius: '100%',
              outerRadius: '105%',
            },
          ],
          pane: 0,
          title: {
            text: 'VU<br/><span style="font-size:8px">Channel A</span>',
            y: -40,
          },
        },
        {
          min: -20,
          max: 6,
          minorTickPosition: 'outside',
          tickPosition: 'outside',
          labels: {
            // rotation: 'auto',
            distance: 20,
          },
          plotBands: [
            {
              from: 0,
              to: 6,
              color: '#C02316',
              innerRadius: '100%',
              outerRadius: '105%',
            },
          ],
          pane: 1,
          title: {
            text: 'VU<br/><span style="font-size:8px">Channel B</span>',
            y: -40,
          },
        },
      ],

      plotOptions: {
        gauge: {
          dataLabels: {
            enabled: false,
          },
          dial: {
            radius: '100%',
          },
        },
      },

      series: [
        {
          type:'gauge',
          name: 'Channel A',
          data: [-20],
          yAxis: 0,
        },
        {
          type:'gauge',
          name: 'Channel B',
          data: [-20],
          yAxis: 1,
        },
      ],
    };

    // Initialize the chart after DOM has rendered
    setTimeout(() => {
      const chart = Highcharts.chart('container', this.chartOptions as any);

      // Add dynamic behavior
      setInterval(() => {
        if (chart.series) {
          const left = chart.series[0].points[0];
          const right = chart.series[1].points[0];
          const inc = (Math.random() - 0.5) * 3;

        
          
          chart.redraw();
        }
      }, 500);
    });
  }
  }
