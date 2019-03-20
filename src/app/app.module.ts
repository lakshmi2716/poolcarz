import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Seatvalidatordirective } from  './seatvalidator';
import { BookRideComponent } from './book-ride/book-ride.component';

import { OfferrideComponent } from './offerride/offerride.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RidefilterPipe } from './ridefilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookRideComponent,
    
    OfferrideComponent,
    LoginComponent,
    RidefilterPipe,
    Seatvalidatordirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
