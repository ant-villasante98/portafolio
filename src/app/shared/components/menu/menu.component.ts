import { Component, ElementRef } from '@angular/core';

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
      nombre: 'Skills',
      ruta: '/skills',
      img: './assets/svg/book.svg'
    },
    {
      nombre: 'Sobre mi',
      ruta: '/sobre-mi',
      img: './assets/svg/about_me.svg'
    }

  ]

  nav_collapse = false;

  clickClose() {
    console.log('click en elemento')
    this.nav_collapse = false
  }
}
