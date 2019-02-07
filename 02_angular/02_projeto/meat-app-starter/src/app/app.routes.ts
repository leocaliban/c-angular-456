import { Routes } from '@angular/router';

import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DetalheRestauranteComponent } from './detalhe-restaurante/detalhe-restaurante.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: 'restaurantes',
    component: RestaurantesComponent
  },
  {
    path: 'restaurantes/:id',
    component: DetalheRestauranteComponent
  }

];
