import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  image="./assets/images/image1.jpg"
loginform=this.fb.group({
  userid:['',[Validators.required,Validators.pattern('[0-9]*')]],
  password:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
})
  constructor(private fb:FormBuilder,private data:DatabaseService,private router:Router) { }

  ngOnInit(): void {
  }
 login(){
   var userid=this.loginform.value.userid;
   var password=this.loginform.value.password;
   var result=this.data.login(userid,password);
   if(result){
     this.router.navigateByUrl("dashboard")
   }
   else{
     this.router.navigateByUrl("register")
   }
 }
}
