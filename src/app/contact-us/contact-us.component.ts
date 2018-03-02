import { Component, OnInit ,Input } from '@angular/core';
import {ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { DataService } from './../data.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  public news_letter_text:string = '';
  public msg:string;
  public success:string;
  constructor(private formBuilder: FormBuilder, private data_service: DataService) { }

  

  ngOnInit() {
  }
  submitNewsLetter(){ 
    this.data_service.addNewsLetter({email:this.news_letter_text}).subscribe(result=>{
      if(result['statusCode'] == 1){
        this.success = result['msg'];
        this.msg = '';
      }else{
        this.msg = result['msg'];
        this.success = '';
        
      }
    });
  }

}
