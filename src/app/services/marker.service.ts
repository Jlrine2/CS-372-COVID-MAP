import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DataService} from './data.service';
import * as L from 'leaflet';
import {PopUpService} from './pop-up.service';

@Injectable({
  providedIn: 'root'
})

export class MarkerService {
  capitals = '/assets/capitals.geojson';
  constructor(private http: HttpClient, private dataService: DataService, private popUpService: PopUpService) {}
  data = this.dataService.getData();
  makeCapitalMarkers(map: L.map): void {
    wait(500);
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res.features) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];
        const circle = L.circle([lon, lat], { radius: this.data.get(c.properties.state), color: '#ff1515'});
        circle.bindPopup(this.popUpService.makeCapitalPopup(c, this.data));
        circle.addTo(map);
      }
    });
    function wait(ms){
      const start = new Date().getTime();
      let end = start;
      while (end < start + ms) {
        end = new Date().getTime();
      }
    }
  }
}
