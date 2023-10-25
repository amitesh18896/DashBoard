import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { SalesByMonthComponent } from './sales-by-month/sales-by-month.component';
import { SalesByCategoryComponent } from './sales-by-category/sales-by-category.component';
import { LastFewTransactionsComponent } from './last-few-transactions/last-few-transactions.component';
import { TopThreeProductsComponent } from './top-three-products/top-three-products.component';
import { ChartModule } from 'angular-highcharts';
import { LeadBySourceComponent } from './lead-by-source/lead-by-source.component';
import { LeadByIndustriesComponent } from './lead-by-industries/lead-by-industries.component';
import { CheckrouteComponent } from './checkroute/checkroute.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  {
    path: 'abc',
    component: LeadByIndustriesComponent,
    data: { title: 'LeadByIndustriesComponent' }
  },
  {
    path: 'checkroute',
    component: CheckrouteComponent,
    data: { title: 'CheckrouteComponent' }
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    TopWidgetsComponent,
    SalesByMonthComponent,
    SalesByCategoryComponent,
    LastFewTransactionsComponent,
    TopThreeProductsComponent,
    LeadBySourceComponent,
    LeadByIndustriesComponent,
    CheckrouteComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ChartModule,
   
    RouterModule.forRoot(
      appRoutes
    ),
   
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
