import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.sass']
})
export class SaludoComponent implements OnInit {
  
 @Input() colorNombre!:String; 
  constructor() { }

  ngOnInit(): void {
  }

}
