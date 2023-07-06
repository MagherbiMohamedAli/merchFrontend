import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../Model/produit';
const URL ="http://localhost:8080/api/produit";
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { }
  getallproduits(){
    return this.http.get(URL+"/getallp");
  }
  getallproduitconfirmer(){
    return this.http.get(URL+"/getallproduitconfirmer");
  }
  getProduitsBytitre(titre:string){
    return this.http.get(URL+"/getBytitre/"+titre);
  }
  getproduitbyid(id:number){
    return this.http.get(URL+"/getpbyid/"+id);
  }
  ajouterproduit(prd:Produit){
    return this.http.post(URL+"/ajouterp",prd);
  }
  miseajourproduit(prd:Produit){
    return this.http.put(URL+"/Miseajourp",prd);
  }
  confirmerproduit(prd:Produit){
    return this.http.post(URL+"/confirmerProduit",prd);
  }
  annulerproduit(prd:Produit){
    return this.http.post(URL+"/annulerProduit",prd);
  }
  deleteproduit(){
    return  this.http.delete(URL+"/deletep");
  }
}
