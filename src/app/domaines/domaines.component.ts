import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Domaine} from '../../model/Domaine';
import {Router, ActivatedRoute} from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-domaines',
  templateUrl: './domaines.component.html',
  styleUrls: ['./domaines.component.scss']
})
export class DomainesComponent implements OnInit {
  liste: any ;
  pag:number=0;
  s: number = 3 ;
nom:string='' ; 
  pages:Array<number>;
 
  

  constructor(public http:HttpClient,public route:Router) { }
 setPage(p,$event:any){
    event.preventDefault()
    this.pag=p;
    this.getPage();


  }
  ngOnInit() {
    

 this.getPage();

  }

    getPage() {
    //this.pag = p ;
    this.http.get('http://localhost:8888/pager?page='+this.pag+'&size='+this.s).subscribe(data => {
      this.liste = data;
      this.pages = new Array(this.liste.totalPages);

    }, error => { console.log('ereur') ; } ) ;
  }
 
  delete(c:Domaine){
    const conf = window.confirm('est vous sur de suprimer ?');
    if (conf === true) {


      this.http.delete('http://localhost:8888/deleteDomaine/'+c.id).subscribe(data => {
        if(data==true)
        this.liste.content.splice(this.liste.content.indexOf(c), 1);
else{
  alert(" Suppresion imposible !! domaine affecté a un formation ou un certification !! ");
}
      }, error => {
        console.log('ereur');
      });
    }
  }
  edit(id:number){
    this.route.navigate(['editDomaine' , id  ] );
}
chercher(){
  this.http.get('http://localhost:8888/pagerChercherDomaineNom?nom='+this.nom).subscribe(data => {
    this.liste = data;
    this.pages = new Array(this.liste.totalPages);
  }, error => { console.log('ereur') ; } );
}

}
