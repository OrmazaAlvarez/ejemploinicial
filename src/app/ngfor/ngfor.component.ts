import { Component, OnInit } from '@angular/core';
import { LibrosseleccionadosService } from '../librosseleccionados.service';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.sass']
})
export class NgforComponent implements OnInit {
  libros!:Array<Object>;
  constructor(public Librosseleccionados:LibrosseleccionadosService) { 
    this.libros = [
      {id: 1, titulo: 'El retrato de Dorian Gray', autor: 'Oscar Wilde', descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio accusamus in iusto incidunt exercitationem vel alias excepturi ullam doloribus porro sed dolore corrupti fugiat, ducimus animi. Doloremque inventore sequi iusto.'},
      {id: 2, titulo: 'Frankenstein', autor: 'Mary Shelley', descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio accusamus in iusto incidunt exercitationem vel alias excepturi ullam doloribus porro sed dolore corrupti fugiat, ducimus animi. Doloremque inventore sequi iusto.'},
      {id: 3, titulo: 'Orgullo y Perjuicio', autor: 'Jane Austen', descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio accusamus in iusto incidunt exercitationem vel alias excepturi ullam doloribus porro sed dolore corrupti fugiat, ducimus animi. Doloremque inventore sequi iusto.'},
      {id: 4, titulo: 'Drácula', autor: 'Bram Stoker', descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio accusamus in iusto incidunt exercitationem vel alias excepturi ullam doloribus porro sed dolore corrupti fugiat, ducimus animi. Doloremque inventore sequi iusto.'},
      {id: 5, titulo: 'El maravilloso mago de Oz', autor: 'L. Frank Baum', descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio accusamus in iusto incidunt exercitationem vel alias excepturi ullam doloribus porro sed dolore corrupti fugiat, ducimus animi. Doloremque inventore sequi iusto.'},
      {id: 6, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes Seavedra', descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio accusamus in iusto incidunt exercitationem vel alias excepturi ullam doloribus porro sed dolore corrupti fugiat, ducimus animi. Doloremque inventore sequi iusto.'},
      {id: 7, titulo: 'La máquina del tiempo', autor: 'H. G. Wells', descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio accusamus in iusto incidunt exercitationem vel alias excepturi ullam doloribus porro sed dolore corrupti fugiat, ducimus animi. Doloremque inventore sequi iusto.'},
      {id: 8, titulo: 'El conde de Montecristo', autor: 'Alexandre Dumas', descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio accusamus in iusto incidunt exercitationem vel alias excepturi ullam doloribus porro sed dolore corrupti fugiat, ducimus animi. Doloremque inventore sequi iusto.'},
      {id: 9, titulo: 'Mujercitas', autor: 'Louisa M. Alcott', descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio accusamus in iusto incidunt exercitationem vel alias excepturi ullam doloribus porro sed dolore corrupti fugiat, ducimus animi. Doloremque inventore sequi iusto.'},
      {id: 10, titulo: 'La isla del tesoro', autor: 'Robert Louis Stevenson', descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio accusamus in iusto incidunt exercitationem vel alias excepturi ullam doloribus porro sed dolore corrupti fugiat, ducimus animi. Doloremque inventore sequi iusto.'}
    ]
  }

  ngOnInit(): void {
  }
  mostrarAutor(_Libro:Object){
  alert(` ${_Libro.titulo} fue escrito por ${_Libro.autor} `)
  }
  agregarLibro(_Libro){
    this.Librosseleccionados.agregarLibros(_Libro)
  }
}
