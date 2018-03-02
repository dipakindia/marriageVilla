import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogOverviewExampleDialog } from './dialog/dialog.component';
import { Component } from '@angular/core';
import { AuthService } from 'angular4-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  animal: string;
  name: string;
  display_name:string;
  userLoggedIn:boolean;
  public url:any;
  constructor(public dialog: MatDialog,public router:Router,private authService: AuthService) {
    this.userLoggedIn = (sessionStorage.getItem('user_id') != '' && sessionStorage.getItem('user_id') != null) ? true : false;
    this.display_name = JSON.parse(sessionStorage.getItem('user_deatils'));
    this.router.parseUrl(router.url)
    this.url = router.parseUrl(router.url);
    
  }
  signOut(): void {
    sessionStorage.clear();
    this.authService.signOut();
  }
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
