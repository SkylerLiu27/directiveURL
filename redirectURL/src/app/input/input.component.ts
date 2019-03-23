import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { NgForm } from '@angular/forms';
import { Url } from '../models/url';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  urlList: Url[] = [];
  localUrl: string = '';

  constructor(private storeService: StoreService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.storeService.getUrlList().subscribe(
      list => {
        this.urlList = list;
      }
    );
    this.localUrl = this.activatedRoute.snapshot['_routerState'].url
    // this.activatedRoute.url.subscribe(url =>{
    //   this.urlList = url.
    // })
    // // this.localUrl = this.activatedRoute.snapshot.url.toString();
    // // console.log(this.localUrl);
  }

  onAddItem(form: NgForm) {
    const value = form.value.url;
    const insertResult = this.storeService.addUrl(value);
    if (!insertResult) {
      alert(`${value} has alrady been stored!`);
    }
  }

}
