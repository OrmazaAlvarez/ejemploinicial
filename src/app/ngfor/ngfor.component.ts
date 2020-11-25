import { Component, OnInit } from '@angular/core';
import { LibrosseleccionadosService } from '../librosseleccionados.service';
import { Libro } from '../libro.model';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.sass']
})
export class NgforComponent implements OnInit {
  constructor(public LibrosService:LibrosseleccionadosService) {
    LibrosService.getLibros();
  }

  ngOnInit(): void {
  }
  
  mostrarAutor(_Libro:Libro){
    alert(` ${_Libro.titulo} fue escrito por ${_Libro.autor} `);
  }
}
