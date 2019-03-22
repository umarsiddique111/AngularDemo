import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) { }

  addComment(username,postid,comment){
    const uri ='http://localhost:4000/comment/add';
    const obj={
      username:username,
      postid:postid,
      comment:comment
    };

    return this.http.post(uri,obj);

  }
  deleteComment(id){
    const uri ='http://localhost:4000/deletecomment/'+id;
    return this.http.delete(uri);
  }


}

