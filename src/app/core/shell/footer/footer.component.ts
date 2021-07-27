import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  rrss = environment.rrss;
  marca = environment.marca;
  webMarca = environment.webMarca;
  logo = environment.logo;

  constructor() { }

  ngOnInit(): void {
  }

}
