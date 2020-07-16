
import { Domaine } from "./Domaine";

import { Formateur } from "./Formateur";
import { Theme } from "./Theme";
import {User} from "./User";
import { InscriptionFormation } from "./InscriptionFormation";




export  class Formation {
    public  id: number;
    public nom: string ;
    public  description:string;

  public  datedebut:Date;
  public datefin:Date ;
  public capacite:number ; 
  public  nbrPlaceReserve :number ; 
  public dateLimiteInscription:Date ; 
  public niveau:string ; 
  public domaine:Domaine ;
  public theme:Theme ; 
  public formateur:Formateur;
  public user:User;
  public type:string;
  public cat:string;
  //public formateurs:Formateur[] ; 
  

  public inscriptionsFormation:InscriptionFormation[]
  
  }