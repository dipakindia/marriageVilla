import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private _http: HttpClient ) { }

  addBioDataInformation(toAdd){
  const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  const body = new HttpParams().set('action', 'add_biodata_info').set('uid', '23').set('theme_selected', '23').set('bio_data', JSON.stringify(toAdd));
  return this._http.post('http://localhost/maariagevilla/api/index.php', body, { headers: myheader })
    .subscribe(res => res);
  }

}
