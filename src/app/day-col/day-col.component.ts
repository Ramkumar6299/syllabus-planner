import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-day-col',
  templateUrl: './day-col.component.html',
  styleUrls: ['./day-col.component.css']
})
export class DayColComponent implements OnInit {
  
  buttons: Array<any>= [];
  buttonRef: object= {};
  buttonRef1: object={};
  iter: number= 1;
  showTopic: boolean;
  topicsDisplay: Array<any>= [];
  currentButton: string= "";
  currentTopic: string= "";
  currentTitle: string="";
  currentType: string="";
  currentText: string= "";
  currentText1: string="";
  myForm;

  constructor(fb: FormBuilder, public modalService: NgbModal) {
    this.myForm= fb.group({
      'title' : fb.control(""),
      'type' : fb.control(""),
      'text': [''],
      'text1':['']
     
    })
    this.showTopic= false;
  }

  ngOnInit(): void {
  }

  addButton(){
    console.log(this.currentButton)
    this.buttons.push({val: "Day "+(this.iter)})
    this.buttonRef["Day "+this.iter]= {};
    this.showTopic= true;
    
    this.iter++;
    
  }
  showTopics(it: string){
    this.currentButton= it;
    this.topicsDisplay= Object.keys(this.buttonRef[it]);
  }
  addTopic(){
    let keylength= Object.keys(this.buttonRef[this.currentButton]).length
    console.log(keylength,)
    this.buttonRef[this.currentButton]["topic"+(++keylength)]= {};
    this.buttonRef[this.currentButton]["topic"+(keylength)].value= "topic"+keylength;
    console.log(this.buttonRef)
    this.showTopics(this.currentButton)
  }

  showText(curt: string,content){
    this.currentTopic= curt;
    this.modalService.open(content,{ size: 'lg' });
    this.currentTitle= this.buttonRef[this.currentButton][this.currentTopic].value;
    this.currentType= this.buttonRef[this.currentButton][this.currentTopic].value;
    this.currentText= this.buttonRef[this.currentButton][this.currentTopic].value;
    this.currentText1= this.buttonRef[this.currentButton][this.currentTopic].value;

  console.log(this.currentText)
  }

  saveText(form: FormGroup){
    console.log(this.currentButton, this.currentTopic, this.currentText, form.value.text)
    this.buttonRef[this.currentButton][this.currentTopic].value= form.value.title;
    this.buttonRef[this.currentButton][this.currentTopic].value= form.value.type;
    this.buttonRef[this.currentButton][this.currentTopic].value= form.value.text;
    this.buttonRef[this.currentButton][this.currentTopic].value= form.value.text1;
    console.log(this.buttonRef)
  }
}