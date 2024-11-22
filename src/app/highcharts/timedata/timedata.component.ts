import { Component ,ViewChild , ElementRef, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-timedata',
  templateUrl: './timedata.component.html',
  styleUrl: './timedata.component.css'
})
export class TimedataComponent{
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Wind speed during a day'
    },
    subtitle: {
      text: '29th of February, 2024 at two locations in Vik i Sogn, Norway'
    },
    xAxis: {
      categories: [
        '29 Feb', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '1 Mar'
      ],
      title: {
        text: 'Time'
      }
    },
    yAxis: {
      title: {
        text: 'Wind speed (m/s)'
      },
      min: 0,
      plotBands: [ // Move plotBands inside yAxis
        {
          from: 0,
          to: 2,
          color: '#ADD8E6',
          label: {
            text: 'Light air',
            align: 'center',
            style: {
              color: '#000080'
            }
          }
        }, 
        {
          from: 2,
          to: 5,
          color: '#B0E0E6',
          label: {
            text: 'Light breeze',
            align: 'center',
            style: {
              color: '#000080'
            }
          }
        }, 
        {
          from: 5,
          to: 8,
          color: '#AFEEEE',
          label: {
            text: 'Gentle breeze',
            align: 'center',
            style: {
              color: '#000080'
            }
          }
        }, 
        {
          from: 8,
          to: 10,
          color: '#00BFFF',
          label: {
            text: 'Moderate breeze',
            align: 'center',
            style: {
              color: '#000080'
            }
          }
        },
        {
          from: 10,
          to: 12,
          color: '#4682B4',
          label: {
            text: 'Fresh breeze',
            align: 'center',
            style: {
              color: '#000080'
            }
          }
        },
        {
          from: 12,
          to: 15,
          color: '#1E90FF',
          label: {
            text: 'Strong breeze',
            align: 'center',
            style: {
              color: '#000080'
            }
          }
        }
      ]
    },
    // tooltip: {
    //   shared: true,
    //   crosshairs: true,
    //   formatter: function () {
    //     return `<b>${this.x}</b><br/>${this.points.map(point => `${point.series.name}: ${point.y} m/s`).join('<br/>')}`;
    //   }
    // },
    plotOptions: {
      line: {
        marker: {
          enabled: false
        }
      }
    },
    series: [{
      type: 'line',
      name: 'Hestavollane',
      data: [5, 7, 10, 12, 9, 8, 6, 5, 10],
      color: '#1E90FF'
    }, {
      type: 'line',
      name: 'Vik',
      data: [2, 3, 4, 5, 6, 5, 3, 2, 4],
      color: '#4682B4'
    }]
  };
  
  

}



  




