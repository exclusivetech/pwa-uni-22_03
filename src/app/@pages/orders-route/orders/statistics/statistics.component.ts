import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'ext-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  barChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartType: ChartType = 'bar';

  barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];

  barChartLegend = true;
  barChartPlugins = [];

  constructor() { }

  ngOnInit(): void {
  }

}
