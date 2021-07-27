import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalidadImpl } from '../model/localidad-impl';
import { LocalidadesService } from '../service/localidades.service';

@Component({
  selector: 'app-localidad-editar',
  templateUrl: './localidad-editar.component.html',
  styles: [
  ]
})
export class LocalidadEditarComponent implements OnInit {
  public localidad: LocalidadImpl;
  public identificador: number;

  constructor(private localidadService: LocalidadesService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      const id: number = params.id;
      this.identificador = params.id;
      console.log(id)
      if (id) {
        this.localidadService.getLocalidadId(params.id).subscribe(response => 
          this.localidad= response);


      }}
      )
    }
  create(){
    console.log(this.localidad)
    this.localidad.id = this.identificador;
  
    this.localidadService.putLocalidad(this.localidad).subscribe((response) =>console.log(response));
  }

}
