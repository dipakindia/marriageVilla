import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public myform: FormGroup
  private user_name:FormControl;
  private password:FormControl;
  public error:string
  constructor(private data_service: DataService, public router: Router) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }
  getLogin(){
    this.data_service.userLogin(this.myform.value.user_name,this.myform.value.password).subscribe(result => { 
      console.log(result);
      if(result['statusCode'] == 1){
        sessionStorage.setItem('token_id',result['user_deatils'].token_id);
        sessionStorage.setItem('user_id',result['user_deatils'].user_id );
        sessionStorage.setItem('user_deatils', JSON.stringify(result['user_deatils']));
        this.router.navigate(['/home'])
      }else{
        this.error = result['msg'];
        
      }
    })
  }
  createFormControls() {
    this.user_name = new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]);
  }
  createForm() {
    this.myform = new FormGroup({
      user_name: this.user_name,
      password: this.password,
    });
 }

}
