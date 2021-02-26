import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root",
})
export class UserService {
  configUrl = environment.domain

  constructor(private http: HttpClient) {}

  find() {
    return this.http.get(this.configUrl + "/users");
  }

  get(id: number) {
    return this.http.get(`${this.configUrl}/users/${id}`);
  }

  create(data) {
    return this.http.post(`${this.configUrl}/users`, data);
  }

  udpate(data, id: number) {
    return this.http.put(`${this.configUrl}/users/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.configUrl}/users/${id}`);
  }
}
