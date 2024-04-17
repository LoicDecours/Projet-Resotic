import { Component, OnInit } from '@angular/core'
import { Client } from '../client'
import { ClientService } from '../client.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  allclients: Client[] = [];
  constructor(private clientService: ClientService){}

  ngOnInit(): void {
    this.clientService.getAll().subscribe((data) => {
      this.allclients = data;
    })
  }

  deleteItem(id:number){
    this.clientService.delete(id).subscribe(data => {
        this.allclients = this.allclients.filter(Client => Client.id != id)
    })
  }
}
