import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Theme } from 'src/model/Theme';

@Component({
  selector: 'app-gestion-theme',
  templateUrl: './gestion-theme.component.html',
  styleUrls: ['./gestion-theme.component.scss']
})
export class GestionThemeComponent implements OnInit {

  liste: any ;
  pag:number=0;
  s: number = 3 ;

  pages:Array<number>;
 
  theme:Theme=new Theme() ; 

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
    this.http.get('http://localhost:8888/pagerTheme?page='+this.pag+'&size='+this.s).subscribe(data => {
      this.liste = data;
      this.pages = new Array(this.liste.totalPages);

    }, error => { console.log('ereur') ; } ) ;
  }
save(){
  this.http.post('http://localhost:8888/addTheme', this.theme).subscribe(data => {console.log(data);
this.ngOnInit();
this.theme.nom=" ";
},error =>{
  console.log("erreur");
}) ;
}
niveau(c:Theme){
  this.route.navigate(['gestionNiveau',c.id])
}


edit(id:number){
  this.route.navigate(['editTheme',id]);
}
delete(c:Theme){

  const conf = window.confirm('voulais vraiment supprimer ce thème ?');
  if (conf === true) {


    this.http.delete('http://localhost:8888/deleteTheme/'+c.id).subscribe(data => {
     if(data==true)
      this.liste.content.splice(this.liste.content.indexOf(c), 1);
      else 
      {
        alert("Suppresion impposible !!! Thème possède des niveaux ou affecté a un  formation !");
      }
    }, error => {
      console.log('ereur');
    });
  }
}
}
