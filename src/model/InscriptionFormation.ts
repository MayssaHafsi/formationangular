import { Formation } from "./Formation";
import { Demandeur } from "./Demandeur";

export class InscriptionFormation{
    public id:number ; 
    public etat:string =''; 
    public dateInscription:Date ; 
    public formationNC :Formation ; 
    public demandeur:Demandeur ;

}