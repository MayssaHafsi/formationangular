import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Route, Router} from '@angular/router';
import { SeanceFormation } from 'src/model/SeanceFormation';
@Component({
  selector: 'app-edit-seance-formation',
  templateUrl: './edit-seance-formation.component.html',
  styleUrls: ['./edit-seance-formation.component.scss']
})
export class EditSeanceFormationComponent implements OnInit {
ff:SeanceFormation;

id:number ;
  constructor(public route:Router, public ar:ActivatedRoute,public http:HttpClient) { 
    this.id=ar.snapshot.params.id ; 
  }

  ngOnInit() {
    this.http.get('http://localhost:8888/chercherSeance/' + this.id).subscribe(data => {
      // @ts-ignore
      this.ff = data ;
    }, error => { console.log('ereur') ; } )  ;
  }
update(){

  this.http.put('http://localhost:8888/updateSeanceFormation/' + this.ff.id, this.ff).subscribe(data => {console.log(data) ;
  alert('bien') ;
  this.route.navigate(['seanceFormation',this.ff.formationFormateur.id]) ;

}, error => { console.log('ereur') ; } )  ;

}
}
