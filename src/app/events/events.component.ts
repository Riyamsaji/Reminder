import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
events:any
  constructor(private data:DatabaseService) { 
    this.events=this.data.getEvent();
    console.log(this.events);
    
  }
  ngOnInit(): void {
  }

}
