import { Component, OnInit } from "@angular/core";

import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  form = this.fb.group({
    first_name: ["", Validators.required],
    last_name: ["", Validators.required],
    phone: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required],
    password_confirmation: ["", Validators.required],
  });

  errors = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    // console.warn(this.form.value);

    const first_name = this.form.controls["first_name"].value;
    const last_name = this.form.controls["last_name"].value;
    const phone = this.form.controls["phone"].value;
    const email = this.form.controls["email"].value;
    const password = this.form.controls["password"].value;
    const password_confirmation = this.form.controls["password_confirmation"]
      .value;

    this.userService
      .register(
        first_name,
        last_name,
        phone,
        email,
        password,
        password_confirmation
      )
      .subscribe(
        (response) => {
          // console.log(response)
          this.router.navigate(["/login"]);
        },
        (error) => {
          // console.log(error);
          this.errors = error.error.message;
          console.log(this.errors);
        }
      );
  }
}
