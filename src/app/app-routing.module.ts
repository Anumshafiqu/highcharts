import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinechartComponent } from './highcharts/linechart/linechart.component';
import { DataLablesComponent } from './highcharts/data-lables/data-lables.component';
import { SplinesymboleComponent } from './highcharts/splinesymbole/splinesymbole.component';
import { LogarithmicaxisComponent } from './highcharts/logarithmicaxis/logarithmicaxis.component';
import { CustomentranceComponent } from './highcharts/customentrance/customentrance.component';
import { ForecastComponent } from './highcharts/forecast/forecast.component';
import { Annotation } from 'highcharts/highcharts.src';
import { AnnotationsComponent } from './highcharts/annotations/annotations.component';
import { TimedataComponent } from './highcharts/timedata/timedata.component';
import { DataComponent } from './data/data.component';
import { AreachartComponent } from './highcharts/areachart/areachart.component';
import { PercentageComponent } from './highcharts/percentage/percentage.component';
import { StakedareaComponent } from './highcharts/stakedarea/stakedarea.component';
import { ArearangeComponent } from './highcharts/arearange/arearange.component';
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
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { PieDrilldownComponent } from './pie-drilldown/pie-drilldown.component';
import { PieLegendComponent } from './pie-legend/pie-legend.component';
import { PieGradientComponent } from './highcharts/pie-gradient/pie-gradient.component';
import { RadiusPieComponent } from './highcharts/radius-pie/radius-pie.component';
import { CirclePieComponent } from './highcharts/circle-pie/circle-pie.component';
import { DonutChartsComponent } from './highcharts/donut-charts/donut-charts.component';
import { BubbleChartsComponent } from './highcharts/bubble-charts/bubble-charts.component';
import { ScatterBubbleComponent } from './highcharts/scatter-bubble/scatter-bubble.component';
import { ScatterPlotComponent } from './highcharts/scatter-plot/scatter-plot.component';
import { TimelineComponent } from './highcharts/timeline/timeline.component';
import { DualLineColumnComponent } from './highcharts/dual-line-column/dual-line-column.component';

const routes: Routes = [
  // {path:'' , component: LinechartComponent},
  // {path:'linechart' , component: LinechartComponent},
  // {path:'data-lables' , component: DataLablesComponent},
  // {path:'logarithmicaxis' , component: LogarithmicaxisComponent},
  // {path:'forecast' , component: ForecastComponent},
  // {path:'annotations' , component: AnnotationsComponent},
  // {path:'data' , component: DataComponent},
  // {path:'areachart' , component: AreachartComponent},
  // {path:'percentage' , component: PercentageComponent},
  // {path:'stakedarea' , component: StakedareaComponent},
  {path:'' , component: ArearangeComponent},
   {path:'arearange' , component: ArearangeComponent},
  {path:'basic-column' , component: BasicColumnComponent},
  {path:'bar-race' , component: BarRaceComponent},
  {path:'column-range' , component: ColumnRangeComponent},
  {path:'column' , component: ColumnComponent},
  {path:'fixed-placement' , component: FixedPlacementComponent},
  {path:'comparison' , component: ComparisonComponent},
  {path:'data-defined' , component: DataDefinedComponent},
  {path:'staked-bar' , component:StakedBarComponent},
  {path:'stacked-percentage-column' , component: StackedPercentageColumnComponent},
  {path:'drilldown' , component: DrilldownComponent},
  {path:'pie-chart' , component: PieChartComponent},
  {path:'donut-chart' , component: DonutChartComponent},
  {path:'pie-drilldown' , component: PieDrilldownComponent},
  {path:'pie-legend' , component: PieLegendComponent},
  {path:'pie-gradient' , component: PieGradientComponent},
  {path:'radius-pie' , component: RadiusPieComponent},
  {path:'circle-pie' , component: CirclePieComponent},
  {path:'donut-charts' , component: DonutChartsComponent},
  {path:'bubble-charts' , component: BubbleChartsComponent},
  {path:'scatter-bubble' , component: ScatterBubbleComponent},
  {path:'scatter-plot' , component: ScatterPlotComponent},
  {path:'timeline' , component: TimelineComponent},
  {path:'dual-line-column' , component: DualLineColumnComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
