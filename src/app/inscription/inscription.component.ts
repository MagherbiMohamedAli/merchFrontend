import { Component } from '@angular/core';
import { User } from '../Model/User';
import { AuthentificationService } from '../services/authentification.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {

    user=new User();

    constructor(private auth:AuthentificationService,private route:Router){
      
    }
    
    inscrit(){
      console.log(this.user)
      this.auth.inscriptionclient(this.user).subscribe({
        next:(data:any)=>{
          console.log(data)
          this.route.navigate(["home"])
          console.log("user inscri")
        // lhajet li na3mlouhom ki temshi s7i7a
        },
        error:(err:any)=>{
          console.log(err)
        // ki tabda ghalta 
        },
        complete:()=>{ // par defaut
        },
      })
    }
}
