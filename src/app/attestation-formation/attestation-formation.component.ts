import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Formation } from 'src/model/Formation';
import * as jsPDF from 'jspdf' ; 
@Component({
  selector: 'app-attestation-formation',
  templateUrl: './attestation-formation.component.html',
  styleUrls: ['./attestation-formation.component.scss']
})
export class AttestationFormationComponent implements OnInit {
id:number;
formation:Formation ; 
dat:Date ;

@ViewChild('content') content:ElementRef ; 
  constructor(public route:Router,public ar:ActivatedRoute,public http:HttpClient) {
    this.id=ar.snapshot.params.id ; 
   }

  ngOnInit() {
    this.http.get('http://localhost:8888/chercherInscriptionFormation/'+this.id).subscribe(data => {
      // @ts-ignore
      this.formation= data ;
    
 
    }, error => { console.log('ereur') ; } )  ;
this.dat=new Date ; 

  }
  printAttestation(){

    let doc=new jsPDF();
    let specialElementHandlers={
      '#editor': function(element,renderrer){
        return true ; 
      }
    } ; 
    let content=this.content.nativeElement ;  
    doc.fromHTML(content.innerHTML,15,15,{
'width' :190 ,
elementHandlers:specialElementHandlers 


    });

    doc.save('test.pdf');


  }

}
