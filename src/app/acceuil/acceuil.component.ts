import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
import { AppService } from "../services/app.service";
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: "app-acceuil",
  templateUrl: "./acceuil.component.html",
  styleUrls: ["./acceuil.component.css"]
})
export class AcceuilComponent implements OnInit {
 
  constructor(private userService: UserService, private router: Router,   private appService: AppService) {}

  ngOnInit() {
    let usrname = JSON.parse(localStorage.getItem("info_user"));
    this.userService.verifieToken(usrname.token).subscribe(res => {
      if (res["code"] === 200) {
        history.pushState(null, null, location.href);
        window.onpopstate = function(event) {
          history.go(1);
        };
      } else {
        this.appService.notify("Veuillez vous connecter à nouveau ")
        this.router.navigate(["/"]);
      }
    });
  }

}
