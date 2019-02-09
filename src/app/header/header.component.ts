import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  username: string;
  status: string;
  constructor() {}

  ngOnInit() {
    let usrname = JSON.parse(localStorage.getItem("info_user"));
    this.username = usrname.username;
    this.status = usrname.status_compte;
  }
}
