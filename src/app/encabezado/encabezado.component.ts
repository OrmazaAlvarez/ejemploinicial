import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.sass']
})
export class EncabezadoComponent implements OnInit {

  title = 'ejemploinicial';
  constructor() { }

  ngOnInit(): void {
  }

}
