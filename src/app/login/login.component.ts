import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username : string;
  public password : string; 
  public authenticated :boolean = false;
  submitted: boolean = false;
 

  constructor(  private router: Router){ }

  ngOnInit(){ }

  onsubmit(username:string,password:string){
    this.submitted = true;
    console.log("inside submit");
    
    if(this.username === "admin" && this.password === "admin") {
      this.authenticated = true;
      this.router.navigate(['/book-ride']);
    }
    else {
     this.authenticated = false;
     //this.router.navigate(['']);
    }
  }

}
