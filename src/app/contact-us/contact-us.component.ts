import { Component, OnInit ,Input } from '@angular/core';
import {ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  options:FormGroup;
  myform: FormGroup;
  fname: FormControl;
  lname: FormControl;
  email: FormControl;
  phone: FormControl;
  company_name:FormControl;
  website:FormControl;
  find_us:FormControl;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();

  }
  createFormControls() {
  this.fname = new FormControl('',
  [Validators.required]
  );
  this.lname = new FormControl('',
  [Validators.required]
  );
  this.email = new FormControl('',
  [Validators.required]
  );
  this.phone = new FormControl('',
  [Validators.required]
  );
  this.company_name = new FormControl('',
  [Validators.required]
  );
  this.find_us = new FormControl('',
  [Validators.required]
  );
  this.website = new FormControl('',
  [Validators.required]
  );
  }


  createForm(){
    this.myform = new FormGroup({
      fname: this.fname,
      lname:this.lname,
      email: this.email,
      phone: this.phone, 
      company_name: this.company_name,
      website:this.website,
      find_us:this.find_us,

    });
  }

}
