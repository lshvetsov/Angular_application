import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  activeUsers: string[] = []
  constructor(private userService: UsersService) {}

  onSetToInactive(id: number) {
    this.userService.moveUserToInactive(id);
  }
  ngOnInit(): void {
    this.activeUsers = this.userService.activeUsers;
  }
}
