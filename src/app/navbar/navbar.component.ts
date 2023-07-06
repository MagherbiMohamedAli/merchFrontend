import { Component } from '@angular/core';
import { LocalStoregService } from '../services/local-storeg.service';
import { ProduitService } from '../services/produit.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  connecter!:Boolean;
  titre!:string;
  role=false;
  constructor(private localstoregSer:LocalStoregService,
    private produitSer:ProduitService,private userSer:UserService,){
 
    if(localstoregSer.isLoggedIn()){
      this.userSer.getuserbyid(this.localstoregSer.getUserId()).subscribe({
        next:(data:any)=>{
    
          
          
          for(let r of data.roles){
            console.log(r.role)
            if(r.role=="VENDEUR"){
              this.role=true;
            }
          }
        
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
 
    if(localstoregSer.isLoggedIn()){
      this.connecter=false;
    }else{
      this.connecter=true;
    }
  }
  logout(){
    this.localstoregSer.signOut()
    this.connecter=true
  }
  pruidtbytitre(){
    this.produitSer.getProduitsBytitre(this.titre).subscribe({
      next:(data:any)=>{
        console.log(data)

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
