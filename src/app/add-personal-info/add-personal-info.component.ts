import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-personal-info',
  templateUrl: './add-personal-info.component.html',
  styleUrls: ['./add-personal-info.component.css']
})
export class AddPersonalInfoComponent implements OnInit {

  constructor() {
    localStorage.setItem('footer','no');
   }

  ngOnInit() {
  }
  ngOnDestroy(){
    localStorage.setItem('footer','yes');
  }
}
