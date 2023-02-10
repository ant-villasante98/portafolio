import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  nombre = 'Hola, soy Antonio Villasante  ';
  ocupacion = 'Front-end Developer'
  saltoLinea = false

  presentacionNombre = ''
  presentacionOcupacio = ''
  constructor() {
  }

  ngOnInit() {
    console.log(`nombre: ${this.nombre.length} , ocupcion: ${this.ocupacion.length}`)

    this.cargarTextoPresentacion()

  }


  devolverLetraLatencia(): Promise<void> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      },
        200 * Math.random()
      )
    }
    )
  }
  async cargarTextoPresentacion() {

    for (let i of [...this.nombre]) {
      await this.devolverLetraLatencia()
      this.presentacionNombre += i;
    };
    this.saltoLinea = true;

    for (let i of [...this.ocupacion]) {
      await this.devolverLetraLatencia()
      this.presentacionOcupacio += i;
    };

  }


}
