import { Component, OnInit  } from '@angular/core';
import {AllpostService} from '../allpost.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CommentsService } from '../comments.service';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-allpost',
  templateUrl: './allpost.component.html',
  styleUrls: ['./allpost.component.css']
})
export class AllpostComponent implements OnInit{
  allPosts:any;
  loginuser:any;
  username:any;
  angForm:any;

  constructor(private allpostService :AllpostService,private fb:FormBuilder,private commentService:CommentsService,private postsService:PostsService) {
    this.createForm();
  }

  getandshowDataModel(allPost){
    console.log(allPost);

  }


  createForm(){
    this.angForm = this.fb.group({
      comment:['',Validators.minLength(2) ]
    });
  }
  addComment(postid,comment){

    console.log(postid+" asas "+comment+" " +this.loginuser.email);

    this.commentService.addComment(this.loginuser.email,postid,comment).subscribe(res => {console.log(res) ,this.allPost();});
    this.angForm.reset();

  }

  deleteComment(id){
    if(window.confirm('Are sure you want to delete this Comment ?')){
         this.commentService.deleteComment(id).subscribe(res => { console.log(res) ,this.allPost();} );
    }
  }
  deletePost(postid){
    if(window.confirm('Are sure you want to delete this Post ?')) {
      this.postsService.deletePost(postid).subscribe(res => {
        console.log(res), this.allPost()
      })
    }
  }
  editComment(comment,i){

  }

   allPost(){
     this.allpostService.activeAllPost().subscribe(posts => {
       if(!posts){
         console.log("No Any Active Post")
       }else {

         this.allPosts = posts;
         console.log(this.allPosts);
       }

     });

}

    // this.allpostService.activeAllPost().subscribe(res => {console.log(res); setTimeout(() => {this.activeAllPost1()},3000); });




  ngOnInit() {
    this.allPost();
    this.loginuser = JSON.parse(localStorage.getItem('user')) ;
 /*   window.setInterval(() => {this.allpostService.activeAllPost().subscribe(err => {
    this.noActivepost = err;
    if(this.noActivepost.code == '204'){
      console.log("i m code 204 block")
    }else{
     this.allPosts = err; console.log(this.allPosts)  }}) },5000);*/

  }


}
