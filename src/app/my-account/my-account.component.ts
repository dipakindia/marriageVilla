import { DataService } from './../data.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  public userInfo:any;
  public data:any;
  constructor(  public router: Router,public data_service:DataService) { 
    this.userInfo = JSON.parse(sessionStorage.getItem('user_deatils'));
    if(!this.userInfo){
      router.navigate(['/login'])
    }
    this.data_service.getBioDataList({uid:'23'}).subscribe(result=>{
      this.data = result;
      })
  }

  ngOnInit() {
    
  }
  getBioList(){
    this.data_service.getBioDataList({uid:'23'}).subscribe(result=>{
      this.data = result;
      })
  }
  getTitle(data){
    data = JSON.parse(data);
    return data.personel_details;
  }
}
