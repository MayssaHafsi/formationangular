import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  showFile=false;
liste:any ; 
pag:number=0;
s: number = 10 ;
listDomaine:any ; 
listTheme:any ; 
pages:Array<number>;
mc:string='';
mcd:string ='';; 
mct:string='';
  constructor(public http:HttpClient,public route:Router) { }
  setPage(p,$event:any){
    event.preventDefault()
    this.pag=p;
    this.getPage();


  }
  ngOnInit() {
this.getPage();
this.http.get('http://localhost:8888/domaines').subscribe(data => {
  this.listDomaine = data;
 

}, error => { console.log('ereur') ; } ) ;

this.http.get('http://localhost:8888/themes').subscribe(data => {
  this.listTheme = data;
 

}, error => { console.log('ereur') ; } ) ;


  }
  getPage() {
    //this.pag = p ;
    this.http.get('http://localhost:8888/formationsCon?page='+this.pag+'&size='+this.s).subscribe(data => {
      this.liste = data;
      this.pages = new Array(this.liste.totalPages);

    }, error => { console.log('ereur') ; } ) ;
  }
 

  detailler(id:number)
  {
    this.route.navigate(['detailFormationNC',id])
  }
  inscrire(id:number){

    this.route.navigate(['inscrireFormation',id])
  }
  chercherParNomDomaine(){
    this.http.get('http://localhost:8888/pagerChercherFormationDomaineC?mcd='+this.mcd).subscribe(data => {
      this.liste = data;
      this.pages = new Array(this.liste.totalPages);
    }, error => { console.log('ereur') ; } );
  }  
  chercherParNomTheme(){
    this.http.get('http://localhost:8888/pagerChercherFormationThemeC?mct='+this.mct).subscribe(data => {
      this.liste = data;
      this.pages = new Array(this.liste.totalPages);
    }, error => { console.log('ereur') ; } );

  }
  chercherParType(){
  
    if(this.mc=='fc'){
      this.http.get('http://localhost:8888/pagerFCC?page='+this.pag+'&size='+this.s).subscribe(data => {
        this.liste = data;
        this.pages = new Array(this.liste.totalPages);
  
      }, error => { console.log('ereur') ; } ) ;
    }
    else if(this.mc=='fnc'){
      this.http.get('http://localhost:8888/pagerFNCC?page='+this.pag+'&size='+this.s).subscribe(data => {
        this.liste = data;
        this.pages = new Array(this.liste.totalPages);
  
      }, error => { console.log('ereur') ; } ) ;
    }
  
  }
  showFiles(en:boolean){

    if(en==true){this.showFile=true;}
    else{
      this.showFile=false;
    }
  }
}
