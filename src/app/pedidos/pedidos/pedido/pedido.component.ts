import { Component, Input, OnInit } from '@angular/core';
import { PropietarioService } from 'src/app/propietarios/service/propietario.service';
import { PedidosImpl } from '../../models/pedidos-impl';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styles: [
  ]
})
export class PedidoComponent implements OnInit {
  @Input() pedido: PedidosImpl;
  nombre: string;

  constructor(private propietarioService: PropietarioService,) { }

  ngOnInit(): void {
    this.propietarioService.getPropietario(this.pedido.id).subscribe((response) => this.nombre = this.propietarioService.extraerNombrePropietario(response));


  }

}
