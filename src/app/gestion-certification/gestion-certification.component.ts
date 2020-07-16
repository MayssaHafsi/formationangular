import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser';
import { Certification } from 'src/model/Certification';

@Component({
  selector: 'app-gestion-certification',
  templateUrl: './gestion-certification.component.html',
  styleUrls: ['./gestion-certification.component.scss']
})
export class GestionCertificationComponent implements OnInit {
  
  liste:any ;
  pag:number=0;
  s: number = 4 ;
  pages:Array<number>;
  mcdc:Date;
  mcd:string='';
  mct:string='';
    constructor(public http:HttpClient,public route:Router) { }
    setPage(p,$event:any) {
      event.preventDefault()
      this.pag = p;
      this.getPage();
    }

  ngOnInit() {
this.getPage();
  }
  getPage() {
    // http://localhost:8888/pagerFormation?page='+this.pag+'&size='+this.s
     this.http.get('http://localhost:8888/pagerCertification?page='+this.pag+'&size='+this.s).subscribe(data => {
       this.liste = data;
       this.pages = new Array(this.liste.totalPages);
 
     }, error => { console.log('ereur') ; } ) ;
   }
   detailCertification(id:number){
this.route.navigate(['detailCertification',id]);

   }
   edit(id:number){
     this.route.navigate(['editCertification',id]);
   }
   

delete(c:Certification){
  const conf = window.confirm('est vous sur de suprimer ?');
  if (conf === true) {


    this.http.delete('http://localhost:8888/deleteCertification/'+c.id).subscribe(data => {
      console.log(data);
      this.liste.content.splice(this.liste.content.indexOf(c), 1);

    }, error => {
      console.log('ereur');
    });
  }
}



chercherParNom(){
  this.http.get('http://localhost:8888/pagerChercherCertificationTheme?mct='+this.mct).subscribe(data => {
    this.liste = data;
    this.pages = new Array(this.liste.totalPages);
  }, error => { console.log('ereur') ; } );

}

chercherParNomDomaine(){
  this.http.get('http://localhost:8888/pagerChercherCertificationDomaine?mcd='+this.mcd).subscribe(data => {
    this.liste = data;
    this.pages = new Array(this.liste.totalPages);
  }, error => { console.log('ereur') ; } );



}

cours(id:number){
  this.route.navigate(['coursCertification',id]);
}
chercherParDate(){


  this.http.get('http://localhost:8888/pagerChercherCertificationDate?mcdc='+this.mcdc).subscribe(data => {
    this.liste = data;
    this.pages = new Array(this.liste.totalPages);
    
  }, error => { console.log('ereur') ; } );

}
}
