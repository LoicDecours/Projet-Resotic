import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { Client } from '../client';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor(private clientService: ClientService, private router: Router){}

  formdata : Client = {
    id: 0,
    nom: '',
    prenom: '',
    date: new Date(),
    ville: ''
  }

  create(){
    this.clientService.create(this.formdata).subscribe({
      next:(data)=> {
        this.router.navigate(["/client/home"])
      },
      error: (er) => {
        console.log(er);
      }
    })
  }
}
