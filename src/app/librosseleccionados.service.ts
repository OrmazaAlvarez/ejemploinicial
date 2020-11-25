import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from './libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosseleccionadosService {
  libros: Libro[];
  librosSelecionados:Libro[];
  errorHttp!: Boolean;
  cargando!: Boolean;

  constructor(private http: HttpClient) { 
    this.libros = []; 
    this.librosSelecionados = [];
  }

  getLibros(){
    if (this.libros.length === 0){
      this.cargando = true;
      this.http.get("assets/json/lista-de-libros.json")
               .subscribe(
                           (respuesta:any) =>  {this.libros = respuesta; this.cargando = false},
                           (respuesta:any) =>  this.errorHttp = true
                 );
    }
  }

  agregarLibros(_nuevoLibro:Libro){
    if (this.librosSelecionados.indexOf(_nuevoLibro) < 0){
      this.librosSelecionados.push(_nuevoLibro);
    }
  }
  
  seleccionarLibro(id:number): Libro {
    return this.libros.filter((libro:Libro) => libro.id == id)[0];
  }

  mostrarLibros(): any{
    if (this.librosSelecionados.length > 0 ){
      return this.librosSelecionados;
    }else{
      return false;
    }
  }
}
