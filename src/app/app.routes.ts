import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListDetailComponent } from './product-list-detail/product-list-detail.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'product', component: ProductListComponent },
    { path: 'product/:id', component: ProductListDetailComponent },
    //{ path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })

export class AppRoutes {}