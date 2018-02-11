import { DataService } from './../data.service';
import { Component, OnInit, Input } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
 import {Observable} from "rxjs/Observable";
 export interface blogData {
  id: Number,
  "date":String,
  "date_gmt": String,
  "guid": {
      "rendered": String
  },
  "modified": String,
  "modified_gmt": String,
  "slug": String,
  "status": String,
  "type": String,
  "link": String,
  "title": {
      "rendered": String
  },
  "content": {
      "rendered": String,
      "protected": Boolean
  },
  "excerpt": {
      "rendered": String,
      "protected": Boolean
  },
  "author": Number,
  "featured_media": Number,
  "comment_status": String,
  "ping_status": String,
  "sticky": Boolean,
  "template": String,
  "format":String,
  "meta": String[],
  "categories": Number[],
  "tags": String[]
}
@Component({
  selector: 'app-blog',
 templateUrl: './blog.component.html', 
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  private apiUrl='http://localhost/wordpress4AngularJs/wp-json/wp/v2/posts';
  public data: any;
  public images:any = {};
  //data:any[];
  //@Input() contact:any;                     //api call

  constructor (private data_service: DataService){
    this.data_service.getBlog().subscribe(data => {
      //alert(JSON.stringify(data))
      this.data = data;
    })
   }



  ngOnInit() {
  }

image(image_id){
  var image = '';
  alert(JSON.stringify(image_id))
  this.data_service.getImage(image_id).subscribe(img => {

    image = img['guid'].rendered;
    this.images[image_id] = image
  });
  //return image;
}
}
