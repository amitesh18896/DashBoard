import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-lead-by-source',
  templateUrl: './lead-by-source.component.html',
  styleUrls: ['./lead-by-source.component.scss']
})
export class LeadBySourceComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Lead By Source'
    },
    xAxis: {
      categories: [
        'Webside',
        'ABC',
        'Facebook',
        'Internet',
        'Reference',
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in %'
      }
    },
    series: [
     {
      type: 'pie',
      data: [
        {
          name: 'Reference',
          y: 41.0,
          color: '#044342',
        },
        {
          name: 'ABC',
          y: 33.8,
          color: '#7e0505',
        },
        {
          name: 'Facebook',
          y: 6.5,
          color: '#ed9e20',
        },
        {
          name: 'Webside',
          y: 15.2,
          color: '#6920fb',
        },
        {
          name: 'Internet',
          y: 3.5,
          color: '#121212',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })

  constructor() { }

  ngOnInit(): void {
  }

}


