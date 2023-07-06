import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Model/User';
const URL ="http://localhost:8080/api";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getallusers(){
   return this.http.get(URL+"/user/getall");
  }
  getuserbyid(id:number){
    return this.http.get(URL+"/user/getbyid/"+id);
  }
  deleteuser(){
    return this.http.delete(URL+"/user/delete");
  }
  miseajouruser(user:User){
    return this.http.put(URL+"/user/Miseajour",user);
  }
  ajouterRole(id:number){
    return this.http.get(URL+"/user/AjouterRole/"+id);
  }
}
