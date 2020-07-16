import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../app.component.scss','./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
nbrInscrit:number=0;
nbrf:number=0;
nbrc:number=0;
listInscrits:any ; 
listF:any;
listC:any ;
showFile = false;
  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8888/demandeurs').subscribe(data => {
      this.listInscrits = data;
     console.log('hhhhhhhhhhhh'+this.listInscrits.length)
     for(var i=0;i<this.listInscrits.length;i++)
     {
       if(this.listInscrits[i]!=null)
       {
         this.nbrInscrit=this.nbrInscrit+1;
       }
 
   }
    }, error => { console.log('ereur') ; } ) ;
    this.http.get('http://localhost:8888/formations').subscribe(data => {
      this.listF = data;
     console.log('hhhhhhhhhhhh'+this.listF.length)
     for(var j=0;j<this.listF.length;j++)
     {
       if(this.listF[j]!=null)
       {
         this.nbrf=this.nbrf+1;
       }
 
   }
    }, error => { console.log('ereur') ; } ) ;


    this.http.get('http://localhost:8888/certifs').subscribe(data => {
      this.listC = data;
     console.log('hhhhhhhhhhhh'+this.listC.length)
     for(var k=0;k<this.listC.length;k++)
     {
       if(this.listC[k]!=null)
       {
         this.nbrc=this.nbrc+1;
       }
 
   }
    }, error => { console.log('ereur') ; } ) ;
}
  afficher(enable: boolean){
    this.showFile=enable ; 
    if(enable==true){
document.getElementById('h').innerHTML="Presentation 4c"
document.getElementById('p').innerHTML="Les Centres de Carrière et de Certification des compétences « 4C » est un projet national qui a pour but d’améliorer l’employabilité des étudiants à travers des programmes de conseil, d’accompagnement, de formation et d’ouverture sur l’environnement socio-économique. Le centre « 4C » est une structure présente dans les établissements universitaires et constitue le maillon entre l’université et les acteurs socio-économiques."
    }
  }

}
