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
    path: 'cv',
    title: 'CV',
    loadChildren: () => import('./modules/curriculum/curriculum.module').then(m => m.CurriculumModule)
  },
  {
    path: 'inicio',
    title: 'Antonio Villasante',
    loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
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
