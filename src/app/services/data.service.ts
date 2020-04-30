import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SubscriptionLog} from 'rxjs/internal/testing/SubscriptionLog';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  apiUrl = 'https://covidtracking.com/api/v1/states/current.json';

  constructor(private http: HttpClient) {
  }

  getData() {
    let data = new Map<string, string>();
    this.http.get(this.apiUrl).subscribe((res: any) => {
      for (const r of res) {
        data[r.state] = r.positive;
      }
    });
    return data;
  }
}
