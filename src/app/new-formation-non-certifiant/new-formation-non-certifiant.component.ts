import { Component, OnInit } from '@angular/core';
import { FormationNonCertifiant } from 'src/model/FormationNonCertifiant';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Domaine } from 'src/model/Domaine';
import { Theme } from 'src/model/Theme';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-formation-non-certifiant',
  templateUrl: './new-formation-non-certifiant.component.html',
  styleUrls: ['./new-formation-non-certifiant.component.scss']
})
export class NewFormationNonCertifiantComponent implements OnInit {
  closeResult: string;
  listDomaine:any ; 
  listFormateur:any ; 
  listTheme:any ;
  fo:FormationNonCertifiant=new FormationNonCertifiant() ; 
  mode:number=1 ; 
  domaine:Domaine=new Domaine();
  theme:Theme=new Theme();
  modalRef:any=null ;
  constructor(public modalService:NgbModal, public http:HttpClient , public route:Router) { }

  open(contents:any) {
 
  this.modalRef=  this.modalService.open(contents, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  opens(contents:any){

    this.modalRef=  this.modalService.open(contents, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  ngOnInit() {
    
    this.http.get('http://localhost:8888/domaines').subscribe(data => {
      this.listDomaine = data;
     

    }, error => { console.log('ereur') ; } ) ;

    this.http.get('http://localhost:8888/themes').subscribe(data => {
      this.listTheme = data;
     

    }, error => { console.log('ereur') ; } ) ;
  }



  












  save()
  {
    this.fo.type="FNC" ; 
    this.http.post('http://localhost:8888/addFormationNC', this.fo).subscribe(data => {console.log(data);
   
 this.route.navigate(['/formation']) ;
  },error =>{
    console.log("erreur");
  }) ;
  }
  saveDomaine(){
    this.http.post('http://localhost:8888/addDomaine', this.domaine).subscribe(data => {console.log(data);
this.modalService.dismissAll();
   this.ngOnInit();
   this.domaine.nom='';
    },error =>{
    console.log("erreur");
    });

 
  }
  saveTheme(){
    this.http.post('http://localhost:8888/addTheme', this.theme).subscribe(data => {console.log(data);
    this.modalService.dismissAll();
    this.ngOnInit();
    this.theme.nom='';
     },error =>{
     console.log("erreur");
   }) ;
  }
  retour(){
    this.mode=1 ;
    this.ngOnInit();
  }
}
