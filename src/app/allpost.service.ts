import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllpostService {

  constructor(private http:HttpClient) { }

  activeAllPost(){
    const uri ='http://localhost:4000/allpost';
    return this.http.get(uri);
  }
}
