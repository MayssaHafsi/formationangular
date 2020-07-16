import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/model/Formation';

import * as jsPDF from 'jspdf' ; 
import { UploadFileService } from '../upload/upload-file.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-detailformation',
  templateUrl: './detailformation.component.html',
  styleUrls: ['./detailformation.component.scss']
})
export class DetailformationComponent implements OnInit {
id:number ; 
formation :Formation=new Formation();
listes:any ; 
liste:any;
modr:number=1;
listeInscrits:any ; 
fileUploads: Observable<string[]>;
@ViewChild('content') content:ElementRef ; 
  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router,public uploadService:UploadFileService) {
    this.id=ar.snapshot.params.id ; 
   }

  ngOnInit() {
    this.http.get('http://localhost:8888/chercherFormationG/'+this.id).subscribe(data => {
      // @ts-ignore
      this.formation= data ;
      console.log(this.formation);
 
    }, error => { console.log('ereur') ; } )  ;

    this.fileUploads = this.uploadService.getFiles(this.id);
    this.http.get('http://localhost:8888/findalls/'+this.id).subscribe(data => {
      // @ts-ignore
      this.listes= data ;
    
 
    }, error => { console.log('ereur') ; } )  ;
  
    this.http.get('http://localhost:8888/findSeanceFormation/'+this.id).subscribe(data => {
      // @ts-ignore
      this.liste= data ;
    
 
    }, error => { console.log('ereur') ; } )  ;


    this.http.get('http://localhost:8888/findParFormationsConfirme/'+this.id).subscribe(data => {
      // @ts-ignore
      this.listeInscrits= data ;
 
    }, error => { console.log('ereur') ; } )  ;
  }
  printInscrit(){
 /*   let doc=new jsPDF();
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

    doc.save('test.pdf');*/

this.route.navigate(['printInscritFNC',this.id])
  }
envoyerAttestation(id:number){
  this.route.navigate(['attestationFormation',id]);
  
}
}
