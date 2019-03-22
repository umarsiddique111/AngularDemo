import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  constructor(private http: HttpClient) { }

  loginUser(email,password){


    const obj = {
      email:email,
      password:password
    };
    const uri ='http://localhost:4000/user/login';
    return this.http.post(uri,obj);
  }
}
