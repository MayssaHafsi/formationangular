import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Certification } from 'src/model/Certification';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import * as jsPDF from 'jspdf' ; 

@Component({
  selector: 'app-print-inscrit-cer',
  templateUrl: './print-inscrit-cer.component.html',
  styleUrls: ['./print-inscrit-cer.component.scss']
})
export class PrintInscritCerComponent implements OnInit {

  id:number ; 
  cer:Certification=new Certification();
  listeInscrits:any ; 
  
  @ViewChild('content') content:ElementRef ; 
    constructor(public route:Router,public ar:ActivatedRoute,public http:HttpClient) {
  
      this.id=ar.snapshot.params.id ; 
     }

  ngOnInit() {
    this.http.get('http://localhost:8888/chercherCertification/'+this.id).subscribe(data => {
      // @ts-ignore
      this.cer= data ;
 
    }, error => { console.log('ereur') ; } )  ;

    this.http.get('http://localhost:8888/findParCertificationConfirme/'+this.id).subscribe(data => {
      // @ts-ignore
      this.listeInscrits= data ;
 
    }, error => { console.log('ereur') ; } )  ;

  }
  printInscrit(){

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
