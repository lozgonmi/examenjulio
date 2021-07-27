import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  logo: string = environment.logo;
  swagger: string = 'http://localhost:8099/swagger-ui.html#/';
  documentacion: string = 'http://localhost:8099/v2/api-docs';
  constructor() { }

  ngOnInit(): void {
  }

}
