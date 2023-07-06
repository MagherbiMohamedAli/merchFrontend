import { Component, OnInit } from '@angular/core';
import { Produit } from '../Model/produit';
import { ProduitService } from '../services/produit.service';
import { LocalStoregService } from '../services/local-storeg.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit{
  constructor(private prodSer:ProduitService,private localStoregSer:LocalStoregService){}
  ngOnInit(): void {
   
  }
  produit = new Produit();
  ajouterProduit(){
    this.produit.vendeurs=this.localStoregSer.getUser();
    console.log(this.produit)
    this.prodSer.ajouterproduit(this.produit).subscribe({
      next:(data:any)=>{
        
        Swal.fire({
          icon: 'success',
          title: 'succees',
          text: 'Produit ajouté avec succès',
        
        })

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
