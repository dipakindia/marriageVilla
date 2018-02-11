import { Component, OnInit, Input } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
 import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-blog',
 templateUrl: './blog.component.html', 
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  private apiUrl='http://localhost/wordpress4AngularJs/wp-json/wp/v2/posts';
  data: any[] = [];
  //data:any[];
  //@Input() contact:any;                     //api call

  constructor (private http: Http){
    this.getBlogData();
   }

   getBlogData(){
     return this.http.get(this.apiUrl).map((res:Response)=>res.json()).subscribe(data=>{
       console.log(data);
       this.data=data;
     })
    
    }

  ngOnInit() {
  }

}
