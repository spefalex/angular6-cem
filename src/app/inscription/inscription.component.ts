import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

export interface TypeCompte {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscriptionForm: FormGroup;
  messages : any;
  errors : any ;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  selected: string;

  typeCompte: TypeCompte[] = [
    {value: 'adm', viewValue: 'Admin'},
    {value: 'frs', viewValue: 'Fournisseur'},
    
  ];
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  onSubmit() {
  
    this.submitted = true;
    if (this.inscriptionForm.invalid) {
      return;
    } else {
      alert('traitement');
      alert(this.selected)
    }
  }
  get f() { return this.inscriptionForm.controls; }
  ngOnInit() {
    this.inscriptionForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required]
    });

    
  }
}
