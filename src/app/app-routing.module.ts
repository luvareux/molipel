import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**** RUTA LANDINGS ****/
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'producto',
    component: ProductoComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
