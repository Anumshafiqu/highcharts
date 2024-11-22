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

const routes: Routes = [
  {path:'' , component: LinechartComponent},
  {path:'linechart' , component: LinechartComponent},
  {path:'data-lables' , component: DataLablesComponent},
  {path:'logarithmicaxis' , component: LogarithmicaxisComponent},
  {path:'forecast' , component: ForecastComponent},
  {path:'annotations' , component: AnnotationsComponent},
  {path:'data' , component: DataComponent},
  {path:'areachart' , component: AreachartComponent},
  {path:'percentage' , component: PercentageComponent},
  {path:'stakedarea' , component: StakedareaComponent},
  {path:'arearange' , component: ArearangeComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
