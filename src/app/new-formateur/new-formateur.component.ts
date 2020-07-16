import { Component, OnInit } from '@angular/core';
import {Formateur} from '../../model/Formateur';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-formateur',
  templateUrl: './new-formateur.component.html',
  styleUrls: ['./new-formateur.component.scss']
})
export class NewFormateurComponent implements OnInit {
formateur:Formateur=new Formateur();
liste:any ; 
  constructor(public  http:HttpClient, public route:Router ) { }

  ngOnInit() {
    this.http.get('http://localhost:8888/formateurs').subscribe(data => {
      this.liste = data;


    }, error => { console.log('ereur') ; } ) ;
  }
save()
{
  for(var i=0;i<this.liste.length;i++)
  {
    if(this.liste[i].cin==this.formateur.cin)
    alert('impo') ; 
  }
  this.http.post('http://localhost:8888/addFormateur', this.formateur).subscribe(data => {console.log(data);
    this.route.navigate(['/formateurs']) ;
  },error =>{
    console.log("erreur");
  }) ;

}
}
