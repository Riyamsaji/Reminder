import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerform=this.fb.group({
  userid:['',[Validators.required,Validators.pattern('[0-9]*')]],
  username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})
  constructor(private data:DatabaseService,private fb:FormBuilder,private router:Router) 
    
   { }

  ngOnInit(): void {
  }
register(){
  console.log(this.registerform);
  
var userid=this.registerform.value.userid;
var  username=this.registerform.value.username;
var password=this.registerform.value.password;
var result=this.data.register(userid,username,password)
if(result){
  this.router.navigateByUrl("")
}
else{
  this.router.navigateByUrl("")
}
}
}
