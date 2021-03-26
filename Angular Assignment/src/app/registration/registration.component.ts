import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SharedfunctionService } from '../sharedfunction.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(
    private shared: SharedfunctionService
  ) { }

  ngOnInit(): void {
  }

  firstName: string;
  lastName:string;
  userName:string;
  password:string;

  savedata(){
    console.log("userName", this.userName);
    console.log("password", this.password);
    this.shared.savedata(this.userName, this.password);
  }

}
