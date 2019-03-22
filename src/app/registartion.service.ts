import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistartionService {

  constructor(private http: HttpClient) { }

  registration(email,password){

    const uri ='http://localhost:4000/user/add';
    const obj = {
      email:email,
      password:password
    };
    return this.http.post(uri,obj);
  }
}
