import { Component , ViewChild, ElementRef } from '@angular/core';
import Highcharts from 'highcharts';
import Sonification from 'highcharts/modules/sonification';

// Initialize the Sonification module
Sonification(Highcharts);

@Component({
  selector: 'app-sonification-charts',
  templateUrl: './sonification-charts.component.html',
  styleUrl: './sonification-charts.component.css'
})
export class SonificationChartsComponent {
  @ViewChild('sonifyButton', { static: true }) sonifyButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('presetDropdown', { static: true }) presetDropdown!: ElementRef<HTMLSelectElement>;

  Highcharts: typeof Highcharts = Highcharts;
  chartInstance!: Highcharts.Chart;

  ngOnInit(): void {
    this.initializeChart();
    this.populatePresetDropdown();
    this.addEventListeners();
  }

  initializeChart() {
    const options: Highcharts.Options = {
      chart: {
        type: 'spline',
        renderTo: 'container' // Replace with your chart container ID
      },
      title: {
        text: 'Sonification Example'
      },
      sonification: {
        defaultInstrumentOptions: {
          instrument: 'basic2'
        }
      },
      yAxis: {
        title: {
          text: 'Value'
        }
      },
      series: [{
        type:'column',
        name: 'Sample Data',
        data: [1, 2, 3, 4, 5] // Example data
      }]
    };

    this.chartInstance = Highcharts.chart(options);
  }

  addEventListeners() {
    // Add onclick event for the sonify button
    this.sonifyButton.nativeElement.onclick = () => {
      // this.chartInstance.sonification?.pause();
    };

    // Add onchange event for the preset dropdown
    this.presetDropdown.nativeElement.onchange = (event: Event) => {
      const target = event.target as HTMLSelectElement;
      this.chartInstance.update({
        sonification: {
          defaultInstrumentOptions: {
            instrument: target.value
          }
        }
      }, false);
    };
  }

  populatePresetDropdown() {
    // const presets = Object.keys(Highcharts.sonification.InstrumentPresets);

    // presets.forEach((preset) => {
    //   const option = document.createElement('option');
    //   option.textContent = option.value = preset;
    //   this.presetDropdown.nativeElement.appendChild(option);
    // });
  }






}





