import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  makeCapitalPopup(data: any, data2: any): string {
    return  `` +
      `<div>Confirmed Cases: ${data2.get()}</div>` +
      `<div>State: ${ data.properties.state }</div> `;
  }
}
