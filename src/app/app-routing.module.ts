import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'portafolio',
    title: 'Portafolio',
    loadChildren: () => import('./modules/portafolio/portafolio.module').then(m => m.PortafolioModule)
  },
  {
    path: 'inicio',
    title: 'Antonio Villasante',
    loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'sobre-mi',
    loadChildren: () => import('./modules/sobre-mi/sobre-mi.module').then(m => m.SobreMiModule)
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  { path: 'skills', loadChildren: () => import('./modules/skills/skills.module').then(m => m.SkillsModule) },
  {
    path: '**',
    component: InicioComponent
  }
]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
