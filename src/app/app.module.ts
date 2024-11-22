import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinechartComponent } from './highcharts/linechart/linechart.component';
import { DataLablesComponent } from './highcharts/data-lables/data-lables.component';
import { SplinesymboleComponent } from './highcharts/splinesymbole/splinesymbole.component';
import { LogarithmicaxisComponent } from './highcharts/logarithmicaxis/logarithmicaxis.component';

import { CustomentranceComponent } from './highcharts/customentrance/customentrance.component';
import { ForecastComponent } from './highcharts/forecast/forecast.component';
import { AnnotationsComponent } from './highcharts/annotations/annotations.component';
import { TimedataComponent } from './highcharts/timedata/timedata.component';
import { DataComponent } from './data/data.component';
import { AreachartComponent } from './highcharts/areachart/areachart.component';
import { PercentageComponent } from './highcharts/percentage/percentage.component';
import { StakedareaComponent } from './highcharts/stakedarea/stakedarea.component';
import { ArearangeComponent } from './highcharts/arearange/arearange.component';

@NgModule({
  declarations: [
    AppComponent,
    LinechartComponent,
    DataLablesComponent,
    SplinesymboleComponent,
    LogarithmicaxisComponent,
    CustomentranceComponent,
    ForecastComponent,
    AnnotationsComponent,
    TimedataComponent,
    DataComponent,
    AreachartComponent,
    PercentageComponent,
    StakedareaComponent,
    ArearangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
