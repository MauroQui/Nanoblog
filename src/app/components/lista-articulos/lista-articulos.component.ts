import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';
import { MaterialModule } from '../../modules/material/material.module';
import { Articulo } from '../../interfaces/articulo.interface';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { ArticuloComponent } from '../articulo/articulo.component';


@Component({
  selector: 'app-lista-articulos',
  standalone: true,
  
  // Agregamos modulos para quitar error  No provider for HttpClient
  imports: [
    MaterialModule,
 
  ],
  
  templateUrl: './lista-articulos.component.html',
  styleUrl: './lista-articulos.component.scss'
})
export class ListaArticulosComponent implements OnInit{
  //creamos variable tipo Articulo para recibir los datos que definimos en nuestra interfaz
  // como body, id, tittle y userId

  articulos : Articulo[] = []
  
  constructor(
    private readonly articulosServices: ArticulosService, 
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.articulosServices.getPosts().subscribe( articulos =>{
      this.articulos = articulos
      console.log(articulos);
    })
  }

  openDialog(id:number) {
    this.articulosServices.getPost(id).subscribe(articulo => {
      //Aqui ponemos el componente que se va a ejecutar
      this.dialog.open(ArticuloComponent, {
        data: {
          ...articulo //los 3 puntos indican que estoy desestructurando al objeto, osea el objeto data
                      //va a tener la informacion del objeto articulo
        },
        disableClose:true // con esta propiedad deshabilito que solo la ventana se cierre al darle en 
                          //algun boton 
      });
    })
  }

}

