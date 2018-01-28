import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  teamMember = [
    {
      "team_img": "assets/images/teams/rahul-narvekar.jpg", 
      "team_name":"Rahul Narvekar", 
      "team_designation":"| Founder",
      "team_desc": "A seasoned startup entrepreneur having earned his stripes in Mumbai and accumulated a track record in Delhi, Rahul has enormous experience (proven experience with a success record to boot, with global attestations to back it up) with ecommerce out of India, and he knows this space from its inception to where it is today.He has a professional degree from IIM Calcutta, and will gleefully share with you all the hallowed rules"
     },
    {
      "team_img": "assets/images/teams/nishant-manchanda.jpg", 
      "team_name":"Nishant Manchanda", 
      "team_designation":"| Co-Founder",
      "team_desc": "Nishant has over 15 years of experience in marketing, sales, Customer Interface consulting, and operations/supply chain in various domains. He has experienced the startup culture for almost 10 years. He likes to give shape to new ideas and test them quickly.He is an avid professional who strongly believes in “Execution is the key to success for any idea”. He has strong abilities of bootstrapping the idea and"
    },
    {
      "team_img": "assets/images/teams/souniya-khurana-team.jpg", 
      "team_name":"Souniya Khurana ", 
      "team_designation":"| Head - Community Development",
      "team_desc": "With her background in Hospitality and a core experience of almost a decade, in customer-centric roles, Souniya has led teams in business development with acclaimed multi-nationals and dynamic start-ups with the belief in delivering experiences.Her keen observation and insight on how not only organisations, but individuals as well are constantly struggling to keep pace and ensure survival, has led"
    },
    {
      "team_img": "assets/images/teams/bhavik-team.jpg", 
      "team_name":"Bhavik Jhaveri", 
      "team_designation":"| CEO & Founder - Pretr Pvt. Ltd",
      "team_desc": "Bhavik is a serial entrepreneur and an emerging market observer. Over a decade long experience in successfully building & leading ventures across payments, consumer internet, technology, and omnichannel retailing, both in Indian and global market.In his previous roles, he has been part of founding teams at EBS, Fashionandyou, & Craftsvilla. Bhavik has also been part of a New York based venture"
    },    
   
  ];
  constructor() { }

  ngOnInit() {
  }

}
