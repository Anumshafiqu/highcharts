import { Component , ViewChild, ElementRef} from '@angular/core';
import Highcharts from 'highcharts';
import Sonification from 'highcharts/modules/sonification';

Sonification(Highcharts);

@Component({
  selector: 'app-sonified-charts',
  templateUrl: './sonified-charts.component.html',
  styleUrl: './sonified-charts.component.css'
})
export class SonifiedChartsComponent {
  @ViewChild('sonifyButton', { static: true }) sonifyButton!: ElementRef<HTMLButtonElement>;
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {}; // Chart configuration options
  chartInstance!: Highcharts.Chart;

  ngOnInit(): void {
    const data: [number, number | null][] = this.generateData();

      this.chartOptions = {
      chart: {
        height: '100%'
      },
      title: {
        text: 'Sonified mathematical function',
        align: 'left'
      },
      sonification: {
        duration: 8000,
        defaultInstrumentOptions: {
          instrument: 'basic1',
          roundToMusicalNotes: false
        }
      },
      accessibility: {
        landmarkVerbosity: 'one'
      },
      xAxis: {
        min: -6,
        max: 6,
        gridLineWidth: 1,
        tickInterval: 1,
        crossing: 0
      },
      yAxis: {
        min: -6,
        max: 6,
        tickInterval: 1,
        lineWidth: 1,
        crossing: 0,
        title: {
          text: null
        }
      },
      legend: {
        enabled: false
      },
      tooltip: {
        headerFormat: '',
        pointFormat: 'y = {point.y:.2f}'
      },
      series: [
        {
          type:'column',
          data
        }
      ]
    };

    this.addSonifyButtonListener();
  }

  /**
   * Generate data points for y = 1 / x
   * Returns an array of [x, y] pairs with `null` for x = 0
   */
  private generateData(): [number, number | null][] {
    const data: [number, number | null][] = [];
    for (let x = -6; x < 6; x += 0.01) {
      data.push([x, Math.round(x * 100) ? 1 / x : null]);
    }
    return data;
  }

  /**
   * Add event listener to the sonify button
   */
  private addSonifyButtonListener(): void {
    this.sonifyButton.nativeElement.onclick = () => {
      if (this.chartInstance.sonification) {
        // this.chartInstance.sonification.toggleSonify();
      }
    };
  }

}
