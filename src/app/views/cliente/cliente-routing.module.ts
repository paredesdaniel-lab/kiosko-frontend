import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteComponent,
    data: {
      title: 'Clientes'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule {}
