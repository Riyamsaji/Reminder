import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
addEventform=this.fb.group({
 
  name:[''],
  date:['']
})
  constructor(private data:DatabaseService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }
  addEvent(){
    var name=this.addEventform.value.name;
    var date=this.addEventform.value.date;
    this.data.addEvent(name,date);


    
  }
 }

  
  

  


