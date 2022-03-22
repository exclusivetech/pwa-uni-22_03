import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    StatisticsComponent,
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ]
})
export class StatisticsModule { }
