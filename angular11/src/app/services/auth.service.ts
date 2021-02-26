import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  configUrl = environment.domain

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const data = { email: email, password: password };
    return this.http.post(this.configUrl + "/login", data);
  }

  register(
    first_name: string,
    last_name: string,
    phone: string,
    email: string,
    password: string,
    password_confirmation: string
  ) {
    const data = {
      first_name: first_name,
      last_name: last_name,
      phone: phone,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    };
    return this.http.post(this.configUrl + "/register", data);
  }
}
