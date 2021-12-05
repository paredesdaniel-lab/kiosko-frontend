import { NgModule } from '@angular/core';
import { UsuarioComponent } from './usuario.component';
import { UsuariosRoutingModule } from './usuario-routing.module';

@NgModule({
  imports: [
    UsuariosRoutingModule,
  ],
  declarations: [ UsuarioComponent ]
})
export class UsuarioModule { }
