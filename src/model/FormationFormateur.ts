import { FormationNonCertifiant } from "./FormationNonCertifiant";
import { FormatWidth } from "@angular/common";
import { Formateur } from "./Formateur";
import { Formation } from "./Formation";
import { SeanceFormation } from "./SeanceFormation";

export class FormationFormateur{

public id:number ; 
    public formation:Formation ; 
    public formateur:Formateur ; 
    public datedebut:Date ; 
    public datefin:Date ; 
    public seances:SeanceFormation[];

   
}