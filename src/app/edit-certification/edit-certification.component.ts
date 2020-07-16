import { Component, OnInit } from '@angular/core';

import { Certification } from 'src/model/Certification';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-certification',
  templateUrl: './edit-certification.component.html',
  styleUrls: ['./edit-certification.component.scss']
})
export class EditCertificationComponent implements OnInit {
certification:Certification ; 
id:number;
  constructor(public http:HttpClient, public route:Router,public ar:ActivatedRoute) {
    this.id=ar.snapshot.params.id ; 
   }

  ngOnInit() {
    this.http.get('http://localhost:8888/chercherCertification/' + this.id).subscribe(data => {
      // @ts-ignore
      this.certification = data ;
    }, error => { console.log('ereur') ; } )  ;
    ;
  }
  update(){

    this.http.put('http://localhost:8888/updateCertification/' + this.certification.id, this.certification).subscribe(data => {console.log(data) ;
    alert('bien') ;
    this.route.navigate(['gestionCertification']) ;

  }, error => { console.log('ereur') ; } )  ;
  }

}
