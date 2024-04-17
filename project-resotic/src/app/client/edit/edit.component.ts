import { Component, OnInit, numberAttribute } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  formdata : Client = {
    id: 0,
    nom: '',
    prenom: '',
    date: new Date(),
    ville: ''
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let id = Number(param.get('id'));
      this.getClientByid(id);
    })
  }

  getClientByid(id:number){
    this.clientService.getByid(id).subscribe((data) => {
      this.formdata = data;
    })
  }

  update(){
    this.clientService.update(this.formdata).subscribe({
      next:(data)=> {
        this.router.navigate(["/client/home"]);
      },
      error: (er) => {
        console.log(er);
      }
    })
  }
}
