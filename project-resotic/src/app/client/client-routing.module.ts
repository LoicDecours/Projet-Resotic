import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: 'client/home', component:HomeComponent},
  {path: 'client/create', component:CreateComponent},
  {path: 'client/edit/:id', component:EditComponent},
  {path: 'client', redirectTo:'client/home', pathMatch:'full'},
  {path: '', redirectTo:'client/home', pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
