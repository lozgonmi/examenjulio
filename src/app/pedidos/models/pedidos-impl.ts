import { Pedidos } from "./pedidos";

export class PedidosImpl implements Pedidos{
    id: number;
    fechaCreacion: string;
    totalCierre: number;
    idPropietario: number;
}
