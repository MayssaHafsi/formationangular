import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Certification } from 'src/model/Certification';
import { UploadFileCertificationService } from '../uploadcertification/upload-file-certification.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-certification-aux-inscrit',
  templateUrl: './detail-certification-aux-inscrit.component.html',
  styleUrls: ['./detail-certification-aux-inscrit.component.scss']
})
export class DetailCertificationAuxInscritComponent implements OnInit {
id:number ; 
cer:Certification=new Certification();
fileUploads: Observable<string[]>;
  constructor(public route:Router,public ar:ActivatedRoute,public http:HttpClient,public uploadService:UploadFileCertificationService) { 
    this.id=ar.snapshot.params.id ; 
  }

  ngOnInit() {
    this.http.get('http://localhost:8888/chercherCertification/'+this.id).subscribe(data => {
      // @ts-ignore
      this.cer= data ;
 
    }, error => { console.log('ereur') ; } )  ;

    this.fileUploads = this.uploadService.getFiles(this.id);
  }
envoyer(){
this.route.navigate(['inscrireCertification',this.id])

}
}
