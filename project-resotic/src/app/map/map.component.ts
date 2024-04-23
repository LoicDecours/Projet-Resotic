import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { ClientService } from '../client/client.service'
import { Client } from '../client/client'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  private map: L.Map;
  private centroid: L.LatLngExpression = [45.783329, 3.08333]; // Center on Clermont-Ferrand
  clientList : any [] = [];
  client : Client;

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 6
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 12,
      minZoom: 1,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    this.clientService.getAll().subscribe(async (result) => {
      this.clientList = result;
      for (let i = 0; i < result.length; i++) {
        this.getResponse(i, result);
      }
      
    }); 

    // Example of a marker
    // TODO Implement "x" and "y" from json file
    const markers = Array(1).fill(this.centroid).map( 
      x => [45.783329, 3.08333]
    ).map(
      x => L.marker(x as L.LatLngExpression)
    ).forEach(
      x => x.addTo(this.map)
    );

    tiles.addTo(this.map);
  
  }

  constructor(private clientService: ClientService) {   }

  ngOnInit(): void {
    this.initMap();
  }

  // async function to get JSON File from api gouv
  // Handling call api for JSON File in frontend is not optimal because front is not supposed to have logic
  // TODO Use Json properties "x" and "y" and add marker on the map
  async getResponse(i:number, result: Client[]){
    const url = 'https://api-adresse.data.gouv.fr/search/?q=';

    const city = result[i].ville;
    const response = await fetch(url + city);
    const json = await response.json();

    //console.log(json);
  }

} 