import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Formation } from 'src/model/Formation';
import { InscriptionFormation } from 'src/model/InscriptionFormation';
import { Demandeur } from 'src/model/Demandeur';

@Component({
  selector: 'app-inscription-formation',
  templateUrl: './inscription-formation.component.html',
  styleUrls: ['./inscription-formation.component.scss']
})
export class InscriptionFormationComponent implements OnInit {
id:number;
insc:InscriptionFormation=new InscriptionFormation();
mode:number=1 ; 
demandeur:Demandeur=new Demandeur() ; 
cinr:string ; 
dem:Demandeur=new Demandeur();
frm:Formation=new Formation();

  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) {
this.id=ar.snapshot.params.id ; 

   }

  ngOnInit() {
    this.http.get('http://localhost:8888/chercherFormationG/'+this.id).subscribe(data => {
      // @ts-ignore
    //  this.insc.formation= data ;
      this.frm=data ;
      this.insc.formationNC=this.frm ;
 
    }, error => { console.log('ereur') ; } )  ;
  }
  envoyer(){
    this.mode=2 ; 
  } ;
  save()
   {
    this.http.post('http://localhost:8888/addDemandeur', this.demandeur).subscribe(data => {console.log(data);
    this.mode=1 ;
    },error =>{
    console.log("erreur");
  }) ;
   }

 
   inscrire(){
  /*  this.http.post('http://localhost:8888/addDemandeur', this.demandeur).subscribe(dataa => {console.log(dataa);
//this.demandeur=new Demandeur();

    },error =>{
    console.log("erreur");
  }) ;
  */
   
    
    
      this.insc.demandeur=this.demandeur ; 
      this.insc.dateInscription=new Date ;
   
    this.insc.etat="EN ATTENTE" ;
  
      this.http.post('http://localhost:8888/addInscriptionF', this.insc).subscribe(data => {console.log(data);
 
      },error =>{
      console.log("erreur");
    }) ;
    this.route.navigate(['tabs'])
    }
   }


  


