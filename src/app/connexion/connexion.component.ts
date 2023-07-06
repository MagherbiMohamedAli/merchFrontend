import { Component } from '@angular/core';
import { LoginReq } from '../Model/login-req';
import { AuthentificationService } from '../services/authentification.service';
import { User } from '../Model/User';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { LocalStoregService } from '../services/local-storeg.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  loginReq= new LoginReq();
  constructor(private authSer:AuthentificationService,private route:Router,private localStoreg:LocalStoregService){

  }
  connection(form: any){

    console.log(this.loginReq)
    this.authSer.loginclient(this.loginReq).subscribe({
      next:(data:any)=>{
        
        this.localStoreg.saveToken(data.token);
        this.localStoreg.saveUsername(data.username);
        this.localStoreg.saveUserId(data.user.id);
        this.localStoreg.saveUser(data.user);
        this.localStoreg.saveAuthorities(data.user.roles);
        this.route.navigate(["home"])

        console.log(data)
      },
      error:(err:any)=>{
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Coordonnées invalides',
        
        })
      },
      complete:()=>{}
    })
    }
    
 }

