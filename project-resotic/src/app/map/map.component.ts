import { Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
//rajouter le implements Oninit pour mapping
export class MapComponent{
/*
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.configMap();
    }
  }

  map : any

  configMap(){
    if (typeof window !== 'undefined') {
      this.map = L.map('map', {
        center: [45.7896750756206, 3.098115689258963],
        zoom: 6
      })
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
    }
  } */
}