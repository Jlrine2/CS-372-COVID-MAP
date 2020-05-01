import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  makeCapitalPopup(data: any, data2: any): string {
    //background: #A00A00;
    return  `` +
      '<style>.leaflet-popup-content-wrapper{ background: rgba(255, 13, 0, 0.6); color:blue; border-radius: 50%;width: 100px;' +
      'border: solid red; height: 100px; display: flex; justify-content: center; align-items: center;}' +
      '.leaflet-popup-tip{display: none;}</style>' +
      'Confirmed Cases:' + data2.get(data.properties.state) + '<br>State:' + data.properties.state;
  }
}
