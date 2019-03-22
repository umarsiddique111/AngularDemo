import { Component, OnInit } from '@angular/core';
import { LoginuserService } from '../loginuser.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   angForm:any;
  successMessage:any;
  msg:any;
  user:any;

  constructor(private loginUserservice:LoginuserService,private fb:FormBuilder,private router: Router) {
    this.createForm();
  }
  createForm(){
    this.angForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required ]
    });
  }

  loginUser(email,password){
    this.loginUserservice.loginUser(email,password)
      .subscribe(  error => {this.successMessage = error;
      if(this.successMessage.code == '200'){
        localStorage.setItem('user',JSON.stringify(this.successMessage));
       this.user = JSON.parse(localStorage.getItem('user')) ;
        console.log(this.user)
       this.router.navigate(['/home']);
      }else{
        console.log(this.successMessage.success)
        this.msg = this.successMessage.success;

      }});

  /*for(let msg in this.successMessage) {
    console.log(msg = this.msg);
  }*/

    this.angForm.reset();

  }

  ngOnInit(){}

}
