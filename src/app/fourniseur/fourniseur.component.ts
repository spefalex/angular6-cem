import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService} from "../services/user.service";

import { AppService } from "../services/app.service";
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material";
import { ProduitComponent } from "../produit/produit.component";
import { EditproduitComponent } from "../editproduit/editproduit.component";
import { URLSearchParams } from "@angular/http";

@Component({
  selector: 'app-fourniseur',
  templateUrl: './fourniseur.component.html',
  styleUrls: ['./fourniseur.component.css']
})
export class FourniseurComponent implements OnInit {
  dataSource: any;
  statusCompte: any;
  priceTotal: any;
  constructor( private userService: UserService,
    private dialog: MatDialog,

    private appService : AppService,
    private router :Router) { }

    ngOnInit() {
      
        this.userService.getUsers()
          .subscribe(data => {
            this.dataSource = data;
          });
      
    }

    deleteFournisseur(id_user) {
      const user = {
        id_user: id_user,
      };
      this.userService.deleteUser(user).subscribe(res => {
        this.appService.notify(res["message"]);
        this.router.navigateByUrl('acceuil', {skipLocationChange: true}).then(()=>
        this.router.navigate(["fourniseur"])); ;
      });
    }
}
