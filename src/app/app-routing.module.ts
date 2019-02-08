import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { LoginComponent } from './login/login.component';
import  { ProduitComponent } from './produit/produit.component';
import  { BoncommandeComponent } from './boncommande/boncommande.component';
import  { InscriptionComponent } from './inscription/inscription.component';
const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'produit', component: ProduitComponent },
  { path: 'boncommande', component: BoncommandeComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
