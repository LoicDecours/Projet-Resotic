import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-resotic';
  //Link for DB Json Server
  clients$ = this.http.get<any>('http://localhost:3000/clients');

  constructor(private http: HttpClient) {}
}
