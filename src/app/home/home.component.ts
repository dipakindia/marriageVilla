import { Router } from '@angular/router';
import { LoadingFormComponent } from './../add-personal-info/loading-form';
import { MatDialog } from '@angular/material';
import { CommunityDialog } from './../dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import { DataService } from './../data.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public data: any;
  public images:any = {};

  constructor( private data_service: DataService,public dialog: MatDialog,public router: Router) {
    this.data_service.getBlog().subscribe(data => {
      this.data = data;
    })
  }



  ngOnInit() {
    (function () {
      var $car = $('.horse-car');
      var $wheel = $('.round');

      var $win = $(window);

      $win.bind('scroll', function () {
        var to = $win.scrollTop() / 5;  // if u want to change spreed //
        $car.css('transform', 'translateX(' + to + 'px)');

        var to = $win.scrollTop() / 3;  // if u want to change spreed //
        $wheel.css('transform', 'rotate(' + to + 'deg)');
      });
  }());

  }
  setCommunity(event, vt){
    localStorage.setItem('set_community',vt)
    this.router.navigate(['/select-template']);
  }
  onSubmit() {
    let dialogRef = this.dialog.open(CommunityDialog, {
      width: '60%',
      height: '75%',
      data: ''
    });
  } 

}
