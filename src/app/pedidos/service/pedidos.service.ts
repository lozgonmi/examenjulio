import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pedidos } from '../models/pedidos';
import { PedidosImpl } from '../models/pedidos-impl';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private host: string = environment.host;
  private urlPedidos: string = `${this.host}pedidos/`;

  constructor(private http: HttpClient) { }

  getPedidos(): Observable<any> {
    return this.http.get<any>(`${this.urlPedidos}`);
  }
  extraerPedido(response: any): Pedidos[] {
    let pedidos: Pedidos[] = [];
    let pedidoMapeado : Pedidos;
    response._embedded.pedidos.forEach((e) => {
      pedidoMapeado = this.mapearPedido(e);
      
      
      pedidos.push(pedidoMapeado);
    });
   
    
    return pedidos;
  }
  mapearPedido(reservaAPI: any) : PedidosImpl{
    let pedido: PedidosImpl = new PedidosImpl();
    let urlPedido = reservaAPI._links.pedido.href;
    let index = urlPedido.lastIndexOf("/");
    pedido.id = urlPedido.substring(index + 1);
    pedido.fechaCreacion = reservaAPI.createAt;
    pedido.totalCierre = reservaAPI.totalCierre;
  
   console.log(pedido)
    return pedido;

  }
}
