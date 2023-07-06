import { Component } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../Model/produit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  produit!:[Produit];
  constructor(private produitServ:ProduitService){
    this.getAllProduit()
  }
getAllProduit(){
  this.produitServ.getallproduitconfirmer().subscribe({
    next:(data:any)=>{

      console.log(data)
      this.produit=data;
    
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
