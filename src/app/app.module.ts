import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from "./app-routing.module";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProduitComponent } from './produit/produit.component';
import { BoncommandeComponent } from './boncommande/boncommande.component';
import { ReactiveFormsModule } from "@angular/forms";
import { UserService } from "./services/user.service";
import { AppService } from "./services/app.service";
import { StorageService } from "./services/storage-service";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { ProduitService } from "./services/produit.service";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LireproduitComponent } from './lireproduit/lireproduit.component';
import { EditproduitComponent } from './editproduit/editproduit.component';
import { EditcommandeComponent } from './editcommande/editcommande.component';
import { LirecommandeComponent } from './lirecommande/lirecommande.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionComponent,
    AcceuilComponent,
    ProduitComponent,
    BoncommandeComponent,
    HeaderComponent,
    FooterComponent,
    LireproduitComponent,
    EditproduitComponent,
    EditcommandeComponent,
    LirecommandeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ UserService ,AppService ,StorageService , ProduitService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
