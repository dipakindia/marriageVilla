import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private _http: HttpClient ) { }

  addBioDataInformation(toAdd){
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    const body = new HttpParams().set('action', 'add_biodata_info').set('uid', '23').set('theme_selected', '23').set('bio_data', JSON.stringify(toAdd));
    return this._http.post(environment.api_url, body, { headers: myheader });
  }
  userLogin(user_name,password){
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    const body = new HttpParams().set('action', 'login').set('user_name', user_name).set('password', password);
    return this._http.post(environment.api_url, body, { headers: myheader });
  }
  userSocialLogin(data){
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    const body = new HttpParams().set('action', 'social_login').set('name', data.name).set('email', data.email).set('social_key', data.social_key).set('social_id', data.social_id);
    return this._http.post(environment.api_url, body, { headers: myheader });
  }
  userRegister(data){
    var name = data.fname + ' ' + data.lname;
    var email = data.email;
    var mobile = data.mobile;
    var password = data.password;
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    const body = new HttpParams().set('action','registration').set('name', name).set('email',email).set('mobile',mobile).set('password',password);
    return this._http.post(environment.api_url, body,{headers:myheader });
  }
  addNewsLetter(data){
    var name = data.fname + ' ' + data.lname;
    var email = data.email;
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    const body = new HttpParams().set('action','news_letter').set('email',email);
    return this._http.post(environment.api_url, body,{headers:myheader});
  }
  getBlog(){
    return this._http.get(environment.blog_url+'posts').map(dt =>dt);
  }
  getSingleBlog(blog_id){
    return this._http.get(environment.blog_url+'posts/'+blog_id).map(data =>data);
  }
  /*getImage(imageId){
    return this._http.get(environment.blog_url+'media/'+imageId).map(dt =>dt);
  }*/



}
