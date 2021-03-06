import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public myform: FormGroup
  private user_name:FormControl;
  private password:FormControl;
  public error:string;
  
  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private data_service: DataService, private location: Location,
    public router: Router, private authService: AuthService) {
      if(sessionStorage.getItem('token_id')){
        router.navigate(['/my-account'])
      }
     }

    signInWithGoogle(): void {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }
   
    signInWithFB(): void {
      this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }
   
    signOut(): void {
      this.authService.signOut();
    }
    
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      //alert(JSON.stringify(user))
      this.user = user;
      if(user){
        var userData = {};
        userData['name'] = user.name;
        userData['email'] = user.email;
        userData['social_key'] = 'gplus';
        userData['social_id'] = user.id;
        //alert("Social Login")
        this.data_service.userSocialLogin(userData).subscribe(result => { 
          console.log(result);

          if(result['statusCode'] == 1){
            sessionStorage.setItem('token_id',result['user_deatils'].token_id);
            sessionStorage.setItem('user_id',result['user_deatils'].user_id );
            sessionStorage.setItem('user_deatils', JSON.stringify(result['user_deatils']));
            location.reload()
            //this.router.navigate(['/home'])
          }else{
            this.error = result['msg'];
            
          }
        })
      }

      this.loggedIn = (user != null);
    });
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
        location.reload()
        //this.router.navigate(['/home'])
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
