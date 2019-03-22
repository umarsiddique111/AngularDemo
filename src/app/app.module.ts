import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegestrationComponent } from './regestration/regestration.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AllpostComponent } from './allpost/allpost.component';
import { ActiveallComponent } from './activeall/activeall.component';
import { PostComponent } from './post/post.component';
import { MypostComponent } from './mypost/mypost.component';
import { UserlistComponent } from './userlist/userlist.component';
import {HttpClientModule} from '@angular/common/http';
import  {PostsService } from './posts.service';
import {RegistartionService} from './registartion.service';
import {LoginuserService} from './loginuser.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {AuthGuard} from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { CommentsService } from './comments.service';

// noinspection TsLint
let routes : Routes = [
/*  {
    path: '',
    redirectTo: "login",
    pathMatch: "full"

  },*/
  {path:'login', component: LoginComponent},
  /*{path:'**',redirectTo: '/login', pathMatch: 'full' },*/
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'register',
    component:RegestrationComponent,


  },
  {
    path: 'home',
    canActivate : [AuthGuard],
    component: HomeComponent,
    children :[

      {
        path: 'activeall',
        component:ActiveallComponent


      },
      {
        path: 'allposts',
        component:AllpostComponent
        /*outlet: 'allpost'*/

      },
      {
        path: 'post',
        component:PostComponent

      },
      {
        path: 'mypost',
        component:MypostComponent

      },
      {
        path: 'userlist',
        component:UserlistComponent

      },
      {
        path: 'logout',
        component:LogoutComponent

      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },



    ]
  },


]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegestrationComponent,
    HomeComponent,
    SidebarComponent,
    AllpostComponent,
    ActiveallComponent,
    PostComponent,
    MypostComponent,
    UserlistComponent,
    LogoutComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) ,HttpClientModule ,ReactiveFormsModule,FormsModule// <-- debugging purposes only
  ],


  providers: [PostsService,RegistartionService,LoginuserService,AuthGuard,CommentsService,AllpostComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
