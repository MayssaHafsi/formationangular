import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SeanceFormation } from 'src/model/SeanceFormation';

@Component({
  selector: 'app-seance-formation',
  templateUrl: './seance-formation.component.html',
  styleUrls: ['./seance-formation.component.scss']
})
export class SeanceFormationComponent implements OnInit {
id:number ; 
ff :SeanceFormation=new SeanceFormation() ;
listes:any ;
  constructor(public http:HttpClient,public route:Router,public ar:ActivatedRoute) { 

    this.id=ar.snapshot.params.id ; 
  }

  ngOnInit() {

    this.http.get('http://localhost:8888/chercherFormationFormateur/'+this.id).subscribe(data => {
      // @ts-ignore
      this.ff.formationFormateur= data ;
    
    }, error => { console.log('ereur') ; } )  ;

    this.http.get('http://localhost:8888/findSeanceFormateur/'+this.id).subscribe(data => {
      // @ts-ignore
      this.listes= data ;
    
    }, error => { console.log('ereur') ; } )  ;
  }
affecter()
{
    if(this.ff.datejour < this.ff.formationFormateur.datedebut || this.ff.datejour > this.ff.formationFormateur.datefin  )
    {
      alert("verifier la date de seance de formation en fonction de date  debutet fin de formation !! ")
    }
    else{
  this.http.post('http://localhost:8888/addSeance', this.ff).subscribe(data => {
    this.route.navigate(['/seanceFormation/'+this.id]) ;
  this.ff=new SeanceFormation();
  this.ngOnInit();
  },error =>{
  console.log("erreur");
}) ;
}
}
edit(id:number){
  this.route.navigate(['editSeanceFormation',id])
  
}
delete(s:SeanceFormation){
  const conf = window.confirm('est vous sur de suprimer ?');
  if (conf === true) {


    this.http.delete('http://localhost:8888/deleteSeanceFormation/'+s.id).subscribe(data => {
   this.ngOnInit();

    }, error => {
      console.log('ereur');
    });
  }
}

}
