import { Component, OnInit } from "@angular/core";

import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  form = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required],
  });

  error;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    // console.warn(this.form.value);

    const email = this.form.controls["email"].value;
    const password = this.form.controls["password"].value;

    this.userService.login(email, password).subscribe(
      (response) => {
        // console.log(response)

        localStorage.setItem("auth", JSON.stringify(true));
        this.router.navigate(["/users"]);
      },
      (error) => {
        this.error = error.error.message;
        console.log(error);
      }
    );
  }
}
