import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  currentid = ""
  details: any = {
    1: { userid: 1, username: "Riya", password: "userone", events: [] },
    2: { userid: 2, username: "Miya", password: "usertwo", events: [] }
  }

  constructor() {
    this.getDetails();
  }


  saveDetails() {
    localStorage.setItem("data", JSON.stringify(this.details));
    if (this.currentid) {
      localStorage.setItem("currentuserid", JSON.stringify(this.currentid))
    }
  }
  getDetails() {
    this.details = JSON.parse(localStorage.getItem("data") || "")
    if(localStorage.getItem("currentuserid")){
      this.currentid=JSON.parse(localStorage.getItem("currentuserid")||"")
    }
  }
  getEvent() {
    return this.details[this.currentid].events
  }



  login(userid: any, password: any) {
    let userDetails = this.details;
    if (userid in userDetails) {
      if (password == userDetails[userid]["password"]) {
        this.currentid = userid;
        this.saveDetails()
        alert("login success")
        return true;
      }

      else {
        alert("invalid password");
        return false;
      }
    }
    else {
      alert("invalid user");
      return false;
    }
  }
  register(userid: any, username: any, password: any) {
    let userDetails = this.details;
    if (userid in userDetails) {
      alert("already exists");
      return true;
    }
    else {
      userDetails[userid] = { userid, username, password, events: [] }
      this.saveDetails();

      alert("successfully registered");
      return false;
    }
  }
  addEvent(name: string, date: any) {
    let userDetails = this.details;
    console.log([userDetails[this.currentid]]);
    
   userDetails[this.currentid].events.push({
     name:name,
     date:date
   })
   this.saveDetails();
    alert("event added succesfully")
    // return true
  }
}




