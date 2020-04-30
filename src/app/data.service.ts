import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://covidtracking.com/api/v1/states/current.json';

  constructor(private http: HttpClient) {
  }

  getData() {
    const data = new Map<string, string>();
    this.http.get(this.apiUrl).subscribe((res: any) => {
      for (const r of res) {
        data.set(r.state, r.positive);
      }
    });
    return data;
  }
}
