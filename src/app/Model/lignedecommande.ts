import { Produit } from "./produit";

export class Lignedecommande {
    id!:number;
    quantite!:number;
    prixtotale!:number;
    produit!:Produit;  
    constructor(){
        
    }
}
