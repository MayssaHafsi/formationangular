import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Domaine} from '../../model/Domaine';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-domaine',
  templateUrl: './new-domaine.component.html',
  styleUrls: ['./new-domaine.component.scss']
})
export class NewDomaineComponent implements OnInit {
 domaine:Domaine=new Domaine() ;
  constructor(public  http:HttpClient,public  route:Router) { }

  ngOnInit() {
  }

  save(){
    this.http.post('http://localhost:8888/addDomaine', this.domaine).subscribe(data => {console.log(data);
      this.route.navigate(['/domaines']) ;
      },error =>{
      console.log("erreur");
    }) ;
  }

}
