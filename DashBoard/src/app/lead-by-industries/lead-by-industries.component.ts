import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';




@Component({
  selector: 'app-lead-by-industries',
  templateUrl: './lead-by-industries.component.html',
  styleUrls: ['./lead-by-industries.component.scss']
})
export class LeadByIndustriesComponent implements OnInit {


  // chart = new Chart({
  //   chart: {
  //     type: 'bar',
  //     height: 325
  //   },
  //   title: {
  //     text: 'Lead By Industries'
  //   },
  //   xAxis: {
  //     categories: [
  //       'Jan',
  //       'Feb',
  //       'Mar',
  //       'Apr',
  //       'May',
  //       'Jun',
  //       'Jul',
  //       'Aug',
  //       'Sep',
  //       'Oct',
  //       'Nov',
  //       'Dec'
  //     ]
  //   },
  //   yAxis: {
  //     title: {
  //       text: 'Revenue in $'
  //     }
  //   },
  //   series: [
  //     {
  //       name: "Pending",
  //       type: "line",
  //       color: '#044342',
  //       data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196]
  //     },
  //     {
  //       name: 'Followups',
  //       type: 'line',
  //       color: '#7e0505',
  //       data: [
  //         47, 52, 44, 35, 58, 69, 32, 53, 71, 82, 99, 159
  //       ]
  //     },
  //     {
  //       name: 'Facebook',
  //       type: 'line',
  //       color: '#ed9e20',
  //       data: [
  //         17, 22, 14, 25, 18, 19, 22, 43, 11, 32, 29, 59
  //       ]
  //     },
  //   ],
  //   credits: {
  //     enabled: false
  //   }
  // })


  chart = new Chart({
    chart: {
      type: 'column', // Use 'column' for a bar chart
      height: 325
    },
    title: {
      text: 'Lead By Industries'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in $'
      }
    },
    
    series: [
      {
        name: "Pending",
        type:"bar",
        color: '#044342',
        data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196]
      },
      {
        name: 'Followups',
        type:"column",
        color: '#7e0505',
        data: [
          47, 52, 44, 35, 58, 69, 32, 53, 71, 82, 99, 159
        ]
      },
      {
        name: 'Facebook',
        type:"bar",
        color: '#ed9e20',
        data: [
          17, 22, 14, 25, 18, 19, 22, 43, 11, 32, 29, 59
        ]
      },
    ],
    credits: {
      enabled: false
    }
  });
  



  constructor() { }

  ngOnInit(): void {
  }

}
