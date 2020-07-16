import { Component, OnInit } from '@angular/core';
import { FormationNonCertifiant } from 'src/model/FormationNonCertifiant';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Route, Router} from '@angular/router';
import { Formation } from 'src/model/Formation';
@Component({
  selector: 'app-edit-formation-non-certifiant',
  templateUrl: './edit-formation-non-certifiant.component.html',
  styleUrls: ['./edit-formation-non-certifiant.component.scss']
})
export class EditFormationNonCertifiantComponent implements OnInit {
  fo:Formation=new Formation() ; 
  id:number ; 
  listDomaine:any ;
  listFormateur:any;
  listUser:any;
  listTheme:any;
  nomDomaine:String;
sel:number ;
  constructor(public route:Router, public ar:ActivatedRoute,public http:HttpClient) {

this.id=ar.snapshot.params.id ; 
   }

  ngOnInit() {
    this.http.get('http://localhost:8888/domaines').subscribe(data => {
      this.listDomaine = data;
     

    }, error => { console.log('ereur') ; } ) ;

    this.http.get('http://localhost:8888/formateurs').subscribe(data => {
      this.listFormateur = data;
      
     

    }, error => { console.log('ereur') ; } ) ;
    this.http.get('http://localhost:8888/users').subscribe(data => {
      this.listUser = data;
     

    }, error => { console.log('ereur') ; } ) ;
    this.http.get('http://localhost:8888/chercherFormationG/' + this.id).subscribe(data => {
      // @ts-ignore
      this.fo = data ;
     
      
    }, error => { console.log('ereur') ; } )  ;
   /* this.http.get('http://localhost:8888/domaines').subscribe(data => {
      this.listDomaine = data;
     

    }, error => { console.log('ereur') ; } ) ;
   
    for(var i=0;i<this.listDomaine.length;i++)
    {
      if(this.listDomaine[i]==this.fo.domaine)
      this.sel=this.listDomaine[i].id;
  
  
    }*/

    this.http.get('http://localhost:8888/themes').subscribe(data => {
      this.listTheme = data;
     

    }, error => { console.log('ereur') ; } ) ;
     
  }
  
  

  update()
  {
    
    this.http.put('http://localhost:8888/updateFormation/' + this.fo.id, this.fo).subscribe(data => {console.log(data) ;
    alert('Modifier avec succès') ;
    this.route.navigate(['formation']) ;

  }, error => { console.log('ereur') ; } )  ;
  
  }
  

  
  
  }


