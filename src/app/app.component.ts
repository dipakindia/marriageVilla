import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogOverviewExampleDialog } from './dialog/dialog.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  animal: string;
  name: string;

  constructor(public dialog: MatDialog,public router:Router) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '60%',
      height: '70%',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  gotologin($event){
    this.router.navigate(['/login']);
  }
  gotoregister($event){
    this.router.navigate(['/signup']);
  }
}
