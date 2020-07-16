import { Component, OnInit } from '@angular/core';
import { FormationFormateur } from 'src/model/FormationFormateur';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Formation } from 'src/model/Formation';
import { FormationNonCertifiant } from 'src/model/FormationNonCertifiant';
import { Formateur } from 'src/model/Formateur';

@Component({
  selector: 'app-affectation-formateur-formation',
  templateUrl: './affectation-formateur-formation.component.html',
  styleUrls: ['./affectation-formateur-formation.component.scss']
})
export class AffectationFormateurFormationComponent implements OnInit {
ff:Formation=new Formation();
aff:FormationFormateur=new FormationFormateur()  ; 
id:number ; 
listFormateur:any ; 
listFormationFormateur:any ; 
pag:number=0;
s: number = 3 ;

pages:Array<number>;
  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) {
    this.id=ar.snapshot.params.id 
   }
   setPage(p,$event:any){
    event.preventDefault()
    this.pag=p;
    this.getPages();


  }

  ngOnInit() {
   
    this.http.get('http://localhost:8888/chercherFormationG/'+this.id).subscribe(data => {
      // @ts-ignore
      this.aff.formation= data ;
 
    }, error => { console.log('ereur') ; } )  ;

this.http.get('http://localhost:8888/formateurs').subscribe(data => {
  
  this.listFormateur= data ;

}, error => { console.log('ereur') ; } )  ;

this.getPages();

  }


  getPages(){


    this.http.get('http://localhost:8888/pagerFormationFormateur/'+this.id+'?page='+this.pag+'&size='+this.s).subscribe(data => {
  
  this.listFormationFormateur= data ;
  this.pages = new Array(this.listFormationFormateur.totalPages);

}, error => { console.log('ereur') ; } )  ;


  }
  affecter()
  {
if(this.aff.datedebut<this.aff.formation.datedebut || this.aff.datefin>this.aff.formation.datefin)
{
  alert('verifier date debut et date fin')
}
else {
    this.http.post('http://localhost:8888/addFormationFormateur', this.aff).subscribe(data => {console.log(data);
 this.route.navigate(['/formationFormateur/'+this.id]) ;

 this.aff=new FormationFormateur();
this.ngOnInit() ; 
    },error =>{
    console.log("erreur");
  }) ;
  }


  this.aff.datedebut=new Date();
this.aff.formateur=new Formateur();
  }
  affecterSeance(id:number){

    this.route.navigate(['seanceFormation',id]) ;
  }

  edit(id:number){
    this.route.navigate(['editFormationFormateur',id]) ;
  }
delete(f:FormationFormateur)
{
  const conf = window.confirm('est vous sur de suprimer ?');
  if (conf === true) {


    this.http.delete('http://localhost:8888/deleteFormationFormateur/'+f.id).subscribe(data => {
      this.listFormationFormateur.content.splice(this.listFormationFormateur.content.indexOf(f), 1);

    }, error => {
      console.log('ereur');
    });
  }
}
}
