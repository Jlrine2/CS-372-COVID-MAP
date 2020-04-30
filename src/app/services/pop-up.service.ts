import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  makeCapitalPopup(data: any, data2: any): string {
    return  `` +
      `<div>Confirmed Cases: ${data2.get(data.properties.state)}</div>` +
      `<div>State: ${ data.properties.state }</div> `;
  }
}
