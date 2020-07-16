import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Router, ActivatedRoute} from '@angular/router';
import { InscriptionFormation } from 'src/model/InscriptionFormation';
import { Demandeur } from 'src/model/Demandeur';
@Component({
  selector: 'app-gestion-inscription-formation',
  templateUrl: './gestion-inscription-formation.component.html',
  styleUrls: ['./gestion-inscription-formation.component.scss']
})
export class GestionInscriptionFormationComponent implements OnInit {
  liste: any ;
  pag:number=0;
  s: number = 3 ;
  mode:number=1 ;
  lst:any ; 
  mc:string='';
insc:InscriptionFormation=new InscriptionFormation();
  pages:Array<number>;
  demandeur:any;
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
    //this.pag = p ;
    this.http.get('http://localhost:8888/pagerInscriptionF?page='+this.pag+'&size='+this.s).subscribe(data => {
      this.liste = data;
      this.pages = new Array(this.liste.totalPages);

    }, error => { console.log('ereur') ; } ) ;
  }
  confirmer(c:InscriptionFormation){
    if(c.formationNC.type=="FNC"){
   const conf = window.confirm('est vous sur de confirmer cette demande ?');
    if (conf === true) {

      if(c.formationNC.nbrPlaceReserve<c.formationNC.capacite)
      {
      
        
        if(c.etat=='EN ATTENTE'){
          
    c.etat="CONFIRME" ; 
 
    this.http.put('http://localhost:8888/updateInscriptionFormation/' +c.id, c).subscribe(data => {console.log(data) ;
    alert('bien') ;
    
this.ngOnInit();
    

  }, error => { console.log('ereur') ; } )  ;


  c.formationNC.nbrPlaceReserve=c.formationNC.nbrPlaceReserve+1 ; 
 
  this.http.put('http://localhost:8888/updateFormationNC/' +c.formationNC.id, c.formationNC).subscribe(data => {console.log(data) ;
  

  

}, error => { console.log('ereur') ; } )  ;


this.to=c.demandeur.email;
this.text='tu es accepté pour la formation '+c.formationNC.nom+' de '+c.formationNC.datedebut+' a '+c.formationNC.datefin;
this.objet='Reponse sur formation';
    this.http.get('http://localhost:8888/envoiMail?to=' + this.to + '&text=' + this.text +'&objet='+this.objet).subscribe(data => {
    console.log(data);
    }, error => { console.log('ereur') ; } );
     
  
          
       
}
      else if(c.etat=='REFUSE'){

        c.etat="CONFIRME" ; 
 
        this.http.put('http://localhost:8888/updateInscriptionFormation/' +c.id, c).subscribe(data => {console.log(data) ;
        alert('bien') ;
        
    this.ngOnInit();
        
    
      }, error => { console.log('ereur') ; } )  ;
    
    
      c.formationNC.nbrPlaceReserve=c.formationNC.nbrPlaceReserve+1 ; 
     
      this.http.put('http://localhost:8888/updateFormationNC/' +c.formationNC.id, c.formationNC).subscribe(data => {console.log(data) ;
      
    
      
    
    }, error => { console.log('ereur') ; } )  ;
        

    this.to=c.demandeur.email;
this.text='tu es accepté pour la formation '+c.formationNC.nom+' de '+c.formationNC.datedebut+' a '+c.formationNC.datefin;
this.objet='Modification pour la Reponse sur formation';
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
    else {




      const conf = window.confirm('est vous sur de confirmer cette demande FC ?');
      if (conf === true) {
  
        if(c.formationNC.nbrPlaceReserve<c.formationNC.capacite)
        {
        
          
          if(c.etat=='EN ATTENTE'){
            
      c.etat="CONFIRME" ; 
   
      this.http.put('http://localhost:8888/updateInscriptionFormation/' +c.id, c).subscribe(data => {console.log(data) ;
      alert('bien') ;
      
  this.ngOnInit();
      
  
    }, error => { console.log('ereur') ; } )  ;
  
  
    c.formationNC.nbrPlaceReserve=c.formationNC.nbrPlaceReserve+1 ; 
   
    this.http.put('http://localhost:8888/updateFormationC/' +c.formationNC.id, c.formationNC).subscribe(data => {console.log(data) ;
    
  
    
  
  }, error => { console.log('ereur') ; } )  ;
  
  
  this.to=c.demandeur.email;
  this.text='tu es accepté pour la formation '+c.formationNC.nom+' de '+c.formationNC.datedebut+' a '+c.formationNC.datefin;
  this.objet='Reponse sur formation';
      this.http.get('http://localhost:8888/envoiMail?to=' + this.to + '&text=' + this.text +'&objet='+this.objet).subscribe(data => {
      console.log(data);
      }, error => { console.log('ereur') ; } );
       
    
            
         
  }
        else if(c.etat=='REFUSE'){
  
          c.etat="CONFIRME" ; 
   
          this.http.put('http://localhost:8888/updateInscriptionFormation/' +c.id, c).subscribe(data => {console.log(data) ;
          alert('bien') ;
          
      this.ngOnInit();
          
      
        }, error => { console.log('ereur') ; } )  ;
      
      
        c.formationNC.nbrPlaceReserve=c.formationNC.nbrPlaceReserve+1 ; 
       
        this.http.put('http://localhost:8888/updateFormationC/' +c.formationNC.id, c.formationNC).subscribe(data => {console.log(data) ;
        
      
        
      
      }, error => { console.log('ereur') ; } )  ;
          
  
      this.to=c.demandeur.email;
  this.text='tu es accepté pour la formation '+c.formationNC.nom+' de '+c.formationNC.datedebut+' a '+c.formationNC.datefin;
  this.objet='Modification pour la Reponse sur formation';
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
    

  }
  refuser(c:InscriptionFormation)
  {
    if(c.formationNC.type=="FNC"){
    const conf = window.confirm('est vous sur de refuser cette demande ?');
    if (conf === true) {
      if( c.etat=='EN ATTENTE'){
    c.etat="REFUSE"
  //  c.formationNC.nbrPlaceReserve = c.formationNC.nbrPlaceReserve+1 ;
    this.http.put('http://localhost:8888/updateInscriptionFormation/' +c.id, c).subscribe(data => {console.log(data) ;
    alert('bien') ;

    this.ngOnInit();

  }, error => { console.log('ereur') ; } )  ;
  this.to=c.demandeur.email;
this.text='tu es refusé pour la formation '+c.formationNC.nom+' de '+c.formationNC.datedebut+' a '+c.formationNC.datefin;
this.objet='Reponse sur formation';
    this.http.get('http://localhost:8888/envoiMail?to=' + this.to + '&text=' + this.text +'&objet='+this.objet).subscribe(data => {
    console.log(data);
    }, error => { console.log('ereur') ; } );
     
}
else if(c.etat=='CONFIRME'){
  //alert('hhh')
  c.etat="REFUSE"

    this.http.put('http://localhost:8888/updateInscriptionFormation/' +c.id, c).subscribe(data => {console.log(data) ;
    alert('bien') ;

    this.ngOnInit();

  }, error => { console.log('ereur') ; } )  ;

  
  c.formationNC.nbrPlaceReserve=c.formationNC.nbrPlaceReserve-1 ; 
 
  this.http.put('http://localhost:8888/updateFormationNC/' +c.formationNC.id, c.formationNC).subscribe(data => {console.log(data) ;
  

  

}, error => { console.log('ereur') ; } )  ;
this.to=c.demandeur.email;
this.text='tu es refusé pour la formation '+c.formationNC.nom+' de '+c.formationNC.datedebut+' a '+c.formationNC.datefin;
this.objet=' Modification pour la Reponse sur formation';
    this.http.get('http://localhost:8888/envoiMail?to=' + this.to + '&text=' + this.text +'&objet='+this.objet).subscribe(data => {
    console.log(data);
    }, error => { console.log('ereur') ; } );
     

}
    }
  }

  else {

    const conf = window.confirm('est vous sur de refuser cette demande de FC ?');
    if (conf === true) {
      if( c.etat=='EN ATTENTE'){
    c.etat="REFUSE"
  //  c.formationNC.nbrPlaceReserve = c.formationNC.nbrPlaceReserve+1 ;
    this.http.put('http://localhost:8888/updateInscriptionFormation/' +c.id, c).subscribe(data => {console.log(data) ;
    alert('bien') ;

    this.ngOnInit();

  }, error => { console.log('ereur') ; } )  ;
  this.to=c.demandeur.email;
this.text='tu es refusé pour la formation '+c.formationNC.nom+' de '+c.formationNC.datedebut+' a '+c.formationNC.datefin;
this.objet='Reponse sur formation';
    this.http.get('http://localhost:8888/envoiMail?to=' + this.to + '&text=' + this.text +'&objet='+this.objet).subscribe(data => {
    console.log(data);
    }, error => { console.log('ereur') ; } );
     
}
else if(c.etat=='CONFIRME'){
  //alert('hhh')
  c.etat="REFUSE"

    this.http.put('http://localhost:8888/updateInscriptionFormation/' +c.id, c).subscribe(data => {console.log(data) ;
    alert('bien') ;

    this.ngOnInit();

  }, error => { console.log('ereur') ; } )  ;

  
  c.formationNC.nbrPlaceReserve=c.formationNC.nbrPlaceReserve-1 ; 
 
  this.http.put('http://localhost:8888/updateFormationC/' +c.formationNC.id, c.formationNC).subscribe(data => {console.log(data) ;
  

  

}, error => { console.log('ereur') ; } )  ;
this.to=c.demandeur.email;
this.text='tu es refusé pour la formation '+c.formationNC.nom+' de '+c.formationNC.datedebut+' a '+c.formationNC.datefin;
this.objet=' Modification pour la Reponse sur formation';
    this.http.get('http://localhost:8888/envoiMail?to=' + this.to + '&text=' + this.text +'&objet='+this.objet).subscribe(data => {
    console.log(data);
    }, error => { console.log('ereur') ; } );
     

}
    }


  }
}
  envoyer(c:InscriptionFormation){

    this.http.get('http://localhost:8888/findDemandeurParCin/'+c.demandeur.cin).subscribe(data => {
    this.demandeur=data ; 
   this.mode=2 ; 

    }, error => { console.log('ereur') ; } ) ;
    this.http.get('http://localhost:8888/findDemandeurInscription/'+c.demandeur.cin).subscribe(data => {
      this.lst=data ; 
      this.mode=2 ; 
  
      }, error => { console.log('ereur') ; } ) ;


  }
  chercher(){
  
    if(this.mc=='ic'){
      this.http.get('http://localhost:8888/pagerInscriptionFC?page='+this.pag+'&size='+this.s).subscribe(data => {
        this.liste = data;
        this.pages = new Array(this.liste.totalPages);
  
      }, error => { console.log('ereur') ; } ) ;
    }
    else if(this.mc=='ir'){
      this.http.get('http://localhost:8888/pagerInscriptionFR?page='+this.pag+'&size='+this.s).subscribe(data => {
        this.liste = data;
        this.pages = new Array(this.liste.totalPages);
  
      }, error => { console.log('ereur') ; } ) ;
    }
    else if(this.mc=='ia'){
      this.http.get('http://localhost:8888/pagerInscriptionF?page='+this.pag+'&size='+this.s).subscribe(data => {
        this.liste = data;
        this.pages = new Array(this.liste.totalPages);
  
      }, error => { console.log('ereur') ; } ) ;
    }
  }
}
