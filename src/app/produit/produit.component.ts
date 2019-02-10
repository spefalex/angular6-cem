import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ProduitService } from "../services/produit.service";
import { AppService } from "../services/app.service";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produitForm: FormGroup;
  messages: any;
  errors: any;
  submitted: boolean = false;
  selectedValue: string;
  selectedCar: string;
  categories: any;
  constructor(  private formBuilder: FormBuilder,
    private router: Router,
    private produitService: ProduitService,
    private appService: AppService,
  ) { }

  ngOnInit() {
    this.produitForm = this.formBuilder.group({
      designation: ["", Validators.required],
      cout: ["", Validators.required],
      categorie: ["", Validators.required],
    });
    let info =  JSON.parse(localStorage.getItem('info_user'));
    this.produitService.getCategorie(info.token).subscribe(res=>{
      this.categories = res['rows']; 
    })
  }
  onSubmit() {
  
    this.submitted = true;
    if (this.produitForm.invalid) {
      return;
    } else {

      let info =  JSON.parse(localStorage.getItem('info_user'));
      const produit = {
       id_fourniseur:info.id_user,
       cout: this.produitForm.value.cout,
       designation : this.produitForm.value.designation,
       id_categorie :this.produitForm.value.categorie,
  
      };
      this.submitted = false;
      this.produitService.ajoutProduit(produit,info.token).subscribe(res=>{
      this.produitForm.controls['designation'].setValue(" ");
      this.produitForm.controls['cout'].setValue(" ");
      this.appService.notify(res["message"]);
      this.router.navigateByUrl('lireproduit', {skipLocationChange: true}).then(()=>
      this.router.navigate(["acceuil"])); ;
     });
    }
  }
  selected(event) {
   
    console.log(event.value);
}


}
