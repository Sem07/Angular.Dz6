import { Component, OnInit } from '@angular/core';
import { User } from './models/User';
import { UsersService } from './service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dz6';
  users: User[];
  constructor(private userService: UsersService){};
  ngOnInit(): void{
    this.userService.getUsers().subscribe(value => {this.users = value})
  }
}
