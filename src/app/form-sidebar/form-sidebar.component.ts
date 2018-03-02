import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-form-sidebar',
  templateUrl: './form-sidebar.component.html',
  styleUrls: ['./form-sidebar.component.css']
})
export class FormSidebarComponent implements OnInit {
  selected:string = '1';
  constructor() { }

  ngOnInit() {
  }
  secondFirst($event, list, count){
    $("html, body").animate({ scrollTop: count }, 1000);
    this.selected = list;
  }
  /* secondFirst(){
    $("html, body").animate({ scrollTop: 100 }, 1000);
  } */
}
