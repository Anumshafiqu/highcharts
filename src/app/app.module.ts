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
// highcharts module
import { HighchartsChartModule } from 'highcharts-angular';
import { BasicColumnComponent } from './highcharts/basic-column/basic-column.component';
import { BarRaceComponent } from './highcharts/bar-race/bar-race.component';
import { ColumnRangeComponent } from './highcharts/column-range/column-range.component';
import { ColumnComponent } from './highcharts/column/column.component';
import { FixedPlacementComponent } from './highcharts/fixed-placement/fixed-placement.component';
import { ComparisonComponent } from './highcharts/comparison/comparison.component';
import { DataDefinedComponent } from './highcharts/data-defined/data-defined.component';
import { StakedBarComponent } from './highcharts/staked-bar/staked-bar.component';
import { StackedPercentageColumnComponent } from './highcharts/stacked-percentage-column/stacked-percentage-column.component';
import { DrilldownComponent } from './highcharts/drilldown/drilldown.component';
import { PieComponent } from './highcharts/pie/pie.component';
import { PieChartComponent } from './highcharts/pie-chart/pie-chart.component';

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
    ArearangeComponent,
    BasicColumnComponent,
    BarRaceComponent,
    ColumnRangeComponent,
    ColumnComponent,
    FixedPlacementComponent,
    ComparisonComponent,
    DataDefinedComponent,
    StakedBarComponent,
    StackedPercentageColumnComponent,
    DrilldownComponent,
    PieComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
