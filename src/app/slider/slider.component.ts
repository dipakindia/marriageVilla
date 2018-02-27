import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.slick-track').slick({
      centerPadding: '0px',
      //appendArrows: '.slick-track',
      appendArrows: ('.slick-arrows'),
      infinite: true,
      slidesToShow: 1,
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

  slides = [
    { img: 'http://placehold.it/350x150/000000' },
    { img: 'http://placehold.it/350x150/111111' },
    { img: 'http://placehold.it/350x150/222222' },
    { img: 'http://placehold.it/350x150/333333' },
    { img: 'http://placehold.it/350x150/444444' },
    { img: 'http://placehold.it/350x150/555555' }
  ];
   slideConfig = { 'slidesToShow': 4, 'slidesToScroll': 4 };

  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/666666' })
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  afterChange(e) {
    console.log('afterChange', e);
  }
}
