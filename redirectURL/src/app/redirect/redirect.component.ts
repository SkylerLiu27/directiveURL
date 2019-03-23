import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(private storeService: StoreService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        let id = parseInt(params['id']);
        console.log(id);
        let targetUrl = this.storeService.getUrl(id);
        console.log(targetUrl);
        window.location.href = targetUrl;
      }
    );
  }

}
