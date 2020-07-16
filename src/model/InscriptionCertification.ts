import { Certification } from "./Certification";
import { Demandeur } from "./Demandeur";

export class InscriptionCertification{

    public id:number ; 
    public etat:string='' ;
    public dateInscription:Date ; 
    public certification:Certification ; 
    public demandeurCertification:Demandeur ; 


}