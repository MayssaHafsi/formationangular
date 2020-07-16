import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormationFormateur } from 'src/model/FormationFormateur';

@Component({
  selector: 'app-edit-formation-formateur',
  templateUrl: './edit-formation-formateur.component.html',
  styleUrls: ['./edit-formation-formateur.component.scss']
})
export class EditFormationFormateurComponent implements OnInit {
id:number ; 
aff:FormationFormateur ; 
  constructor(public route:Router , public http:HttpClient,public ar:ActivatedRoute) {
    this.id=ar.snapshot.params.id ; 
   }

  ngOnInit() {
    this.http.get('http://localhost:8888/chercherFormationFormateur/' + this.id).subscribe(data => {
      // @ts-ignore
      this.aff = data ;
    }, error => { console.log('ereur') ; } )  ;
  }
  update(){
    this.http.put('http://localhost:8888/updateFormationFormateur/' + this.aff.id, this.aff).subscribe(data => {console.log(data) ;
      alert('bien') ;
      this.route.navigate(['formationFormateur',this.aff.formation.id]) ;

    }, error => { console.log('ereur') ; } )  ;
  }


}
