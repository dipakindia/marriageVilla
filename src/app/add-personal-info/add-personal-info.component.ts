import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-personal-info',
  templateUrl: './add-personal-info.component.html',
  styleUrls: ['./add-personal-info.component.css']
})
export class AddPersonalInfoComponent implements OnInit {
  userInfo:any;
  constructor(  public router: Router) { 
    this.userInfo = JSON.parse(sessionStorage.getItem('user_deatils'));
    if(!this.userInfo){
      router.navigate(['/login'])
    }
    localStorage.setItem('footer','no');
   }

  ngOnInit() {
  }
  ngOnDestroy(){
    localStorage.setItem('footer','yes');
  }
}
