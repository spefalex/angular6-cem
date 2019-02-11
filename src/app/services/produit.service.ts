import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produits } from "../../models/produits.model";
import { Headers, RequestOptions } from "@angular/http";
@Injectable()
export class ProduitService {
  constructor(private http: HttpClient) {}
  baseUrl: string = "http://127.0.0.1:3200";

  ajoutProduit(produit: Produits, token) {
    let type: string = "application/x-www-form-urlencoded; charset=UTF-8",
      headers: any = new Headers({
        "Content-Type": type,
        "x-access-token": token,
        "token" :token,
        "Access-Control-Allow-Origin":"*",
      }),
      options: any = new RequestOptions({ headers: headers });
    return this.http
      .post(this.baseUrl +'/apiCem/ajoutProduit?token='+token, produit, options);
    
  }
  
  lireProduit(token) {
    return this.http.get(this.baseUrl+ '/apiCem/lireproduits?token='+token)
  }
  lireProduitByUser(token,iduser) {
    return this.http.get(this.baseUrl+ '/apiCem/lireproduitsByUser?id_user='+iduser+'&token='+token)
  }
  
  lireOneProduit(idProd) {
    return this.http.get(this.baseUrl+'/lireProduit?idProd='+idProd);
  }

  getCategorie(token) {
    return this.http.get(this.baseUrl+ '/apiCem/lirecategorie?token='+token)
  }

  updateProduit(produit: Produits,token) {
    return this.http.put(this.baseUrl + "/apiCem/updateProd?token="+token, produit);
  }

  delProduits(produit: Produits) {
    return this.http.post(this.baseUrl + "/deleteProduit", produit);
  }
}
