import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProduitService } from "../services/produit.service";
import { CommandeService } from "../services/commande.service";
import { AppService } from "../services/app.service";
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material";
import { ProduitComponent } from "../produit/produit.component";
import { EditproduitComponent } from "../editproduit/editproduit.component";

@Component({
  selector: "app-lireproduit",
  templateUrl: "./lireproduit.component.html",
  styleUrls: ["./lireproduit.component.css"]
})
export class LireproduitComponent implements OnInit {
  dataSource: any;
  statusCompte: any;
  priceTotal: any;
  constructor(
    private produitService: ProduitService,
    private dialog: MatDialog,
    private commandeService: CommandeService,
    private appService : AppService,
    private router :Router
  ) {}

  ngOnInit() {
    let info = JSON.parse(localStorage.getItem("info_user"));
    this.statusCompte = info.status_compte;
    if (info.status_compte === "frs") {
      this.produitService
        .lireProduitByUser(info.token, info.id_user)
        .subscribe(data => {
          this.dataSource = data;
        });
    } else {
      this.produitService.lireProduit(info.token).subscribe(res => {
        this.dataSource = res["rows"];
        let x = localStorage.getItem("totalPrice");
        !x ? (this.priceTotal = 0) : (this.priceTotal = x);
      });
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ProduitComponent, {
      width: "250px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  editProduit(id, nomproduit, cout, typecategorie) {
    const dialogRef = this.dialog.open(EditproduitComponent, {
      width: "250px",
      data: {
        id: id,
        nomproduit: nomproduit,
        cout: cout,
        typecategorie: typecategorie
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  commande(cout, designation_commande, id_prod,cle) {
    this.priceTotal = parseInt(this.priceTotal) + parseInt(cout);
    let info = JSON.parse(localStorage.getItem("info_user"));

    const commande = {
      id_responsable: info.id_user,
      designation_commande: designation_commande,
      id_frs: id_prod,
      fr_id:cle,
      cout_commande:cout
    };
    this.commandeService.ajoutCommande(commande).subscribe(res=>{
      this.appService.notify('ajouter dans le panier ');
    });
    localStorage.setItem("totalPrice", this.priceTotal);
  }

  deleteProduit(id_commande) {
    const produits = {
      id_prod: id_commande
    };

    this.produitService.delProduits(produits).subscribe(res => {
      this.appService.notify(res["message"]);
      this.router.navigateByUrl('lireproduit', {skipLocationChange: true}).then(()=>
      this.router.navigate(["acceuil"])); ;
    });
  }
}
