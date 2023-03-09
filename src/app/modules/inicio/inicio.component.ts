import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  nombre = 'Hola, soy Antonio Villasante  ';
  ocupacion = 'Front-end Developer'
  // saltoLinea = false
  latencia1 = false
  latencia2 = false

  presentacionNombre = ''
  presentacionOcupacio = ''

  redesSociale = [
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg',
      link: 'https://www.linkedin.com/in/hel%C3%AD-antonio-villasante-hilares-96465b263/'
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      link: 'https://github.com/ant-villasante98'
    }
  ]
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
        150 * Math.random()
      )
    }
    )
  }
  async cargarTextoPresentacion() {

    for (let i of [...this.nombre, '']) {
      await this.devolverLetraLatencia()
      this.presentacionNombre += i;
    };
    // this.saltoLinea = true;
    this.latencia1 = true

    for (let i of [...this.ocupacion, '']) {
      await this.devolverLetraLatencia()
      this.presentacionOcupacio += i;
    };
    this.latencia2 = true

  }


}
