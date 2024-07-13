import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ArticulosService } from '../../services/articulos.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatToolbarModule,
    MatListModule, // para que me funcione el mat-nav-list
  ],

  exports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatToolbarModule,
    MatListModule,
  ],

  // Creamos tambien el provider con su servicio
  providers: [ArticulosService],
})

export class MaterialModule { }
