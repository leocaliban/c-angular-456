import { PedidoSumarioComponent } from './pedido-sumario/pedido-sumario.component';
import { Routes } from '@angular/router';

import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DetalheRestauranteComponent } from './detalhe-restaurante/detalhe-restaurante.component';
import { MenuComponent } from './detalhe-restaurante/menu/menu.component';
import { ReviewsComponent } from './detalhe-restaurante/reviews/reviews.component';
import { PedidoComponent } from './pedido/pedido.component';

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
    component: DetalheRestauranteComponent,
    children: [
      {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
      },
      {
        path: 'menu',
        component: MenuComponent
      },
      {
        path: 'reviews',
        component: ReviewsComponent
      }
    ]
  },
  {
    path: 'pedido',
    component: PedidoComponent
  },
  {
    path: 'pedido-sumario',
    component: PedidoSumarioComponent
  }

];
