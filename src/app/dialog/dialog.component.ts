import { Router } from '@angular/router';
import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SelectTemplateDialogComponent } from '../select-template-dialog/select-template-dialog.component';

@Component({
  selector: 'community-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styles: [':host{display: flex; flex-direction: column; flex: 1 1 auto;}']
})
export class CommunityDialog {
  public val = 0;
  error:boolean = false;
  public valComm = {'1':'hindu','2':'muslim','3':'sikh','4':'christian'}
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialog: MatDialog,public router:Router) { 
      localStorage.removeItem('set_community');
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
    
  }
}

