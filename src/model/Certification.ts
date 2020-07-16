import { Domaine } from "./Domaine";
import { Niveau } from "./Niveau";
import {Formateur} from "./Formateur" ;
import {Demandeur} from "./Demandeur" ;
import {User} from "./User" ;
import { FormationNonCertifiant } from "./FormationNonCertifiant";
import { FormationCertifiant } from "./FormationCertifiant";

export class Certification {
public id:number ; 
public titre:string ; 
public dateCertification:Date ; 
public timeCertification:string ; 
public lieu:string ; 
public description:string ;
public capacite:number ; 
public nbrPlaceReserve:number ; 
public dateLimiteInscription:Date ; 
public domaineCertification:Domaine ; 
public niveau:Niveau ;
public formateur:Formateur;
public demandeur: Demandeur;
public user: User;
public salleExamen:string ; 
public  formationCS:FormationCertifiant[];
}