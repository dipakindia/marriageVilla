import { MatDialog } from '@angular/material';
import { DialogOverviewExampleDialog } from './../dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
 import {Observable} from "rxjs/Observable";
 import { DataService } from './../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  animal: string;
  name: string;
  public data: any;
  public images:any = {};

  constructor(public dialog: MatDialog, private data_service: DataService) {
    this.data_service.getBlog().subscribe(data => {
      //alert(JSON.stringify(data))
      this.data = data;
    })
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '60%',
      height: '75%',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit() {
  }

}
