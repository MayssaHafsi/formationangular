import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFileCertificationService } from '../upload-file-certification.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.scss']
})
export class FormUploadComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  fileUploads: Observable<string[]>;
  nom:string;
  id:number ; 
  progress: { percentage: number } = { percentage: 0 };
  constructor(private uploadService: UploadFileCertificationService, public ar:ActivatedRoute,public http:HttpClient) {
    this.id=ar.snapshot.params.id ; 
   }

  ngOnInit() {
    this.fileUploads = this.uploadService.getFiles(this.id);
 console.log(this.fileUploads);
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.nom=this.currentFileUpload.name
  }
 
  upload() {
    this.progress.percentage = 0;
    
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload,this.id).subscribe(event => {
      this.ngOnInit();
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
     
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    }
    
    );
this.nom='';
    this.selectedFiles = undefined;
  }

  delete(id:number){
console.log(id);
const conf = window.confirm('est vous sur de suprimer ?');
if (conf === true) {


  this.http.delete('http://localhost:8888/api/file/deleteCoursCertification/'+id).subscribe(data => {

   // this.fileUploads.content.splice(this.liste.content.indexOf(c), 1);
this.ngOnInit();
  }, error => {
    console.log('ereur');
  });
}
}

}
