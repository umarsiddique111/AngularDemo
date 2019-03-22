import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  addPost(title,text,postuser,userid,image){
    const uri ='http://localhost:4000/post/add';
    const obj = {
      title:title,
      text:text,
      postuser:postuser,
      userid:userid,
      image:image

    };
    return this.http.post(uri,obj);
  }

  deletePost(postid){
    const uri ='http://localhost:4000/deletepost/'+postid;
    return this.http.delete(uri);
  }



}
