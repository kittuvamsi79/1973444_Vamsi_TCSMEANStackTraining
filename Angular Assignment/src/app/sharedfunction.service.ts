import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedfunctionService {

  constructor() { }

  registerUsername:string;
  registerpwd:string;

  savedata(user, password){
    this.registerUsername=user;
    this.registerpwd=password;
    console.log("Service");
    console.log("registerUsername", this.registerUsername);
    console.log("registerpwd", this.registerpwd);
  }

  loadusername(){
    return this.registerUsername;
  }

  loadpwd(){
    return this.registerpwd;
  }
}
