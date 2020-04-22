import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  capitals: string = '/assets/capitals.geojson';
  constructor(private http: HttpClient) {
  }
  makeCapitalMarkers(map: L.map): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res.features) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];
        const marker = L.circleMarker([lon, lat], { radius: 6, color: '#FF1515'}).addTo(map);
      }
    });
  }
}
