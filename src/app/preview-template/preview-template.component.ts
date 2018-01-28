import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-preview-template',
  templateUrl: './preview-template.component.html',
  styleUrls: ['./preview-template.component.css']
})
export class PreviewTemplateComponent implements OnInit {

  constructor(    public dialogRef: MatDialogRef<PreviewTemplateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,public dialog: MatDialog) { }

  ngOnInit() {
  }

}
