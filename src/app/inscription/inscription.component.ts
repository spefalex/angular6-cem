import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { AppService } from "../services/app.service";
import { StorageService } from "../services/storage-service";
export interface TypeCompte {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-inscription",
  templateUrl: "./inscription.component.html",
  styleUrls: ["./inscription.component.css"]
})
export class InscriptionComponent implements OnInit {
  inscriptionForm: FormGroup;
  messages: any;
  errors: any;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  selected: string;

  typeCompte: TypeCompte[] = [
    { value: "adm", viewValue: "Admin" },
    { value: "frs", viewValue: "Fournisseur" }
  ];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private appService: AppService,
    private storage: StorageService
  ) {}

  onSubmit() {
   
    if (this.inscriptionForm.invalid) {
      if(this)
      return;
    
    } else {
      this.submitted = true;
      const User = {
        username: this.inscriptionForm.value.username,
        password: this.inscriptionForm.value.password,
        email: this.inscriptionForm.value.email,
        typecompte: this.selected
      };
      this.userService.inscription(User).then(response => {
        this.submitted = false;
        if (response["code"] === 200) {
          localStorage.setItem(
            "info_user",
            JSON.stringify({
              username :this.inscriptionForm.value.username,
              token: response["token"],
              status_compte: response["statusCompte"]
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
    return this.inscriptionForm.controls;
  }
  ngOnInit() {
    this.inscriptionForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      password2: ["", Validators.required],
      email: ["", Validators.required]
    });
  }
}
