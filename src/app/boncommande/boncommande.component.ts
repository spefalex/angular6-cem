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
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private commandeService: CommandeService,
    private appService: AppService,
    private dialog :MatDialog
  ) {}

  ngOnInit() {
    this.commandeService.lireCommande().subscribe(data => {
      this.dataSource = data;
    });
    this.priceTotal = localStorage.getItem("totalPrice");
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
}
