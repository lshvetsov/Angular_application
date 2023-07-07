import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  inactiveUsers: string[] = []
  constructor(private userService: UsersService) {}

  onSetToActive(id: number) {
    this.userService.moveUserToActive(id)
  }
  ngOnInit(): void {
    this.inactiveUsers = this.userService.inactiveUsers;
  }
}
