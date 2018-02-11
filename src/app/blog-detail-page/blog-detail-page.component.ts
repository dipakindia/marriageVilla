import { Router,ActivatedRoute } from '@angular/router';
import { DataService } from './../data.service';
import { Component, OnInit, Input } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-blog-detail-page',
  templateUrl: './blog-detail-page.component.html',
  styleUrls: ['./blog-detail-page.component.css']
})
export class BlogDetailPageComponent implements OnInit {
  public data: any;
  public loading:boolean = true;
  constructor(private data_service:DataService, public router:Router,private activatedRoute: ActivatedRoute) {
      this.activatedRoute.params.subscribe(params => {
            let blog_id = params['id'];
            this.data_service.getSingleBlog(blog_id).subscribe(data=>{
              this.data=data;
              this.loading = false
            })
        });
   
  }
  ngOnInit() {
  }

}
