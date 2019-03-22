import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {removeDir} from '@angular/forms/src/directives/shared';
import {invalid} from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  angForm: FormGroup;
  successMessage:String;
  username:any;
  imageUrl:String;
  fileToUpload:File =null;
  constructor(private postsService : PostsService, private fb :FormBuilder) {
    this.createForm();

  }
  handleFileInput(file:FileList){
  this.fileToUpload = file.item(0);
  var reader = new FileReader();
  reader.onload = (event:any) =>{
    this.imageUrl = event.target.result;

  }
  reader.readAsDataURL(this.fileToUpload);

   /* event.srcElement.value = null;*/
  }

  createForm(){
    this.angForm = this.fb.group({
      title:['',Validators.required],
      text:['',Validators.required],

    });
  }
     addPost(title,text) {
    this.username = JSON.parse(localStorage.getItem("user"));
       this.postsService.addPost(title,text,this.username.email,this.username.user_id,this.imageUrl).subscribe(success => this.successMessage ="successfully post Submited",
       error => console.log(error));
       this.angForm.reset();

       this.imageUrl = null;
       setTimeout(() => this.successMessage = "", 3000);
     }



  ngOnInit() {

  }

}
