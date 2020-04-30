import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MapComponentComponent } from './map-component/map-component.component';
import {MarkerService} from './services/marker.service';
import {HttpClientModule} from '@angular/common/http';
import {PopUpService} from './services/pop-up.service';


@NgModule({
  declarations: [
    AppComponent,
    MapComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    MarkerService,
    PopUpService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
