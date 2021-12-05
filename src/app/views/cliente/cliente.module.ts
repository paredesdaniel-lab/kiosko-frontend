import { NgModule } from '@angular/core';
import { ClientesRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';

@NgModule({
  imports: [
    ClientesRoutingModule
  ],
  declarations: [ ClienteComponent ]
})
export class ClienteModule { }
