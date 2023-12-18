import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { T2Component } from './t2/t2.component';
import { T1Component } from './t1/t1.component';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'SELLER', component: SellerComponent },
  // other route configurations...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
