import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/model/Formation';
import { HttpClient } from '@angular/common/http';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { UploadFileService } from '../upload/upload-file.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-detail-fromation-nc',
  templateUrl: './detail-fromation-nc.component.html',
  styleUrls: ['./detail-fromation-nc.component.scss']
})
export class DetailFromationNCComponent implements OnInit {
  id:number ; 
  formation :Formation=new Formation();
  listes:any ; 
  liste:any;
  fileUploads: Observable<string[]>;
  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router,public uploadService:UploadFileService) {
    this.id=ar.snapshot.params.id ;
   }

  ngOnInit() {
    this.http.get('http://localhost:8888/chercherFormationG/'+this.id).subscribe(data => {
      // @ts-ignore
      this.formation= data ;
 
    }, error => { console.log('ereur') ; } )  ;
    this.http.get('http://localhost:8888/findalls/'+this.id).subscribe(data => {
      // @ts-ignore
      this.listes= data ;
    
 
    }, error => { console.log('ereur') ; } )  ;
    this.fileUploads = this.uploadService.getFiles(this.id);
    this.http.get('http://localhost:8888/findSeanceFormation/'+this.id).subscribe(data => {
      // @ts-ignore
      this.liste= data ;
    
 
    }, error => { console.log('ereur') ; } )  ;
  }
  envoyer(){
this.route.navigate(['inscrireFormation',this.id])

  }

}
