import { Component, OnInit } from '@angular/core';
import { Propietario } from 'src/app/propietarios/model/propietario';
import { Pedidos } from '../models/pedidos';
import { PedidosService } from '../service/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styles: [
  ]
})
export class PedidosComponent implements OnInit {
  public pedidos: Pedidos[] = [];
  propietarioVerDatos: Propietario;

  constructor(
    private pedidosService: PedidosService,
  ) { }

  ngOnInit(): void {
    this.pedidosService.getPedidos().subscribe((response) => this.pedidos = this.pedidosService.extraerPedido(response));
   


  }
  verDatos(propietario: Propietario): void {
    this.propietarioVerDatos = propietario;
  }

}
