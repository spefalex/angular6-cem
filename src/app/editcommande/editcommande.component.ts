import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CommandeService } from "../services/commande.service";
import { AppService } from "../services/app.service";
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-editcommande',
  templateUrl: './editcommande.component.html',
  styleUrls: ['./editcommande.component.css']
})
export class EditcommandeComponent implements OnInit {

  editCommandeForm: FormGroup;
  messages: any;
  errors: any;
  submitted: boolean = false;
 
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private commandeService: CommandeService,
    private appService: AppService,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

    this.editCommandeForm = this.formBuilder.group({
      boncommande: ["", Validators.required],
      nomproduit: ["", Validators.required],
      typecategorie: ["", Validators.required]
    });
  
    this.editCommandeForm.controls["boncommande"].setValue(this.data.boncommande);
    this.editCommandeForm.controls["nomproduit"].setValue(this.data.nomproduit);
    this.editCommandeForm.controls["typecategorie"].setValue(this.data.typecategorie);
  }
  onSubmit() {
    this.submitted = true;
    if (this.editCommandeForm.invalid) {
      return;
    } else {
    
      const commande = {
       
        id_commande: this.editCommandeForm.value.boncommande,
        designation_commande: this.editCommandeForm.value.nomproduit,
        id_frs: this.editCommandeForm.value.typecategorie
      };

      this.submitted = false;
      this.commandeService.updateCommande(commande).subscribe(res => {
        this.appService.notify(res["message"]);
        this.router
          .navigateByUrl("/acceuil", { skipLocationChange: true })
          .then(() => this.router.navigate(["/boncommande"]));
      });
    }
  }


}
