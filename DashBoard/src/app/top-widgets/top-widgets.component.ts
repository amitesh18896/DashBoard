import { Component, OnInit } from '@angular/core';
import {  Route, Router, Routes } from '@angular/router';
import {
  faLocation,
  faShop,
  faBoxes,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss']
})
export class TopWidgetsComponent  implements OnInit{

  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigateToOtherComponent() {
    this.router.navigate(["/checkroute"]); // Use the path you defined in your routes
  }
}
