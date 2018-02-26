import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA,MatDialog } from '@angular/material';
import * as $ from 'jquery';

@Component({
  selector: 'app-islam',
  templateUrl: './islam.component.html',
  styleUrls: ['./islam.component.css']
})
export class IslamComponent implements OnInit {
  @Output() goToFormdata: EventEmitter<any> = new EventEmitter();
  @Output() zoomEmit: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    $('.slick-track').slick({
      centerMode: true,
      centerPadding: '180px',
      //appendArrows: '.slick-track',
      appendArrows: ('.slick-arrows'),
      infinite: true,
      slidesToShow: 3,
      speed: 500,
      arrows:true,
      focusOnSelect: true
    });

    $('.slick-prev').on('click', function(){
      $('.slick-track').slick("slickPrev");
    });

    $('.slick-next').on('click', function(){
      $('.slick-track').slick("slickNext");
    });
  }
  goToForm(){
    this.goToFormdata.emit();
  }
  getZoomImage(event,comm,id){
    this.zoomEmit.emit({event:event,comm:comm,id:id});
  }
}