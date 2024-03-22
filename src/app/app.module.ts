import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './product-list/product-list.component';

import { FiltraTesto } from './shared/filter.pipe';
import { ProductListDetailComponent } from './product-list-detail/product-list-detail.component';

import { AppRoutes } from './app.routes';

import { StarComponent } from './shared/star.component';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    FiltraTesto,
    ProductListDetailComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutes
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
