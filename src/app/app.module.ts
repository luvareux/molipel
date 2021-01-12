import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCardComponent } from './product-card/product-card.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { GaleriaEmpresaComponent } from './galeria-empresa/galeria-empresa.component';
import { TabsComponent } from './tabs/tabs.component';
import { ProductoComponent } from './producto/producto.component';
import { RelacionadosComponent } from './relacionados/relacionados.component';
import { ProductosComponent } from './productos/productos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    SlideshowComponent,
    GaleriaEmpresaComponent,
    TabsComponent,
    ProductoComponent,
    RelacionadosComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule, 
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
