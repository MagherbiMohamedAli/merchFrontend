import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commande } from '../Model/commande';
const URL ="http://localhost:8080/api/commande";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient) { }
  
  passercom(cmd:Commande){
    return this.http.post(URL+"/passercom",cmd);
  }
  annulercom(cmd:Commande){
    return this.http.post(URL+"/annulercom",cmd);
  }
}
