import { Component, OnInit } from '@angular/core';
import { Demandeur } from 'src/model/Demandeur';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-demandeur',
  templateUrl: './new-demandeur.component.html',
  styleUrls: ['./new-demandeur.component.scss']
})
export class NewDemandeurComponent implements OnInit {
demandeur:Demandeur=new Demandeur() ; 

  constructor(public  http:HttpClient,public  route:Router) { }

  ngOnInit() {
  }
save(){
  this.http.post('http://localhost:8888/addDemandeur', this.demandeur).subscribe(data => {console.log(data);
  //this.route.navigate(['/domaines']) ;
  },error =>{
  console.log("erreur");
}) ;
}
}
