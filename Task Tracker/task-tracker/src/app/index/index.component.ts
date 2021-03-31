import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public id: string;
  public name: string;
  public deadLine: Date;
  public task: string;
  public rows: Array<{id: string, name: string, task: string, deadLine: Date}> = [];

  submitForm(){
    this.rows.push( {id: this.id, name: this.name, task: this.task, deadLine: this.deadLine} );
    this.id = null;
    this.name = null;
    this.task = null;
    this.deadLine=null;

  }


  resetForm(){
    this.id = null;
    this.name = null;
    this.task = null;
    this.deadLine=null;
  }

}
