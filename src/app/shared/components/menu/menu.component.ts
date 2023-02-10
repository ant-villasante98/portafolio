import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  itemsMenu = [
    {
      nombre: 'Inicio',
      ruta: '/inicio',
      img: './assets/svg/home.svg'
    },
    {
      nombre: 'portafolio',
      ruta: '/portafolio',
      img: './assets/svg/briefcase.svg'
    },
    {
      nombre: 'Estudio',
      ruta: '/portafolio',
      img: './assets/svg/book.svg'
    },
    {
      nombre: 'Sobre mi',
      ruta: '/curriculum',
      img: './assets/svg/about_me.svg'
    },
    {
      nombre: 'CV',
      ruta: '/cv',
      img: './assets/svg/about_me.svg'
    }

  ]

}
