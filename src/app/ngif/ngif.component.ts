import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.sass']
})
export class NgifComponent implements OnInit {
  
  texto:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

}
