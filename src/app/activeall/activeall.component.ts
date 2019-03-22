import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-activeall',
  templateUrl: './activeall.component.html',
  styleUrls: ['./activeall.component.css']
})
export class ActiveallComponent implements OnInit  {
  userForm1:any;
  constructor() { }
/*  userForm = new FormGroup({
    abc: new FormControl('')
  });*/

  ngOnInit() {

  }
  onFormSubmit(userForm) {
    // TODO: Use EventEmitter with form value

    this.userForm1 =userForm.abc.value;
    console.log("sadasd "+this.userForm1);

  }
  /*activePost(formvalue){
    console.log(formvalue);

    /!* if(eventac == '1'){
       console.log("i m Active"+eventac);
     }else{
       console.log("i m InActive");
     }*!/
  }*/
}
