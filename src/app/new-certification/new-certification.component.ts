import { Component, OnInit } from '@angular/core';
import { Certification } from 'src/model/Certification';
import { HttpClient } from '@angular/common/http';
import { Theme } from 'src/model/Theme';
import { Router } from '@angular/router';

import { Domaine } from 'src/model/Domaine';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-new-certification',
  templateUrl: './new-certification.component.html',
  styleUrls: ['./new-certification.component.scss']
})
export class NewCertificationComponent implements OnInit {
  listDomaine:any ; 
  closeResult:string ; 
  listNiveau:any ; 
  listTheme:any ; 
  them:Theme ; 
  mode:number=1 ; 
  domaine:Domaine=new Domaine();
  theme:Theme=new Theme();
certification:Certification=new Certification();
  constructor(public modalService:NgbModal, public http:HttpClient,public route:Router) { }
  open(contents:any) {
 
     this.modalService.open(contents, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
    opens(contents:any){

       this.modalService.open(contents, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
  selected(event:any){

    this.http.get('http://localhost:8888/chercherThemeNiveau?id='+this.them.id).subscribe(data => {
      this.listNiveau = data;
     

    }, error => { console.log('ereur') ; } ) ;
  }
save(){

  this.http.post('http://localhost:8888/addCertification', this.certification).subscribe(data => {console.log(data);
  this.route.navigate(['/gestionCertification']) ;
  },error =>{
  console.log("erreur");
}) ;
}

saveDomaine(){
  this.http.post('http://localhost:8888/addDomaine', this.domaine).subscribe(data => {console.log(data);
this.modalService.dismissAll();
this.domaine.nom='';
 this.ngOnInit();
  },error =>{
  console.log("erreur");
}) ;
}
saveTheme(){
  this.http.post('http://localhost:8888/addTheme', this.theme).subscribe(data => {console.log(data);
this.modalService.dismissAll();
this.theme.nom='';
  this.ngOnInit();
   },error =>{
   console.log("erreur");
 }) ;
}
retour(){
  this.mode=1 ;
  this.ngOnInit();
}
}
