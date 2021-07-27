import { Component, OnInit } from '@angular/core';
import { Localidad } from '../model/localidad';
import { LocalidadImpl } from '../model/localidad-impl';
import { LocalidadesService } from '../service/localidades.service';

@Component({
  selector: 'app-localidades',
  templateUrl: './localidades.component.html',
  styles: [
  ]
})
export class LocalidadesComponent implements OnInit {
  public localidades: Localidad[] = [];

  constructor(private localidadesService: LocalidadesService) { }

  ngOnInit(): void {
    this.localidadesService.getLocalidades().subscribe((response) => this.localidades = this.localidadesService.extraerLocalidad(response));
  }

  eliminar(localidad: LocalidadImpl): void {
    console.log(`He eliminado a ${localidad.nombre}`);
    this.localidades = this.localidades.filter(p => localidad !== p)
  }

}
