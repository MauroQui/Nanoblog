import { Routes } from '@angular/router';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },

  {
    path: 'lista-articulos',
    component: ListaArticulosComponent,
  },

  {
    path: 'crear-articulo',
    component: CreatePostComponent,
  },

  { path: '', redirectTo: 'lista-articulos', pathMatch: 'full' },
];
