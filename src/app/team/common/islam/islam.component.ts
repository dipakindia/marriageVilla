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
  constructor() { }

  ngOnInit() {
    $('.slick-track').slick({
      centerMode: true,
      centerPadding: '60px',
      //appendArrows: '.slick-track',
      appendArrows: ('.slick-arrows'),
      infinite: true,
      slidesToShow: 5,
      speed: 500,
      arrows:true,
     
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
}
