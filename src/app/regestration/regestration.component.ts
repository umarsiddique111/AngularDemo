import { Component, OnInit } from '@angular/core';
import { RegistartionService } from '../registartion.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.css']
})
export class RegestrationComponent implements OnInit {
  angForm: FormGroup;
  successMessage:String;
  constructor(private registrationService : RegistartionService, private fb :FormBuilder) {
    this.createForm();
  }
  createForm(){
    this.angForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    });
  }
  registration(email,password) {
    this.registrationService.registration(email,password).subscribe(success => this.successMessage ="successfully Registration ",
      error => console.log(error));
    this.angForm.reset();
    setTimeout(() => this.successMessage = "", 3000);
  }
  ngOnInit() {
  }

}
