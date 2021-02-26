import { Component, OnInit } from "@angular/core";

import { UserService } from "../services/user.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  users;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = [];
    this.getUsers();
  }

  getUsers() {
    this.userService.find().subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handleDelete(id: number) {
    this.userService.delete(id).subscribe(
      (response) => {
        this.getUsers();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
