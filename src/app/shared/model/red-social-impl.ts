import { RedSocial } from "./red-social";

export class RedSocialImpl implements RedSocial {
  id: number;
  nombre: string;
  icono: string;

  constructor(nombre: string, icono: string) {
    this.id= this.id;
    this.nombre = nombre;
    this.icono = icono;
  }
}
