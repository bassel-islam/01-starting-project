import { Component, Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  userId?:string ;
  get selectedUser(){
    return this.users.find((user) => user.id === this.userId);
  }
  onSelectUser(userId:string){
    this.userId = userId;
  }
}
