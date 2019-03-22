import { Component, OnInit } from '@angular/core';
import {AllpostComponent} from '../allpost/allpost.component';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']

})
export class SidebarComponent implements OnInit {
  username:any;
  constructor(private allpostComponent:AllpostComponent,private router: Router) {
    this.username = JSON.parse(localStorage.getItem('user')) ;
  }
  /*runallPostFuuc(){
  /!*  this.allpostComponent.allPost();*!/
    this.router.navigate(['/home/allposts']);
  }*/

  ngOnInit() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("backimg");   //remove the class
    body.classList.add("bgcolr");

  }

}
