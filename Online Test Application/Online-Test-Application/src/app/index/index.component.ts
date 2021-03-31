import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  selectedAnswers: Array<string>=[];
  options1= ['Joe Biden', 'Trump', 'Modi', 'Kim'];
  options2= ['Cricket', 'Hockey', 'Football', 'Swimming'];
  options3= ['Hyderabad', 'Delhi', 'Mumbai', 'Chennai'];
  options4= ['Five', 'Six', 'Seven', 'Eight'];
  options5= ['One', 'Two', 'Three', 'Four'];
  options6=['Austin', 'Dallas', 'Houston', 'San Antonio'];
  options7=['KCR','Bala Krishna','Modi','Rahul'];
  options8=['Mark','Jeff','Musk', 'Steve'];
  options9=['Abboot', 'John', 'Tom', 'Harry'];
  options10=['Jamsetji', 'Ratan Tata', 'JRD Tata', 'Durabji Tata'];

  answers=['Joe Biden','Hockey','Delhi','Seven','Four','Austin','Modi','Mark','Abboot','Jamsetji']
  score: number=0;
  isCorrect:boolean;
  isPassed:boolean=false;
  isFailed: boolean=false;
  constructor() { }


  ngOnInit(): void {
  }

  incrementscore(option){
    console.log("option: ", option);
    if(this.answers.indexOf(option) > -1){
      console.log("Correct")
      this.score=this.score+1;
      console.log(this.score);
    }
  }

  submitexam(){
    if(this.score>5){
      this.isPassed=true;
    }
    else{
      this.isFailed=true
    }
  }

  

}
