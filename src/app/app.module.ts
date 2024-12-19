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
import { SynchronizedChartsComponent } from './highcharts/synchronized-charts/synchronized-charts.component';
import { ColumnPieComponent } from './highcharts/column-pie/column-pie.component';
import { StyledmodeComponent } from './highcharts/styledmode/styledmode.component';
import { StylePieComponent } from './highcharts/style-pie/style-pie.component';
import { AccessiblechartsComponent } from './highcharts/accessiblecharts/accessiblecharts.component';
import { LineStyleComponent } from './highcharts/line-style/line-style.component';
import { PatternsPieComponent } from './highcharts/patterns-pie/patterns-pie.component';
import { AudiochartsComponent } from './highcharts/audiocharts/audiocharts.component';
import { SonificationChartsComponent } from './highcharts/sonification-charts/sonification-charts.component';
import { SonifiedChartsComponent } from './highcharts/sonified-charts/sonified-charts.component';
import { DynamicchartsComponent } from './highcharts/dynamiccharts/dynamiccharts.component';
import { GuagechartsComponent } from './highcharts/guagecharts/guagecharts.component';
import { MultipleKPIgaugeComponent } from './highcharts/multiple-kpigauge/multiple-kpigauge.component';
import { BulletgrpahComponent } from './highcharts/bulletgrpah/bulletgrpah.component';
import { HeatmapComponent } from './highcharts/heatmap/heatmap.component';
import HeatmapModule from 'highcharts/modules/heatmap'; // Import the heatmap module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalenderHeatmapComponent } from './highcharts/calender-heatmap/calender-heatmap.component';
import { TreeMapComponent } from './highcharts/tree-map/tree-map.component';
import { MapInterpolationHeatComponent } from './highcharts/map-interpolation-heat/map-interpolation-heat.component';
import { InterpolationmapComponent } from './highcharts/interpolationmap/interpolationmap.component';
import { LargetreemapComponent } from './highcharts/largetreemap/largetreemap.component';
import { TreegraphComponent } from './highcharts/treegraph/treegraph.component';
import { SankeyDiagramComponent } from './highcharts/sankey-diagram/sankey-diagram.component';
import { SunbrustComponent } from './highcharts/sunbrust/sunbrust.component';
import { ArcdiagramComponent } from './highcharts/arcdiagram/arcdiagram.component';
import { PolarchartsComponent } from './highcharts/polarcharts/polarcharts.component';
import { VeuuDiagramComponent } from './highcharts/veuu-diagram/veuu-diagram.component';
import { NeuralChartComponent } from './highcharts/neural-chart/neural-chart.component';
import { DrawinggeneralComponent } from './highcharts/drawinggeneral/drawinggeneral.component';
import { PictorialchartComponent } from './highcharts/pictorialchart/pictorialchart.component';
import { PiramidChartComponent } from './highcharts/piramid-chart/piramid-chart.component';
import { SeriesRangeComponent } from './highcharts/series-range/series-range.component';
import { ParetochartComponent } from './highcharts/paretochart/paretochart.component';
import { BarbComponent } from './highcharts/barb/barb.component';
import { DependencewheelComponent } from './highcharts/dependencewheel/dependencewheel.component';
import { ParallelComponent } from './highcharts/parallel/parallel.component';
import { ChartFlameComponent } from './highcharts/chart-flame/chart-flame.component';
import { RoseWindComponent } from './highcharts/rose-wind/rose-wind.component';
import { CharttimelineComponent } from './highcharts/charttimeline/charttimeline.component';
import { FunnelChartComponent } from './highcharts/funnel-chart/funnel-chart.component';





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
    PieChartComponent,
    DonutChartComponent,
    PieDrilldownComponent,
    PieLegendComponent,
    PieGradientComponent,
    RadiusPieComponent,
    CirclePieComponent,
    DonutChartsComponent,
    BubbleChartsComponent,
    ScatterBubbleComponent,
    ScatterPlotComponent,
    TimelineComponent,
    DualLineColumnComponent,
    SynchronizedChartsComponent,
    ColumnPieComponent,
    StyledmodeComponent,
    StylePieComponent,
    AccessiblechartsComponent,
    LineStyleComponent,
    PatternsPieComponent,
    AudiochartsComponent,
    SonificationChartsComponent,
    SonifiedChartsComponent,
    DynamicchartsComponent,
    GuagechartsComponent,
    MultipleKPIgaugeComponent,
    BulletgrpahComponent,
    HeatmapComponent,
    CalenderHeatmapComponent,
    TreeMapComponent,
    MapInterpolationHeatComponent,
    InterpolationmapComponent,
    LargetreemapComponent,
    TreegraphComponent,
    SankeyDiagramComponent,
    SunbrustComponent,
    ArcdiagramComponent,
    PolarchartsComponent,
    VeuuDiagramComponent,
    NeuralChartComponent,
    DrawinggeneralComponent,
    PictorialchartComponent,
    PiramidChartComponent,
    SeriesRangeComponent,
    ParetochartComponent,
    BarbComponent,
    DependencewheelComponent,
    ParallelComponent,
    ChartFlameComponent,
    RoseWindComponent,
    CharttimelineComponent,
    FunnelChartComponent,


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
