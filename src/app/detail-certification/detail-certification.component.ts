import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Certification } from 'src/model/Certification';
import { Observable } from 'rxjs';
import { UploadFileCertificationService } from '../uploadcertification/upload-file-certification.service';

@Component({
  selector: 'app-detail-certification',
  templateUrl: './detail-certification.component.html',
  styleUrls: ['./detail-certification.component.scss']
})
export class DetailCertificationComponent implements OnInit {
id:number ;
certification:Certification ;
listeInscrits:any ; 
fileUploads: Observable<string[]>;
  constructor(public http:HttpClient,public route:Router,public ar:ActivatedRoute,public uploadService:UploadFileCertificationService) {
    this.id=ar.snapshot.params.id ; 
   }

  ngOnInit() {
    this.http.get('http://localhost:8888/chercherCertification/'+this.id).subscribe(data => {
      // @ts-ignore
      this.certification= data ;
      console.log(this.certification);
 
    }, error => { console.log('ereur') ; } )  ;
    this.fileUploads = this.uploadService.getFiles(this.id);

    this.http.get('http://localhost:8888/findParCertificationConfirme/'+this.id).subscribe(data => {
      // @ts-ignore
      this.listeInscrits= data ;
 
    }, error => { console.log('ereur') ; } )  ;

  }
  printInscrit(){

   this.route.navigate(['printInscritCer',this.id])
     }
   
}
