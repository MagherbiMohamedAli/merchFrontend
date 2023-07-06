import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/User';
import { LoginReq } from '../Model/login-req';
const URL ="http://localhost:8080/api/Auth";
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http:HttpClient) { }
 
  inscriptionclient(user:User):Observable<User> {
    return this.http.post<User>(URL+"/inscrireClient",user)
  }
  loginclient(loginRe:LoginReq):Observable<User>{
    return this.http.post<User>(URL+"/Connexion",loginRe)
  }
  inscriptionvendeur(user:User):Observable<User> {
    return this.http.post<User>("/inscrireVendeur",user)
  }
  inscriptionadmin(user:User):Observable<User> {
    return this.http.post<User>("/inscrireAdmin",user)
  }
  

}
