import { Component, OnInit } from '@angular/core';
import { SharedfunctionService } from '../sharedfunction.service';
import { User } from '../user';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(
    private shared: SharedfunctionService,
    private userclass: User
  ) { }

  ngOnInit(): void {
  }

  user: string= this.shared.loadusername();

  enteredname: string;
  enteredphonenumber: number;

  users: User[];
  saveduser: User;

  saveuser(){
    this.saveduser.name = this.enteredname;
    this.saveduser.phonenumber=this.enteredphonenumber
    this.users.push(this.saveduser);

  }
  

}
