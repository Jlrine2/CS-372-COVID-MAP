import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DataService} from './data.service';
import * as L from 'leaflet';
import statesData from './states.js';
import {PopUpService} from './pop-up.service';

@Injectable({
  providedIn: 'root'
})

export class MarkerService {

  capitals = '/assets/capitals.geojson';
  constructor(private http: HttpClient, private dataService: DataService, private popUpService: PopUpService) {
    this.style = this.style.bind(this);
  }
  data = this.dataService.getData();
  stateCovid: Array<object>;
  makeCapitalMarkers(map: L.map): void {
    wait(1000);
    this.stateCovid = [];
    this.http.get(this.capitals).subscribe((res: any) => {
      L.geoJson(statesData, {style: this.style}).addTo(map);
      for (const c of res.features) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];
        const circle = L.circle([lon, lat], { radius: 20000, color: '#333'});
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
  getColor(d) {
    return d > 200000 ? '#800026' :
           d > 100000  ? '#BD0026' :
           d > 50000  ? '#E31A1C' :
           d > 10000  ? '#FC4E2A' :
           d > 5000   ? '#FD8D3C' :
           d > 2500   ? '#FEB24C' :
           d > 1000   ? '#FED976' :
                      '#FFEDA0';
  }
  style(feature) {
    return {
        fillColor: this.getColor(this.data.get(feature.properties.abbreviation)),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

}
