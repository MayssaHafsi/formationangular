import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/model/Theme';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-theme',
  templateUrl: './edit-theme.component.html',
  styleUrls: ['./edit-theme.component.scss']
})
export class EditThemeComponent implements OnInit {
theme:Theme ; 
id:number ; 
  constructor(public route:Router,public http:HttpClient,public ar:ActivatedRoute) {
    this.id=ar.snapshot.params.id;
    
   }

  ngOnInit() {
    this.http.get('http://localhost:8888/chercherTheme/' + this.id).subscribe(data => {
      // @ts-ignore
      this.theme= data ;
     
      
    }, error => { console.log('ereur') ; } )  ;
  }
  edit(){
    this.http.put('http://localhost:8888/updateTheme/' + this.theme.id, this.theme).subscribe(data => {console.log(data) ;
    alert('bien') ;
    this.route.navigate(['gestionTheme']) ;

  }, error => { console.log('ereur') ; } )  ;

  }

}
