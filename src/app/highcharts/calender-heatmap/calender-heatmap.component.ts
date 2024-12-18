import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-calender-heatmap',
  templateUrl: './calender-heatmap.component.html',
  styleUrl: './calender-heatmap.component.css'
})
export class CalenderHeatmapComponent {
  Highcharts = Highcharts; // Assign Highcharts to be used in the template
  chartOptions: Highcharts.Options;

  // Sample dataset
  data = [
    { date: '2023-07-01', temperature: 19.1 },
    { date: '2023-07-02', temperature: 15.3 },
    { date: '2023-07-03', temperature: 16.4 },
    { date: '2023-07-04', temperature: 16.0 },
    { date: '2023-07-05', temperature: 17.9 },
    { date: '2023-07-06', temperature: 15.8 },
    { date: '2023-07-07', temperature: 21.1 },
    { date: '2023-07-08', temperature: 23.3 },
    { date: '2023-07-09', temperature: 24.8 },
    { date: '2023-07-10', temperature: 25.1 },
    { date: '2023-07-11', temperature: 18.2 },
    { date: '2023-07-12', temperature: 14.4 },
    { date: '2023-07-13', temperature: 19.3 },
    { date: '2023-07-14', temperature: 20.2 },
    { date: '2023-07-15', temperature: 15.8 },
    { date: '2023-07-16', temperature: 16.1 },
    { date: '2023-07-17', temperature: 15.7 },
    { date: '2023-07-18', temperature: 19.2 },
    { date: '2023-07-19', temperature: 18.6 },
    { date: '2023-07-20', temperature: 18.3 },
    { date: '2023-07-21', temperature: 15.0 },
    { date: '2023-07-22', temperature: 14.7 },
    { date: '2023-07-23', temperature: 18.8 },
    { date: '2023-07-24', temperature: 17.7 },
    { date: '2023-07-25', temperature: 17.4 },
    { date: '2023-07-26', temperature: 17.6 },
    { date: '2023-07-27', temperature: 18.1 },
    { date: '2023-07-28', temperature: 18.2 },
    { date: '2023-07-29', temperature: 20.3 },
    { date: '2023-07-30', temperature: 16.4 },
    { date: '2023-07-31', temperature: 17.0 }
  ];

  weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  constructor() {
    this.chartOptions = this.generateChartData(this.data);
  }

  generateChartData(data: any[]): Highcharts.Options {
    const firstWeekday = new Date(data[0].date).getDay();
    const monthLength = data.length;
    const lastElement = data[monthLength - 1].date;
    const lastWeekday = new Date(lastElement).getDay();
    const lengthOfWeek = 6;
    const emptyTilesFirst = firstWeekday;
    const chartData: any[] = [];

    // Add the empty tiles before the first day of the month with null values
    for (let emptyDay = 0; emptyDay < emptyTilesFirst; emptyDay++) {
      chartData.push({
        x: emptyDay,
        y: 5,
        value: null,
        date: null,
        custom: {
          empty: true
        }
      });
    }

    // Loop through and populate with temperature and dates from the dataset
    for (let day = 1; day <= monthLength; day++) {
      const date = data[day - 1].date;
      const xCoordinate = (emptyTilesFirst + day - 1) % 7;
      const yCoordinate = Math.floor((firstWeekday + day - 1) / 7);
      const id = day;
      const temperature = data[day - 1].temperature;

      chartData.push({
        x: xCoordinate,
        y: 5 - yCoordinate,
        value: temperature,
        date: new Date(date).getTime(),
        custom: {
          monthDay: id
        }
      });
    }

    // Fill in the missing values when the dataset is looped through
    const emptyTilesLast = lengthOfWeek - lastWeekday;
    for (let emptyDay = 1; emptyDay <= emptyTilesLast; emptyDay++) {
      chartData.push({
        x: (lastWeekday + emptyDay) % 7,
        y: 0,
        value: null,
        date: null,
        custom: {
          empty: true
        }
      });
    }

    return {
      chart: {
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 40,
      },
      title: {
        text: 'Day temperature in Oslo, Norway July 2023',
      },
      tooltip: {
        enabled: true,
        outside: true,
        // zIndex: 20,
        headerFormat: '',
        pointFormat: '{#unless point.custom.empty}{point.date:%A, %b %e, %Y}{/unless}',
        nullFormat: 'No data'
      },
      xAxis: {
        categories: this.weekdays,
        opposite: true,
        lineWidth: 26,
        offset: 13,
        lineColor: 'rgba(27, 26, 37, 0.2)',
        labels: {
          rotation: 0,
          y: 20,
          style: {
            textTransform: 'uppercase',
            fontWeight: 'bold'
          }
        },
      },
      yAxis: {
        min: 0,
        max: 5,
        visible: false
      },
      colorAxis: {
        min: 0,
        stops: [
          [0.2, 'lightblue'],
          [0.4, '#CBDFC8'],
          [0.6, '#F3E99E'],
          [0.9, '#F9A05C']
        ],
        labels: {
          format: '{value} °C'
        }
      },
      series: [{
        type:'heatmap',
        keys: ['x', 'y', 'value', 'date', 'id'],
        data: chartData,
        nullColor: 'rgba(196, 196, 196, 0.2)',
        borderWidth: 2,
        borderColor: 'rgba(196, 196, 196, 0.2)',
        dataLabels: [{
          enabled: true,
          format: '{#unless point.custom.empty}{point.value:.1f}°{/unless}',
          style: {
            textOutline: 'none',
            fontWeight: 'normal',
            fontSize: '1rem'
          },
          y: 4
        }, {
          enabled: true,
          align: 'left',
          verticalAlign: 'top',
          format: '{#unless point.custom.empty}{point.custom.monthDay}{/unless}',
          backgroundColor: 'whitesmoke',
          padding: 2,
          style: {
            textOutline: 'none',
            color: 'rgba(70, 70, 92, 1)',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            opacity: 0.5
          },
          x: 1,
          y: 1
        }]
      }]
    };
  }
}
