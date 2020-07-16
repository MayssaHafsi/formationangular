import { Component,OnDestroy, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Formation } from 'src/model/Formation';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormationNonCertifiant } from 'src/model/FormationNonCertifiant';
import {formatDate } from '@angular/common';
import { FormationCertifiant } from 'src/model/FormationCertifiant';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-gestionformation',
  templateUrl: './gestionformation.component.html',
  styleUrls: ['./gestionformation.component.scss']
})
export class GestionformationComponent implements  OnDestroy , OnInit {
  fo:Formation=new Formation() ; 
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject()
liste:any ;
pag:number=0;
s: number = 4 ;
pages:Array<number>;
datedebut: Date=new Date() ; 
datefin:Date =new Date();
mc:string='';
mct:string='';
mcd:string='' ;
  constructor(public http:HttpClient,public route:Router) { }
  setPage(p,$event:any) {
    event.preventDefault()
    this.pag = p;
    this.getPage();
  }
  getPage() {
    // http://localhost:8888/pagerFormation?page='+this.pag+'&size='+this.s
     this.http.get('http://localhost:8888/pagerFormation?page='+this.pag+'&size='+this.s).subscribe(data => {
       this.liste = data;
       this.pages = new Array(this.liste.totalPages);
 
     }, error => { console.log('ereur') ; } ) ;
   }
  ngOnInit() {
    this.initDataTable();

    this.getPage();
    this.dtTrigger.next();
  }
  initDataTable():void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      dom: 'Bfrtip',
      // buttons: [
      //   'print',
      //   'csv'
      // ],
      responsive: true,
      /* below is the relevant part, e.g. translated to spanish */
      language: {

        processing: "chargement...",
        search: "Rechercher:",
        lengthMenu: "Mostrar _MENU_ &eacute;l&eacute;ments",
        info: "Affichage de l'élément _START_ à _END_ sur _TOTAL_ éléments",
        
        infoFiltered: "(filtré à partir de _MAX_ éléments au total)",
        infoPostFix: "",
        loadingRecords: "Chargement...",
        zeroRecords: "Aucune donnée à afficher",
        emptyTable: "Liste vide",
        paginate: {
          first: "Premier",
          previous: "Dernier",
          next: "Suivant",
          last: "Précédent"
        },
        aria: {
          sortAscending: ":  activer pour trier la colonne par ordre croissant",
          sortDescending: ": activer pour trier la colonne par ordre décroissant"
        }
      }
    };
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  search() {

    this.http.get('http://localhost:8888/ChercherformationDate?datedebut='+new Date( this.datedebut) +'&datefin='+ new Date( this.datefin)).subscribe(data => {
    console.log(this.datedebut); 
    this.liste = data;
      this.pages = new Array(this.liste.totalPages);
    }, error => { console.log('ereur') ; } );

  }


  chercherParDate(){
this.search();

  }
  formateur(id:number){
    this.route.navigate(['formationFormateur' , id  ] );
  }
  detailFormation(id:number){
    this.route.navigate(['detailFormation' , id  ] );

  }

  edit(id:number)
  {
    this.route.navigate(['editFormationNC' , id  ] );
  }

delete(id:number){
  
  
  const conf = window.confirm('voulais vous supprimer la formation?');
  if (conf === true) {


    this.http.delete('http://localhost:8888/deleteFormation/' + id).subscribe(data => {
      this.liste.content.splice(this.liste.content.indexOf(), 1);

    }, error => {
      console.log('ereur');
    });
  }

else 

{
}
}

chercher(){
  
  if(this.mc=='fc'){
    this.http.get('http://localhost:8888/pagerFC?page='+this.pag+'&size='+this.s).subscribe(data => {
      this.liste = data;
      this.pages = new Array(this.liste.totalPages);

    }, error => { console.log('ereur') ; } ) ;
  }
  else if(this.mc=='fnc'){
    this.http.get('http://localhost:8888/pagerFNC?page='+this.pag+'&size='+this.s).subscribe(data => {
      this.liste = data;
      this.pages = new Array(this.liste.totalPages);

    }, error => { console.log('ereur') ; } ) ;
  }

}
cours(id:number){
  this.route.navigate(['cours',id]);
}

chercherParNom(){
  this.http.get('http://localhost:8888/pagerChercherFormationTheme?mct='+this.mct).subscribe(data => {
    this.liste = data;
    this.pages = new Array(this.liste.totalPages);
  }, error => { console.log('ereur') ; } );

}
chercherParNomDomaine(){
  this.http.get('http://localhost:8888/pagerChercherFormationDomaine?mcd='+this.mcd).subscribe(data => {
    this.liste = data;
    this.pages = new Array(this.liste.totalPages);
  }, error => { console.log('ereur') ; } );




}

}
