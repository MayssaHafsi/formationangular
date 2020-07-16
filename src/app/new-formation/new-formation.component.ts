import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Formateur } from 'src/model/Formateur';
import "rxjs/add/operator/map"
import { Observable } from 'rxjs';
import { Formation } from 'src/model/Formation';
import { FormationNonCertifiant } from 'src/model/FormationNonCertifiant';
import { FormationCertifiant } from 'src/model/FormationCertifiant';
import { Domaine } from 'src/model/Domaine';
import { Theme } from 'src/model/Theme';
import { Certification } from 'src/model/Certification';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-new-formation',
  templateUrl: './new-formation.component.html',
  styleUrls: ['./new-formation.component.scss']
})
export class NewFormationComponent implements OnInit {
  listDomaine:any ; 
  listFormateur:any ; 
  listTheme:any ;
  fo:FormationCertifiant=new FormationCertifiant() ; 
  mode:number=1 ; 
  domaine:Domaine=new Domaine();
  theme:Theme=new Theme(); 
  listCertification:any ;
  listCerFor:any ; 
  listThemeCert:any ;
  listUser :any; 
  certification:Certification=new Certification(); 
  them:Theme ; 
  listNiveau:any ; 
  closeResult:string ; 
  constructor(public modalService:NgbModal, public http:HttpClient, public route:Router ) { }
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
    opense(contentse:any){
      this.modalService.open(contentse, { size:"lg",ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

    this.http.get('http://localhost:8888/formateurs').subscribe(data => {
      this.listFormateur = data;
     

    }, error => { console.log('ereur') ; } ) ;
    this.http.get('http://localhost:8888/users').subscribe(data => {
      this.listUser = data;
     

    }, error => { console.log('ereur') ; } ) ;


    this.http.get('http://localhost:8888/certifs').subscribe(data => {
      this.listCerFor = data;
     

    }, error => { console.log('ereur') ; } ) ;


    this.http.get('http://localhost:8888/themes').subscribe(data => {
      this.listTheme = data;
     

    }, error => { console.log('ereur') ; } ) ;
     
    }

  
    save()
    {
       
    this.http.post('http://localhost:8888/addFormation', this.fo).subscribe(data => {console.log(data);
     
   this.route.navigate(['/formation']) ;
    },error =>{
      console.log("erreur");
    }) ;

    }
    selected(event:any){

      this.http.get('http://localhost:8888/chercherThemeCert?id='+this.fo.theme.id).subscribe(data => {
        this.listThemeCert = data;
       
  
      }, error => { console.log('ereur') ; } ) ;
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
    saveCertification(){

      
  this.http.post('http://localhost:8888/addCertification', this.certification).subscribe(data => {console.log(data);
  this.modalService.dismissAll();
  this.ngOnInit();
  },error =>{
  console.log("erreur");
}) ;
    }
  retour(){
    this.mode=1 ;
    this.ngOnInit();
  }
  selecteds(event:any){

    this.http.get('http://localhost:8888/chercherThemeNiveau?id='+this.them.id).subscribe(data => {
      this.listNiveau = data;
     

    }, error => { console.log('ereur') ; } ) ;
  }

}
