import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ArticulosService } from '../../services/articulos.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
  ],

  exports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
  ],

  // Creamos tambien el provider con su servicio
  providers: [ArticulosService],
})

export class MaterialModule { }
