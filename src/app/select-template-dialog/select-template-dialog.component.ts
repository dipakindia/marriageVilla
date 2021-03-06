import { AddPersonalInfoComponent } from './../add-personal-info/add-personal-info.component';
import { FormContentComponent } from './../form-content/form-content.component';
import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-select-template-dialog',
  templateUrl: './select-template-dialog.component.html',
  styleUrls: ['./select-template-dialog.component.css']
})
export class SelectTemplateDialogComponent implements OnInit {

  public val = 0;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,public dialog: MatDialog) { }


  ngOnInit(){}
  goToForm(){
    let dialogRef = this.dialog.open(AddPersonalInfoComponent, {
      width: '100%',
      height: '100%',
      panelClass: 'full-width-popup',
      data: {  }
    });
  }
  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  afterChange(e) {
    console.log('afterChange');
  }
}