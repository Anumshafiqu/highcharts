import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
HighchartsMore(Highcharts); // Required for gauge chart

@Component({
  selector: 'app-guagecharts',
  templateUrl: './guagecharts.component.html',
  styleUrl: './guagecharts.component.css'
})
export class GuagechartsComponent {

  chart: Highcharts.Chart | undefined;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.createGaugeChart();
    this.addLiveUpdate();
  }

  createGaugeChart(): void {
    this.chart = Highcharts.chart('container', {
      chart: {
        type: 'gauge',
        plotBackgroundColor: undefined, // Replace null with undefined
        plotBackgroundImage: undefined, // Replace null with undefined
        plotBorderWidth: 0,
        plotShadow: false,
        height: '80%'
      },
      title: {
        text: 'Speedometer'
      },
      pane: {
        startAngle: -90,
        endAngle: 89.9,
        background: [], // Use empty array instead of null
        center: ['50%', '75%'],
        size: '110%'
      },
      yAxis: {
        min: 0,
        max: 200,
        tickPixelInterval: 72,
        tickPosition: 'inside',
        tickColor: Highcharts.defaultOptions.chart?.backgroundColor || '#FFFFFF',
        tickLength: 20,
        tickWidth: 2,
        minorTickInterval: undefined,
        labels: {
          distance: 20,
          style: {
            fontSize: '14px'
          }
        },
        lineWidth: 0,
        plotBands: [
          {
            from: 0,
            to: 130,
            color: '#55BF3B', // green
            thickness: 20,
          },
          {
            from: 150,
            to: 200,
            color: '#DF5353', // red
            thickness: 20,
          },
          {
            from: 120,
            to: 160,
            color: '#DDDF0D', // yellow
            thickness: 20
          }
        ]
      },
      series: [{
        type: 'gauge',
        name: 'Speed',
        data: [80],
        tooltip: {
          valueSuffix: ' km/h'
        },
        dataLabels: {
          format: '{y} km/h',
          borderWidth: 0,
          color: Highcharts.defaultOptions.title?.style?.color || '#333333',
          style: {
            fontSize: '16px'
          }
        },
        dial: {
          radius: '80%',
          backgroundColor: 'gray',
          baseWidth: 12,
          baseLength: '0%',
          rearLength: '0%'
        },
        pivot: {
          backgroundColor: 'gray',
          radius: 6
        }
      }]
    } as Highcharts.Options);
  }

  addLiveUpdate(): void {
    setInterval(() => {
      if (this.chart && !this.chart.renderer.forExport) {
        const point = this.chart.series[0].points[0];
        const increment = Math.round((Math.random() - 0.5) * 20);

        // let newVal = point.y + increment;
        // if (newVal < 0 || newVal > 200) {
        //   newVal = point.y - increment;
        // }

        // point.update(newVal);
      }
    }, 3000);
  }
}
