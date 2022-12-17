import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes ruta
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';

const routes: Routes = [
  // ruta vacia muestra basicos component
  {
    path: '',
    component: BasicosComponent,
    pathMatch: 'full'
  },

  // Componente numeros
  {
    path: 'numeros', // nombre del path
    component: NumerosComponent // componente
  },

  // Componente no-comunes
  {
    path: 'no-comunes',
    component: NoComunesComponent
  },

  // Componente ordenar
  {
    path: 'ordernar',
    component: OrdenarComponent
  },

  // Comodin que redirige al componente basico
  {
    path: '**', // esto indica que si no esta en los atenriores ejecuta esta ruta
    redirectTo: '' // indica que a donde va a redirigir, en este caso redirige al vacio que seria el basico
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
