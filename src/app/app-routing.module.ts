import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookRideComponent } from './book-ride/book-ride.component';
import { OfferrideComponent} from './offerride/offerride.component'
import { LoginComponent } from './login/login.component'

const routes: Routes = [
 {path:'book-ride' , component : BookRideComponent},
 {path:'offer-ride' , component : OfferrideComponent } ,
 {path:'login' , component : LoginComponent } ,
 { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
