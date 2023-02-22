import { Component } from "@angular/core";

@Component({
    selector: 'app-portfolio',
    templateUrl: './portafolio.component.html',
    styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {

    elemPortafolio = [
        {
            nombre: 'Anime',
            _url: 'https://animev2.netlify.app/inicio',
            img: 'https://screenshot-proxy.netlify.app/f_avif,w_204/https://d33wubrfki0l68.cloudfront.net/63d2f63f79f5e1005282ee90/screenshot_2023-01-26-21-54-05-0000.png'
        },
        {
            nombre: 'Calendario',
            _url: 'https://63e9a9c8b964880008fac6e4--calendarioeventos.netlify.app/',
            img: 'https://screenshot-proxy.netlify.app/f_avif,w_204/https://d33wubrfki0l68.cloudfront.net/63e9ab2e3997950008dab936/screenshot_2023-02-13-03-15-20-0000.png'
        },
        {
            nombre: 'Consulta de Paises',
            _url: '',
            img: 'https://screenshot-proxy.netlify.app/f_jpg,w_204/https://d33wubrfki0l68.cloudfront.net/63e7d6033e675e00088f02aa/screenshot_2023-02-11-17-53-42-0000.png'
        }
    ]

}