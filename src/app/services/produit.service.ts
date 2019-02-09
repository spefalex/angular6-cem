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
      .post(this.baseUrl + "/ajoutProduit", produit, options);
    
  }

  getCategorie(token) {
    return this.http.get(this.baseUrl+'/apiCem/lirecategorie?token='+token)
  }
}
