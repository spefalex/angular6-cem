import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Commande } from "../../models/commande.model";
import { reject } from "q";

@Injectable()
export class CommandeService {
  constructor(private http: HttpClient) {}
  baseUrl: string = "http://127.0.0.1:3200";

  ajoutCommande(commande: Commande) {
  
    return this.http
      .post(this.baseUrl +'/AjoutCommande', commande);
    
  }

  lireCommande() {
    return this.http.get(this.baseUrl+'/lirecommande')
  }

  lireCommandeFrs(fr_id) {
    return this.http.get(this.baseUrl+'/readCommande?fr_id='+fr_id);
  }
  updateCommande(commande: Commande) {
    return this.http.put(this.baseUrl + "/updateCom", commande);
  }

  validateCommande(commande: Commande) {
    return this.http.put(this.baseUrl + "/validateCom", commande);
  }
  delCommande(commande: Commande) {
    return this.http.post(this.baseUrl + "/deleteCom", commande);
  }

  lirePriceCommandeFrs(fr_id) {
    return this.http.get(this.baseUrl+'/priceCommande?fr_id='+fr_id);
  }

  lirePriceCommandeadm() {
    return this.http.get(this.baseUrl+'/lireprice')
  }
}
