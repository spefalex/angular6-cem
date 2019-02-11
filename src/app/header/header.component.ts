import { Component, OnInit } from "@angular/core";
import { StorageService } from "../services/storage-service";
import { Router } from "@angular/router";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  username: string;
  status: string;
  constructor(private storageService :StorageService,private router:Router) {}

  ngOnInit() {
    let usrname = JSON.parse(localStorage.getItem("info_user"));
    this.username = usrname.username;
    this.status = usrname.status_compte;
  }

  deconnecter() {
    this.storageService.clear();
    this.router.navigate(["/"]);

  }
}
