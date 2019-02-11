import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ProduitService } from "../services/produit.service";
import { AppService } from "../services/app.service";
import { MAT_DIALOG_DATA } from "@angular/material";
@Component({
  selector: "app-editproduit",
  templateUrl: "./editproduit.component.html",
  styleUrls: ["./editproduit.component.css"]
})
export class EditproduitComponent implements OnInit {
  editProduitForm: FormGroup;
  messages: any;
  errors: any;
  submitted: boolean = false;
  selectedValue: string;
  selectedCar: string;
  categories: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private produitService: ProduitService,
    private appService: AppService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.editProduitForm = this.formBuilder.group({
      designation: ["", Validators.required],
      cout: ["", Validators.required],
      categorie: ["", Validators.required]
    });
    let info = JSON.parse(localStorage.getItem("info_user"));
    this.produitService.getCategorie(info.token).subscribe(res => {
      this.categories = res["rows"];
    });
    this.editProduitForm.controls["designation"].setValue(this.data.nomproduit);
    this.editProduitForm.controls["cout"].setValue(this.data.cout);
  }

  onSubmit() {
    this.submitted = true;
    if (this.editProduitForm.invalid) {
      return;
    } else {
      let info = JSON.parse(localStorage.getItem("info_user"));
      const produit = {
        id_prod: this.data.id,
        cout: this.editProduitForm.value.cout,
        designation: this.editProduitForm.value.designation,
        id_categorie: this.editProduitForm.value.categorie
      };

      this.submitted = false;
      this.produitService.updateProduit(produit, info.token).subscribe(res => {
        this.appService.notify(res["message"]);
        this.router
          .navigateByUrl("lireproduit", { skipLocationChange: true })
          .then(() => this.router.navigate(["acceuil"]));
      });
    }
  }
}
