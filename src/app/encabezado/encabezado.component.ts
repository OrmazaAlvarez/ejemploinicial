import { Component, OnInit } from '@angular/core';
import { LibrosseleccionadosService } from '../librosseleccionados.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.sass']
})
export class EncabezadoComponent implements OnInit {

  activar!: Boolean;
  title = 'ejemploinicial';
  constructor(public Librosseleccionados:LibrosseleccionadosService) { }

  ngOnInit(): void {
  }

}
