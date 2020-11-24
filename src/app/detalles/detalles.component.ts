import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { LibrosseleccionadosService } from '../librosseleccionados.service';
import { Libro } from '../libro.model';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.sass']
})
export class DetallesComponent implements OnInit {

  libroActual!:Libro;
  constructor( private ruta:ActivatedRoute, private LibrosService:LibrosseleccionadosService) { 
    
  }

  ngOnInit(): void {
    this.ruta.params.subscribe( params => {
      this.libroActual = this.LibrosService.seleccionarLibro(params['id'])
    })
  }

}
