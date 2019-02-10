import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { LoginComponent } from './login/login.component';
import  { ProduitComponent } from './produit/produit.component';
import  { AcceuilComponent } from './acceuil/acceuil.component';
import  { BoncommandeComponent } from './boncommande/boncommande.component';
import  { InscriptionComponent } from './inscription/inscription.component';
import  { LireproduitComponent } from './lireproduit/lireproduit.component';
import  { EditproduitComponent } from './editproduit/editproduit.component';
import  { EditcommandeComponent } from './editcommande/editcommande.component';
const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'produit', component: ProduitComponent },
  { path: 'boncommande', component: BoncommandeComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'lireproduit', component: LireproduitComponent },
  { path: 'editproduit', component: EditproduitComponent },
  { path: 'editcomande', component: EditcommandeComponent },
  { path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
