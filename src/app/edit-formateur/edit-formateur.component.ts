import { Component, OnInit } from '@angular/core';
import {Formateur} from '../../model/Formateur';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-edit-formateur',
  templateUrl: './edit-formateur.component.html',
  styleUrls: ['./edit-formateur.component.scss']
})
export class EditFormateurComponent implements OnInit {
formateur:Formateur ;
cin : string ;
  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router){
 this.cin=ar.snapshot.params.cin ;

  }

  ngOnInit() {
    this.http.get('http://localhost:8888/chercherFormateur/' + this.cin).subscribe(data => {
      // @ts-ignore
      this.formateur = data ;
    }, error => { console.log('ereur') ; } )  ;
    ;
  }
  update()
  {
    this.http.put('http://localhost:8888/updateFormateur/' + this.formateur.cin, this.formateur).subscribe(data => {console.log(data) ;
      alert('bien') ;
      this.route.navigate(['formateurs']) ;

    }, error => { console.log('ereur') ; } )  ;

  }

}
