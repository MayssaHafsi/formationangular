import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabs-certiication',
  templateUrl: './tabs-certiication.component.html',
  styleUrls: ['./tabs-certiication.component.scss']
})
export class TabsCertiicationComponent implements OnInit {
  showFile = false;
  liste:any ; 
  pag:number=0;
  s: number = 10 ;
  listDomaine:any ; 
  listTheme:any ; 
  mcd:string ='';
mct:string='';
mcdc:Date ; 
  pages:Array<number>;
  constructor(public route:Router,public http:HttpClient) { }

  ngOnInit() {
    this.getPage();


    this.http.get('http://localhost:8888/domaines').subscribe(data => {
  this.listDomaine = data;
 

}, error => { console.log('ereur') ; } ) ;

this.http.get('http://localhost:8888/themes').subscribe(data => {
  this.listTheme = data;
 

}, error => { console.log('ereur') ; } ) ;


  }
  getPage() {

    this.http.get('http://localhost:8888/CertificationCon?page='+this.pag+'&size='+this.s).subscribe(data => {
      this.liste = data;
      this.pages = new Array(this.liste.totalPages);

    }, error => { console.log('ereur') ; } ) ;
  }
  inscrire(id:number){
    this.route.navigate(['inscrireCertification',id])
  }
  detailler(id:number){
    this.route.navigate(['detailCertInscrit',id]);
  }



  chercherParNomDomaine(){
    this.http.get('http://localhost:8888/pagerChercherCertificationDomaineC?mcd='+this.mcd).subscribe(data => {
      this.liste = data;
      this.pages = new Array(this.liste.totalPages);
    }, error => { console.log('ereur') ; } );
  }  
  chercherParNomTheme(){
    this.http.get('http://localhost:8888/pagerChercherCertificationThemeC?mct='+this.mct).subscribe(data => {
      this.liste = data;
      this.pages = new Array(this.liste.totalPages);
    }, error => { console.log('ereur') ; } );

  }

  chercherParDate(){


    this.http.get('http://localhost:8888/pagerChercherCertificationDateC?mcdc='+this.mcdc).subscribe(data => {
      this.liste = data;
      this.pages = new Array(this.liste.totalPages);
      
    }, error => { console.log('ereur') ; } );
  
  }
  showFiles(en:boolean){

    if(en==true){this.showFile=true;}
    else{
      this.showFile=false;
    }
  }
}
