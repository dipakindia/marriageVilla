import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.css']
})
export class NewsLetterComponent implements OnInit {
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
