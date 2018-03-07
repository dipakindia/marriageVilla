import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  public userInfo:any;
  constructor(  public router: Router) { 
    this.userInfo = JSON.parse(sessionStorage.getItem('user_deatils'));
    if(!this.userInfo){
      router.navigate(['/login'])
    }
  }

  ngOnInit() {

  }

}
