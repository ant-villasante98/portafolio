import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'portafolio',
    loadChildren: () => import('./modules/portafolio/portafolio.module').then(m => m.PortafolioModule)
  },
  {
    path: 'cv',
    loadChildren: () => import('./modules/curriculum/curriculum.module').then(m => m.CurriculumModule)
  },
  {
    path: 'inicio',
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
