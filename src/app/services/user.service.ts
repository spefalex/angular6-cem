import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../../models/user.model";
import { reject } from "q";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  baseUrl: string = "http://127.0.0.1:3200";

  getUsers() {
    return this.http.get(this.baseUrl +'/readUser');
  }

  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl + "/" + id);
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }
  verifieToken(token) {
    return this.http.get(this.baseUrl + "/apiCem?token=" + token);
  }

  inscription(user: User) {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + "/inscription", user).subscribe(data => {
        resolve(data);
      });
    }).catch(err => {
      reject(err);
    });
  }

  login(user: User) {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + "/login", user).subscribe(data => {
        resolve(data);
      });
    }).catch(err => {
      reject(err);
    });
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl + "/" + user.id_user, user);
  }

  deleteUser(user: User) {
    return this.http.post(this.baseUrl + "/deleteUser", user)
  }
}
