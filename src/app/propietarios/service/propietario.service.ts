import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {
  private host: string = environment.host;
  //private urlPropietario: string = `${this.host}pedidos/`;

  constructor(private http: HttpClient) { }
  getPropietario(id: number): Observable<any> {
    return this.http.get<any>(`${this.host}/pedidos/${id}/propietario`);
  }

  extraerNombrePropietario(respuestaApi: any): string {
    let nombre: string;
    nombre = respuestaApi.nombre

    
    return nombre;
  }
}
