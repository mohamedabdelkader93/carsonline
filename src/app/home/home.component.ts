import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { MainService } from '../_services/index';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Items: any;
  makeOptions = ["Dodge", "Toyota", "Hunda"];
  modelOptions = ["Dodge", "Toyota", "Hunda"];

  makeModel = ["Dodge", "Toyota", "Hunda"];
  modelModel = ["Dodge", "Toyota", "Hunda"];

  path: string[] = ['AuctionInfo.endDateEn'];
  order: number = 1;

  stopCondition: boolean = false;

  config = {
    displayKey: "description",
    search: true
  }

  constructor(
    private router: Router,
    private mainService: MainService
  ) {
    this.getListing();
  }

  ngOnInit() {

  }

  sort(prop: string) {
    this.path = prop.split('.')
    this.order = this.order * (-1);
    return false;
  }

  getListing() {
    this.mainService.getAllItems().subscribe(Items => { return this.Items = Items });
    Observable.interval(15000)
      .takeWhile(() => !this.stopCondition)
      .subscribe(i => {
        this.mainService.getAllItems().subscribe(Items => { return this.Items = Items });
      })
  }

  reloadListing(){
    window.location.reload();
  }

}
