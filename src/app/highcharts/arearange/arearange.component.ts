import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';
import HighchartsData from 'highcharts/modules/data';
import DataModule from 'highcharts/modules/data';
import HighchartsExporting from 'highcharts/modules/exporting';

HighchartsData(Highcharts);

// Initialize modules
DataModule(Highcharts);
HighchartsExporting(Highcharts);
@Component({
  selector: 'app-arearange',
  templateUrl: './arearange.component.html',
  styleUrl: './arearange.component.css'
})
export class ArearangeComponent implements OnInit{
    Highcharts: typeof Highcharts = Highcharts; // Assign the Highcharts library
    chartOptions: Highcharts.Options = {}; // Chart options
  
    constructor() {}
  
    ngOnInit(): void {
      this.chartOptions = {
        chart: {
          type: 'bar',
        },
        title: {
          text: 'Historic World Population by Region',
          align: 'left',
        },
        subtitle: {
          text:
            'Source: <a href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population" target="_blank">Wikipedia.org</a>',
          align: 'left',
        },
        xAxis: {
          categories: ['Africa', 'America', 'Asia', 'Europe'],
          title: {
            text: null,
          },
          gridLineWidth: 1,
          lineWidth: 0,
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Population (millions)',
            align: 'high',
          },
          labels: {
            overflow: 'justify',
          },
          gridLineWidth: 0,
        },
        tooltip: {
          valueSuffix: ' millions',
        },
        plotOptions: {
          bar: {
            borderRadius: 50, // Rounded corners in TypeScript
            dataLabels: {
              enabled: true,
            },
            groupPadding: 0.1,
          },
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -40,
          y: 80,
          floating: true,
          borderWidth: 1,
          backgroundColor:
            Highcharts.defaultOptions.legend?.backgroundColor || '#FFFFFF',
          shadow: true,
        },
        credits: {
          enabled: false,
        },
        series: [
          {
            type: 'bar', // Define the series type explicitly
            name: 'Year 1990',
            data: [632, 727, 3202, 721],
          },
          {
            type: 'bar',
            name: 'Year 2000',
            data: [814, 841, 3714, 726],
          },
          {
            type: 'bar',
            name: 'Year 2021',
            data: [1393, 1031, 4695, 745],
          },
        ],
      };
    }


  }
  

