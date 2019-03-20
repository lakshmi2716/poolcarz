import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})
export class BookRideComponent implements OnInit {

  rides = [
    {startpoint:"Vanrose Junction", endpoint:"Infosys", seatsavail:"3"},
    {startpoint:"PTP", endpoint:"Infosys", seatsavail:"2"},
    {startpoint:"Infosys", endpoint:"East Fort", seatsavail:"7"},
    {startpoint:"Infosys", endpoint:"Central Mall", seatsavail:"5"},
    {startpoint:"East Fort", endpoint:"Central Mall", seatsavail:"5"}
  ];
   
  filters :string;
  constructor(private route : Router) { }

  ngOnInit() {
  }

 toinfy(){
   console.log("inside toinfy");
   this.filters ="TO";
 }

 frominfy(){
  console.log("inside frominfy");
  this.filters ="FROM";
}

allrides(){
  console.log("inside allride");
  this.filters ="ALL";
}

offerride(){
  this.route.navigate(['/offer-ride']);
}

other()
{
  this.filters ="OTHER";
}

}
