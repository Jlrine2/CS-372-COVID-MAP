import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DataService} from './data.service';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  capitals: string = '/assets/capitals.geojson';
  private data: {};
  private metresPerPixel: number;
  constructor(private http: HttpClient, private dataService: DataService) {
  }
  makeCapitalMarkers(map: L.map): void {
    this.data = this.dataService.getData();
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res.features) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];
        console.log(this.data[c.properties.state]);
        const marker = L.circle([lon, lat], { radius: (this.data[c.properties.state]), color: '#ff1515'}).addTo(map);
      }
    });
  }
}
