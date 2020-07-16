import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { InscriptionCertification } from 'src/model/InscriptionCertification';
import { Certification } from 'src/model/Certification';
import { Demandeur } from 'src/model/Demandeur';

@Component({
  selector: 'app-inscription-certification',
  templateUrl: './inscription-certification.component.html',
  styleUrls: ['./inscription-certification.component.scss']
})
export class InscriptionCertificationComponent implements OnInit {
id:number ; 
insc:InscriptionCertification=new InscriptionCertification();
mode:number=1 ; 
demandeur:Demandeur=new Demandeur();
cer:Certification=new Certification();
  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) {
    this.id=ar.snapshot.params.id ; 
    
       }

  ngOnInit() {
    this.http.get('http://localhost:8888/chercherCertification/'+this.id).subscribe(data => {
// @ts-ignore
    
      this.cer=data ;
      this.insc.certification=this.cer ;
      console.log(this.cer);
 
    }, error => { console.log('ereur') ; } )  ;
  }
inscrire(){
 /* this.http.post('http://localhost:8888/addDemandeur', this.demandeur).subscribe(dataa => {console.log(dataa);
  //this.demandeur=new Demandeur();
  
      },error =>{
      console.log("erreur");
    }) ;*/
    
     
      
      
      //  this.insc.demandeurCertification=this.demandeur ; 
        this.insc.dateInscription=new Date ;
      this.insc.etat="EN ATTENTE" ;
    this.insc.demandeurCertification=this.demandeur ;
                this.http.post('http://localhost:8888/addInscri', this.insc).subscribe(data => {console.log(data);
   
        },error =>{
        console.log("erreur");
      }) ;
      this.route.navigate(['tabsCertification']);


}
}
