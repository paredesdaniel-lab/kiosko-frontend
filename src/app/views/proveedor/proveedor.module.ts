import { NgModule } from '@angular/core';
import { ProveedoresRoutingModule } from './proveedor-routing.module';
import { ProveedorComponent } from './proveedor.component';


@NgModule({
  imports: [
    ProveedoresRoutingModule,
  ],
  declarations: [ ProveedorComponent ]
})
export class ProveedorModule { }
