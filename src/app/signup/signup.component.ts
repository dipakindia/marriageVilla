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
  public error:string
  constructor( private data_service : DataService, public router: Router) { }

  ngOnInit() {
    this.createRegisterationForm();
    this.createRegisterationFormControls();
  }

  getRegister(){
   // this.data_service.userRegister(this.myform.value.email).subscribe(result=>{
    //this.data_service.userLogin(this.myform.value.name,this.myform.value.email,).subscribe(result => { 
    
    this.data_service.userRegister(this.myform.value).subscribe(result=>{
    console.log(this.myform.value);
    if(result['statusCode'] == 1){/* 
      sessionStorage.setItem('token_id',result['user_info'].token_id);
      sessionStorage.setItem('user_id',result['user_info'].user_id );
      sessionStorage.setItem('user_data', JSON.stringify(result['user_info'])); */
      this.router.navigate(['/home'])
    }else{
      this.error = result['msg'];
      
    }
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
