import { Component, OnInit } from '@angular/core';
import { InscriptionCertification } from 'src/model/InscriptionCertification';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-inscription-certification',
  templateUrl: './gestion-inscription-certification.component.html',
  styleUrls: ['./gestion-inscription-certification.component.scss']
})
export class GestionInscriptionCertificationComponent implements OnInit {

  liste: any ;
  pag:number=0;
  s: number = 3 ;
  mode:number=1 ;
  lst:any ; 
  mc:string='';
insc:InscriptionCertification=new InscriptionCertification();
  pages:Array<number>;
  demandeur:any;
  dem:any;
  to:string;
  text:string ; 
  objet:string ; 
  constructor(public http:HttpClient,public route:Router) { }

  setPage(p,$event:any){
    event.preventDefault()
    this.pag=p;
    this.getPage();


  }

  ngOnInit() {
    this.getPage();
  }
  getPage() {
   
     this.http.get('http://localhost:8888/pagerInscriptionC?page='+this.pag+'&size='+this.s).subscribe(data => {
       this.liste = data;
       this.pages = new Array(this.liste.totalPages);
 
     }, error => { console.log('ereur') ; } ) ;
   }
   confirmer(c:InscriptionCertification){
    const conf = window.confirm('est vous sur de confirmer cette demande ?');
    if (conf === true) {
      if(c.certification.nbrPlaceReserve<c.certification.capacite){
        if(c.etat=='EN ATTENTE'){
    c.etat="CONFIRME" ; 
 
    this.http.put('http://localhost:8888/updateInscCertification/' +c.id, c).subscribe(data => {console.log(data) ;
    alert('bien') ;
    
this.ngOnInit();
    

  }, error => { console.log('ereur') ; } )  ;


  c.certification.nbrPlaceReserve=c.certification.nbrPlaceReserve+1 ; 
 
  this.http.put('http://localhost:8888/updateCertification/' +c.certification.id, c.certification).subscribe(data => {console.log(data) ;
  

  

}, error => { console.log('ereur') ; } )  ;
this.to=c.demandeurCertification.email;
this.text='tu es accepté pour la certification '+c.certification.titre+' session '+c.certification.dateCertification+' a '+c.certification.timeCertification;
this.objet='Reponse sur formation';
    this.http.get('http://localhost:8888/envoiMail?to=' + this.to + '&text=' + this.text +'&objet='+this.objet).subscribe(data => {
    console.log(data);
    }, error => { console.log('ereur') ; } );
     

        }
        else if(c.etat=='REFUSE'){

          c.etat="CONFIRME" ; 
 
    this.http.put('http://localhost:8888/updateInscCertification/' +c.id, c).subscribe(data => {console.log(data) ;
    alert('bien') ;
    
this.ngOnInit();
    

  }, error => { console.log('ereur') ; } )  ;


  c.certification.nbrPlaceReserve=c.certification.nbrPlaceReserve+1 ; 
 
  this.http.put('http://localhost:8888/updateCertification/' +c.certification.id, c.certification).subscribe(data => {console.log(data) ;
  

  

}, error => { console.log('ereur') ; } )  ;

this.to=c.demandeurCertification.email;
this.text='tu es accepté pour la certification '+c.certification.titre+' session '+c.certification.dateCertification+' a '+c.certification.timeCertification;
this.objet='Modification pour la Reponse sur certification';
    this.http.get('http://localhost:8888/envoiMail?to=' + this.to + '&text=' + this.text +'&objet='+this.objet).subscribe(data => {
    console.log(data);
    }, error => { console.log('ereur') ; } );
     
        }
    }
    else{
      alert('tous les places sont reservé !!!');
     // this.liste.content.splice(this.liste.content.indexOf(c), 1);
    }
  }

    
  }

  refuser(c:InscriptionCertification)
  {
    const conf = window.confirm('est vous sur de refuser cette demande ?');
    if (conf === true) {
      if(c.etat=='EN ATTENTE'){
          c.etat="REFUSE"
  //  c.certification.nbrPlaceReserve = c.certification.nbrPlaceReserve+1 ;
    this.http.put('http://localhost:8888/updateInscCertification/' +c.id, c).subscribe(data => {console.log(data) ;
    alert('bien') ;

    this.ngOnInit();

  }, error => { console.log('ereur') ; } )  ;

  this.to=c.demandeurCertification.email;
this.text='tu es refusé pour la certification '+c.certification.titre+' session '+c.certification.dateCertification+' a '+c.certification.timeCertification;
this.objet='Reponse sur certification';
    this.http.get('http://localhost:8888/envoiMail?to=' + this.to + '&text=' + this.text +'&objet='+this.objet).subscribe(data => {
    console.log(data);
    }, error => { console.log('ereur') ; } );
     
    }
    else if(c.etat=='CONFIRME'){

      c.etat="REFUSE"

      this.http.put('http://localhost:8888/updateInscCertification/' +c.id, c).subscribe(data => {console.log(data) ;
      alert('bien') ;
  
      this.ngOnInit();
  
    }, error => { console.log('ereur') ; } )  ;
  
    
    c.certification.nbrPlaceReserve=c.certification.nbrPlaceReserve-1 ; 
   
    this.http.put('http://localhost:8888/updateCertification/' +c.certification.id, c.certification).subscribe(data => {console.log(data) ;
    
  
    
  
  }, error => { console.log('ereur') ; } )  ;


  this.to=c.demandeurCertification.email;
this.text='tu es accepté pour la certification '+c.certification.titre+' session '+c.certification.dateCertification+' a '+c.certification.timeCertification;
this.objet='Modification pour la Reponse sur certification';
    this.http.get('http://localhost:8888/envoiMail?to=' + this.to + '&text=' + this.text +'&objet='+this.objet).subscribe(data => {
    console.log(data);
    }, error => { console.log('ereur') ; } );
     
    }
  }
  }

  envoyer(c:InscriptionCertification){

    this.http.get('http://localhost:8888/findDemandeurParCin/'+c.demandeurCertification.cin).subscribe(data => {
    this.dem=data ; 
   this.mode=2 ; 

    }, error => { console.log('ereur') ; } ) ;
    this.http.get('http://localhost:8888/findDemandeurInscription/'+c.demandeurCertification.cin).subscribe(data => {
      this.lst=data ; 
      this.mode=2 ; 
  
      }, error => { console.log('ereur') ; } ) ;


  }


  chercher(){
  
    if(this.mc=='ic'){
      this.http.get('http://localhost:8888/pagerInscriptionCC?page='+this.pag+'&size='+this.s).subscribe(data => {
        this.liste = data;
        this.pages = new Array(this.liste.totalPages);
  
      }, error => { console.log('ereur') ; } ) ;
    }
    else if(this.mc=='ir'){
      this.http.get('http://localhost:8888/pagerInscriptionCR?page='+this.pag+'&size='+this.s).subscribe(data => {
        this.liste = data;
        this.pages = new Array(this.liste.totalPages);
  
      }, error => { console.log('ereur') ; } ) ;
    }
    else if(this.mc=='ia'){
      this.http.get('http://localhost:8888/pagerInscriptionC?page='+this.pag+'&size='+this.s).subscribe(data => {
        this.liste = data;
        this.pages = new Array(this.liste.totalPages);
  
      }, error => { console.log('ereur') ; } ) ;
    }
  }
}
