import { AddPersonalInfoComponent } from './../add-personal-info/add-personal-info.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA,MatDialog } from '@angular/material';
import { PreviewTemplateComponent } from '../preview-template/preview-template.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  public community = [
    {'comm':'hindu',temp: ['1','2','3','4','5','1','2','3',] },
    {'comm':'muslim',temp: ['1','2','3','4','5','1','2','3',] },
    {'comm':'christian',temp: ['1','2','3','4','5','1','2','3',] },
    {'comm':'sikh',temp: ['1','2','3','4','5','1','2','3',] }]
  public comm = 'hindu';
  public select:number = 4;
  constructor(public dialog: MatDialog) {
    this.community = this.community.filter(data => data.comm === localStorage.getItem('set_community'));    
   }

  ngOnInit() {
   
  }
  get getTemplateList(){
    var result = [];
    this.community.forEach(data => {
      if(data.temp){
        data.temp.forEach(res => {
          result.push({'caste':data.comm, 'template':res});
        })
      }
    })
    return result;
  }
  selectTemplate(event,j){
    this.select = j;
  }
  getZoomImage(event,caste,template){
    let dialogRef = this.dialog.open(PreviewTemplateComponent, {
      width: '35%',
      data: { 'caste':caste, template:template }
    });
  }
  goToForm(){
    let dialogRef = this.dialog.open(AddPersonalInfoComponent, {
      width: '100%',
      height: '100%',
      panelClass: 'full-width-popup',
      data: {  }
    });
  }
}
