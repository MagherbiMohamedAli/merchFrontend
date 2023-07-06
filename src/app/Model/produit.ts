import { User } from "./User";

export class Produit {
    id!:number;
    nom!:string;
    etat!:string;
    couleur!:String;
    prix!:number;

    pathimage!:Date;
    vendeurs!:User;
    constructor(){
        
    }
}