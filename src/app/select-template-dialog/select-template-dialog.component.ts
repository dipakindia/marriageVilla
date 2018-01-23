import { AddPersonalInfoComponent } from './../add-personal-info/add-personal-info.component';
import { FormContentComponent } from './../form-content/form-content.component';
import { Component, OnInit, Inject } from '@angular/core';
import { DialogOverviewExampleDialog } from '../dialog/dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-select-template-dialog',
  templateUrl: './select-template-dialog.component.html',
  styleUrls: ['./select-template-dialog.component.css']
})
export class SelectTemplateDialogComponent implements OnInit {

  public val = 0;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,public dialog: MatDialog) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(){}
  goToForm(){
    let dialogRef = this.dialog.open(AddPersonalInfoComponent, {
      width: '100%',
      height: '100%',
      panelClass: 'full-width-popup',
      data: {  }
    });
  }
}
