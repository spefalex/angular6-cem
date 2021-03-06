import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CommandeService } from "../services/commande.service";

import { AppService } from "../services/app.service";
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material";
import { EditcommandeComponent } from "../editcommande/editcommande.component";
@Component({
  selector: "app-boncommande",
  templateUrl: "./boncommande.component.html",
  styleUrls: ["./boncommande.component.css"]
})
export class BoncommandeComponent implements OnInit {
  dataSource: any;
  priceTotal: any;
  statusCompte: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private commandeService: CommandeService,
    private appService: AppService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    let info = JSON.parse(localStorage.getItem("info_user"));
    this.statusCompte = info.status_compte;
    if (this.statusCompte == "frs") {
      this.commandeService.lireCommandeFrs(info.id_user).subscribe(res => {
        this.dataSource = res;
      });

      this.priceTotal = localStorage.getItem("priceCommandeFrs");

    } else {
      this.priceTotal = localStorage.getItem("totalPrice");
      this.commandeService.lireCommande().subscribe(data => {
        this.dataSource = data;
      });
    }
 
  }

  editCommande(boncommande, nomproduit, typecategorie) {
    const dialogRef = this.dialog.open(EditcommandeComponent, {
      width: "250px",
      data: {
        boncommande: boncommande,
        nomproduit: nomproduit,
        typecategorie: typecategorie
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  delCommande(id_commande) {
    const commande = {
      id_commande: id_commande
    };

    this.commandeService.delCommande(commande).subscribe(res => {
      this.appService.notify(res["message"]);
      this.router
        .navigateByUrl("/acceuil", { skipLocationChange: true })
        .then(() => this.router.navigate(["/boncommande"]));
    });
  }

  valideCommande(id_commande) {
    const commande = {
      id_commande: id_commande
    };

    this.commandeService.validateCommande(commande).subscribe(res => {
      this.appService.notify("commande bien validé");
      this.router
        .navigateByUrl("/acceuil", { skipLocationChange: true })
        .then(() => this.router.navigate(["/boncommande"]));
    });
  }
}
