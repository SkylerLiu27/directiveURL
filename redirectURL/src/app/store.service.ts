import { Injectable } from '@angular/core';
import { Url } from './models/url';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  store: Url[] = [];

  constructor() { }


  addUrl(url: string): boolean {
    //seeding count
    if (!localStorage.getItem('count')) {
      localStorage.setItem('count', '1');
    }
    //check duplicates
    for (let key in localStorage) {
      if (localStorage.getItem(key) === url) {
        const newUrl: Url = {
          id: parseInt(key),
          url: url
        }
        this.store.push(newUrl);
        return false
      }
    }

    //store newUrl in localStorage
    const count = localStorage.getItem('count');
    localStorage.setItem(count, url);
    const newCount = parseInt(count) + 1;
    localStorage.setItem('count', newCount.toString());

    //update the memory for display message
    const newUrl: Url = {
      id: parseInt(count),
      url: url
    }
    this.store.push(newUrl);
    return true;
  }

  getUrl(num: number): string {
    if (localStorage.getItem(num.toString())) {
      return localStorage.getItem(num.toString());
    } else { return '' }
  }

  getUrlList(): Observable<Url[]> {
    return of(this.store);
  }


}
