import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Formateur} from '../../model/Formateur';

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.scss']
})
export class FormateursComponent implements OnInit {
  liste: any ;
  pag:number=0;
  s: number = 3 ;
  cin:string = '' ;

  pages:Array<number>;
  constructor(public route:Router,public  http:HttpClient) { }
  setPage(p,$event:any) {
    event.preventDefault()
    this.pag = p;
    this.getPage();
  }


    ngOnInit() {
    this.getPage() ;
  }
  getPage() {
    //this.pag = p ;
    this.http.get('http://localhost:8888/pagerFormateur?page='+this.pag+'&size='+this.s).subscribe(data => {
      this.liste = data;
      this.pages = new Array(this.liste.totalPages);

    }, error => { console.log('ereur') ; } ) ;
  }
  search() {

    this.http.get('http://localhost:8888/pagerChercherFormateur?cin='+this.cin).subscribe(data => {
      this.liste = data;
      this.pages = new Array(this.liste.totalPages);
    }, error => { console.log('ereur') ; } );

  }
  chercherParCin(){

this.search() ;
  }

  edit(cin:string){
    this.route.navigate(['editFormateur' ,cin  ] );
  }
  delete(f:Formateur)
  {
    const conf = window.confirm('est vous sur de suprimer ?');
    if (conf === true) {


      this.http.delete('http://localhost:8888/deleteFormateur/'+f.cin).subscribe(data => {
        this.liste.content.splice(this.liste.content.indexOf(f), 1);

      }, error => {
        console.log('ereur');
      });
    }
  }

}
