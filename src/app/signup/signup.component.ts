import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import {ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private myform : FormGroup;
  private fname : FormControl;
  private lname : FormControl;
  private email : FormControl;
  private password: FormControl;
  private mobile : FormControl;
  constructor( private data_service : DataService, public Router: Router) { }

  ngOnInit() {
    this.createRegisterationForm();
    this.createRegisterationFormControls();
  }

  getRegister(){
    this.data_service.userRegister(this.myform.value.fname).subscribe(result=>{
   // this.data_service.userRegister(this.myform.value.name,this.myform.value.email,this.myform.value.password,this.myform.value.mobile).subscribe(result=>{
    console.log(result);
    })
  }

  createRegisterationForm(){
    this.fname= new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]);
    this.lname= new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]);
    this.email = new FormControl('',[
      Validators.required,
      Validators.minLength(1),
    ]);
    this.password = new FormControl('',[
      Validators.required,
      Validators.minLength(1),
    ]);
    this.mobile = new FormControl('',[
      Validators.required,
      Validators.minLength(1),
    ]);

  }

  createRegisterationFormControls(){
    this.myform = new FormGroup({
      fname: this.fname,
      lname: this.lname,
      email:this.email,
      password:this.password,
      mobile:this.mobile

    });

  }



}
