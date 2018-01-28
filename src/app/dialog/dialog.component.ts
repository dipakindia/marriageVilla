import { Router } from '@angular/router';
import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SelectTemplateDialogComponent } from '../select-template-dialog/select-template-dialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '350px',
      height: '450px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


  ngOnInit() {
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styles: [':host{display: flex; flex-direction: column; flex: 1 1 auto;}']
})
export class DialogOverviewExampleDialog {
  public val = 0;
  error:boolean = false;
  public valComm = {'1':'hindu','2':'muslim','3':'sikh','4':'christian'}
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,public dialog: MatDialog,public router:Router) { 
      localStorage.removeItem('set_community');
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  setCommunity(event, vt){
    this.error = false;
    localStorage.setItem('set_community',this.valComm[vt])
    this.val = vt;
  }
  openSelectTemplateDialog() {
    var dt = localStorage.getItem('set_community');
    if( dt == '' || dt == null){
      this.error = true;
    }else{
      this.error = false;
      this.dialog.closeAll();
      this.router.navigate(['/select-template']);
    }

    /* let dialogRef = this.dialog.open(SelectTemplateDialogComponent, {
      width: '100%',
      height: '100%',
      panelClass: 'full-width-popup',
      data: {  }
    }); */

   /*  dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    }); */
  }
}

