import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { AppService } from "../services/app.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  messages: any;
  errors: any;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private appService: AppService
  ) {}

  onSubmit() {
    
    if (this.loginForm.invalid) {
      return;
    } else {
      this.submitted = true;
      const User = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      };
      this.userService.login(User).then(response => {
        this.submitted = false;
        if (response["code"] === 200) {
          localStorage.setItem(
            "info_user",
            JSON.stringify({
              username: this.loginForm.value.username,
              token: response["token"],
              status_compte: response["status_compte"],
              id_user: response["id_user"]
            })
          );
          this.appService.notify("bien authentifié");
          this.router.navigate(["acceuil"]);
        } else {
          this.submitted = false;
          this.appService.notify(response["message"]);
        }
      });
    }
  }
  get f() {
    return this.loginForm.controls;
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });

    this.mnSecure();
  }
  mnSecure() {
    history.pushState(null, null, location.href);
    window.onpopstate = function(event) {
      history.go(1);
    };
  }
}
