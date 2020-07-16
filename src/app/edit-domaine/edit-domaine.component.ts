import { Component, OnInit } from '@angular/core';
import {Domaine} from '../../model/Domaine';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-edit-domaine',
  templateUrl: './edit-domaine.component.html',
  styleUrls: ['./edit-domaine.component.scss']
})
export class EditDomaineComponent implements OnInit {
domaine : Domaine ;
id:number;
  constructor(public ar:ActivatedRoute,public route:Router,public http:HttpClient) { this.id=ar.snapshot.params.id }

  ngOnInit() {
    this.http.get('http://localhost:8888/chercher/' + this.id).subscribe(data => {
      // @ts-ignore
      this.domaine = data ;
    }, error => { console.log('ereur') ; } )  ;
    ;
  }
  update(){
    this.http.put('http://localhost:8888/updateDomaine/' + this.domaine.id, this.domaine).subscribe(data => {console.log(data) ;
      alert('bien') ;
      this.route.navigate(['domaines']) ;

    }, error => { console.log('ereur') ; } )  ;

  }

}
