import { User } from "./User";
import { Lignedecommande } from "./lignedecommande";

export class Commande {
    id!:number;
    etat!:number;
    prix!:number;
    datecommande!:Date;  
    ligneCommandes!:[Lignedecommande];
    client!:User;
    constructor(){
        
    }
}