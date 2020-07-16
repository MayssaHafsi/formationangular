import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Theme } from 'src/model/Theme';
import { Niveau } from 'src/model/Niveau';
import { nbind } from 'q';

@Component({
  selector: 'app-gestion-niveau',
  templateUrl: './gestion-niveau.component.html',
  styleUrls: ['./gestion-niveau.component.scss']
})
export class GestionNiveauComponent implements OnInit {
id:number ;
theme:Theme ;
niveau:Niveau=new Niveau();
listeNiveau:any ;
  constructor(public route:Router,public http:HttpClient,public ar:ActivatedRoute) {
    this.id=ar.snapshot.params.id ; 
   }

  ngOnInit() {
    this.http.get('http://localhost:8888/chercherTheme/' + this.id).subscribe(data => {
      // @ts-ignore
     // this.theme = data ;
      this.niveau.themeNiveau=data ;
    
     
    }, error => { console.log('ereur') ; } )  ;

    this.http.get('http://localhost:8888/chercherNiveauTheme/' + this.id).subscribe(data => {
      // @ts-ignore
     // this.theme = data ;
      this.listeNiveau=data ; 
    
     
    }, error => { console.log('ereur') ; } )  ;

    this.http.get('http://localhost:8888/chercherTheme/' + this.id).subscribe(data => {
      // @ts-ignore
     // this.theme = data ;
      this.theme=data;
    
     
    }, error => { console.log('ereur') ; } )  ;
 
  }
  save(){
   

  this.http.post('http://localhost:8888/addNiveau', this.niveau).subscribe(data => {console.log(data);
this.niveau.nom=" ";
this.ngOnInit();

},error =>{
  console.log("erreur");
}) ;
  }
  edit(id:number){
    this.route.navigate(['editNiveau',id])

  }
  delete(c:Niveau){
    const conf = window.confirm('voulais vraiment supprimer niveau ?');
    if (conf === true) {


      this.http.delete('http://localhost:8888/deleteNiveau/'+c.id).subscribe(data => {
        if(data==true)
        this.listeNiveau.splice(this.listeNiveau.indexOf(c), 1);
else{
  alert("suppresion imppossible !!!")
}
      }, error => {
        console.log('ereur');
      });
    }
  }

}
