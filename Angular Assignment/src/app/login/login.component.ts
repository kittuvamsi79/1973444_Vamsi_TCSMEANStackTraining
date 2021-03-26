import { SafeMethodCall } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedfunctionService } from '../sharedfunction.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private shared: SharedfunctionService,
    private router: Router
  ) { }

  username: string;
  password: string;
  dbusername: string;
  dbpwd:string;

  isValid: boolean=true;

  ngOnInit(): void {
  }

  login(){

    this.dbusername = this.shared.loadusername();
    this.dbpwd = this.shared.loadpwd();

    console.log("username:", this.dbusername);
    console.log("password",  this.dbpwd);

    if(this.username!=null && this.username== this.dbusername && this.password==this.dbpwd){
      this.isValid=true;
    }

    else{
      this.isValid=false;
    }

    if(this.isValid){
      this.router.navigate(['/portfolio']);
    }

  }

  
}
