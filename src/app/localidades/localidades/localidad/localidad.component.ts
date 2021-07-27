import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { LocalidadImpl } from '../../model/localidad-impl';

@Component({
  selector: 'app-localidad',
  templateUrl: './localidad.component.html',
  styles: [
  ]
})
export class LocalidadComponent implements OnInit {
  @Input() localidad: LocalidadImpl;
  @Output() localidadEliminar = new EventEmitter<LocalidadImpl>();
  constructor() { }

  ngOnInit(): void {
  }
  eliminar(): void {
    this.localidadEliminar.emit(this.localidad);
  }

}
