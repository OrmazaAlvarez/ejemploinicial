import { Component, OnInit, Renderer2 } from '@angular/core';
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
  lastAvtive!: HTMLElement;
  constructor(private http: HttpClient, private render:Renderer2) { 
  }

  ngOnInit(): void {
    this.http.get("assets/json/lista-de-paises.json")
             .subscribe(
               (respuesta: any) => this.Paises = respuesta,
               (respuesta: any) => console.log("Error de internet", respuesta)
               );
  }

  showActive(element:HTMLElement, button:HTMLElement){
    if (this.lastAvtive){
      this.render.removeClass(this.lastAvtive, 'destacado'); 
    }
    this.render.addClass(element, 'destacado');
    this.render.setAttribute(element, "selected-element", "true");
    let newElement = this.render.createElement("span");
    this.render.setProperty(newElement, "innerHTML", " ✅ ");
    this.render.appendChild(element, newElement);
    this.render.setAttribute(button, "value", "A viajar ✈")
    this.render.removeAttribute(button, "disabled")
    this.lastAvtive = element;
  }
}
