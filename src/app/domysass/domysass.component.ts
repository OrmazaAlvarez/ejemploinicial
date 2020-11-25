import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Pais{
  id: number;
  name: String;
}

@Component({
  selector: 'app-domysass',
  templateUrl: './domysass.component.html',
  styleUrls: ['./domysass.component.sass']
})
export class DomysassComponent implements OnInit {
  Paises!: Pais[];
  constructor(private http: HttpClient) { 
  }

  ngOnInit(): void {
    this.http.get("assets/json/lista-de-paises.json")
             .subscribe(
               (respuesta: any) => this.Paises = respuesta,
               (respuesta: any) => console.log("Error de internet", respuesta)
               );
  }

}
