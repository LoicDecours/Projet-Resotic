import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<Client[]>('http://localhost:3000/clients');
  }

  create(data:Client){
    return this.httpClient.post<Client>('http://localhost:3000/clients', data);
  }

  getByid(id:number) {
    return this.httpClient.get<Client>(`http://localhost:3000/clients/${id}`);
  }

  update(data:Client){
    return this.httpClient.put<Client>(`http://localhost:3000/clients/${data.id}`, data);
  }

  delete(id:number) {
    return this.httpClient.delete<Client>(`http://localhost:3000/clients/${id}`);
  }
}
