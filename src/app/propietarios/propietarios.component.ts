import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropietarioImpl } from './model/propietario-impl';
import { PropietarioService } from './service/propietario.service';

@Component({
  selector: 'app-propietarios',
  templateUrl: './propietarios.component.html',
  styles: [
  ]
})
export class PropietariosComponent implements OnInit {
  public propietario: PropietarioImpl =new PropietarioImpl();

  constructor(private propietarioService: PropietarioService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      const id: number = params.id;
      console.log(id)
      if (id) {
        this.propietarioService.getPropietario(params.id).subscribe(response => 
          this.propietario= response);


      }}
      )
    }
  

}
