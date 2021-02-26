import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "../../services/user.service";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {

  form = this.fb.group({
    first_name: ["", Validators.required],
    last_name: ["", Validators.required],
    phone: ["", Validators.required],
    email: ["", Validators.required],
    password: ["",],
    password_confirmation: ["",],
  });

  errors = [];
  isNew: boolean = true;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isNew = false;
      this.getUser(id);
    }
  }

  getUser(id) {

    this.userService.get(id).subscribe(
      (user: any) => {

        this.form.setValue({
          first_name: user.first_name,
          last_name: user.last_name,
          phone: user.phone,
          email: user.email,
          password: "",
          password_confirmation: "",
        })
      },
      (error) => {
        console.log(error);
        this.router.navigate(["/users"]);
      }
    );
  }


  handleSave() {
    const data = this.form.value;
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.update(data, id)
    } else {
      this.create(data)
    }
  }

  create(data) {

    this.userService.create(data).subscribe(
      (response) => {

        this.router.navigate(["/users"]);
      },
      (error) => {
        console.log(error);
        this.errors = error.error.message;
      }
    );
  }

  update(data, id) {
    this.userService.udpate(data, id).subscribe(
      (response) => {

        this.router.navigate(["/users"]);
      },
      (error) => {
        console.log(error);
        this.errors = error.error.message;
      }
    );
  }

}
