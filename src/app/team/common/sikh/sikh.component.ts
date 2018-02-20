import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA,MatDialog } from '@angular/material';
import * as $ from 'jquery';

@Component({
  selector: 'app-sikh',
  templateUrl: './sikh.component.html',
  styleUrls: ['./sikh.component.css']
})
export class SikhComponent implements OnInit {
  public community =  ['1','2','3','4','5','1','2','3']; 
  @Output() goToFormdata: EventEmitter<any> = new EventEmitter();
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
}
