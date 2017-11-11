import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';

import {Observable} from "rxjs/Observable";
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  users : any;
  constructor(private userService: UserService, private http : HttpClient){}
  
  ngOnInit() : void {
    // this.users = this.userService.getAllUsers();
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(
      data => { 
        console.log(data);
        this.users = data;
      },
      err => console.log("Error Occured")
    );
  }
}
