import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-offerride',
  templateUrl: './offerride.component.html',
  styleUrls: ['./offerride.component.css']
})
export class OfferrideComponent  {

  public username:string;
  public startloc:string;
  public destination:string;
  public car:string;
  public seats:number;

  constructor(private route : Router){
   
  }
submit(){
  this.route.navigate(['/book-ride']);
}
}
