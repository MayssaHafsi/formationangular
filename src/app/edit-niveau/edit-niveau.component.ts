import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Niveau } from 'src/model/Niveau';

@Component({
  selector: 'app-edit-niveau',
  templateUrl: './edit-niveau.component.html',
  styleUrls: ['./edit-niveau.component.scss']
})
export class EditNiveauComponent implements OnInit {
id:number ; 
niveau:Niveau ;
  constructor(public route:Router, public ar:ActivatedRoute,public http:HttpClient) {

    this.id=ar.snapshot.params.id ; 
       }
       
  ngOnInit() {
    this.http.get('http://localhost:8888/chercherNiveau/' + this.id).subscribe(data => {
      // @ts-ignore
      this.niveau= data ;
     
      
    }, error => { console.log('ereur') ; } )  ;
  }

  edit()
  {
    this.http.put('http://localhost:8888/updateNiveau/' + this.niveau.id, this.niveau).subscribe(data => {console.log(data) ;
    alert('bien') ;
    this.route.navigate(['gestionNiveau',this.niveau.themeNiveau.id]) ;

  }, error => { console.log('ereur') ; } )  ;


  }

}
