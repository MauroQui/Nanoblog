import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articulo } from '../interfaces/articulo.interface';

@Injectable({
  providedIn: 'root'
})

export class ArticulosService {
  private baseURL = 'https://jsonplaceholder.typicode.com/posts'

  // Aqui definimos nuestro JSON
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  getPosts() {
    return this.http.get<Articulo[]>(this.baseURL, this.options)
  }

  getPost(id:number) {
    return this.http.get<Articulo>(`${this.baseURL}/${id}`, this.options)
  }

  //creamos el servicio, se guarda lo que se postea 
  savePost(data:Articulo) { 
    return this.http.post(`${this.baseURL}`, data);
  }
}
