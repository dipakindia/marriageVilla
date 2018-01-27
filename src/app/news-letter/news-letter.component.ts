import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.css']
})
export class NewsLetterComponent implements OnInit {
  public news_letter_text:string = '';
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }
  submitNewsLetter(){
    alert(this.news_letter_text);
  }
}
