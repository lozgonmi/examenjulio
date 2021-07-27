import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PedidosImpl } from 'src/app/pedidos/models/pedidos-impl';
import { environment } from 'src/environments/environment';
import { Localidad } from '../model/localidad';
import { LocalidadImpl } from '../model/localidad-impl';

@Injectable({
  providedIn: 'root'
})
export class LocalidadesService {
  private host: string = environment.host;
  private urlLocalidades: string = `${this.host}localidades/`;

  constructor(private http: HttpClient) { }

  getLocalidades(): Observable<any> {
    return this.http.get<any>(`${this.urlLocalidades}`);
  }
  extraerLocalidad(response: any): Localidad[] {
    let localidades: Localidad[] = [];
    let localidadMapeada : Localidad;
    response._embedded.localidades.forEach((e) => {
      localidadMapeada = this.mapearLocalidad(e);
      
      
      localidades.push(localidadMapeada);
    });
   
    console.log(localidades)
    return localidades;
  }
  mapearLocalidad(reservaAPI: any) : LocalidadImpl{
    let localidad: LocalidadImpl = new LocalidadImpl();
    let urlLocalidad = reservaAPI._links.localidad.href;
    let index = urlLocalidad.lastIndexOf("/");
    localidad.id = urlLocalidad.substring(index + 1);
    localidad.nombre = reservaAPI.nombre;
    console.log(localidad)
    return localidad;

  }
  getLocalidadId(id): Observable<Localidad> {
    console.log(id);
    return this.http.get<Localidad>(`${this.urlLocalidades}${id}`)
       }
  putLocalidad(localidad: LocalidadImpl): Observable<any> {
    return this.http.put<any>(`${this.urlLocalidades}${localidad.id}`, localidad)
    
  }
}
