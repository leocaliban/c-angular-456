import { LoggedInGuard } from './security/loggedin.guard';
import { LoginComponent } from './security/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PedidoSumarioComponent } from './pedido-sumario/pedido-sumario.component';
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DetalheRestauranteComponent } from './detalhe-restaurante/detalhe-restaurante.component';
import { MenuComponent } from './detalhe-restaurante/menu/menu.component';
import { ReviewsComponent } from './detalhe-restaurante/reviews/reviews.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login/:to',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sobre',
    loadChildren: './sobre/sobre.module#SobreModule'
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
    path: 'restaurantes',
    component: RestaurantesComponent
  },
  {
    path: 'pedido',
    loadChildren: './pedido/pedido.module#PedidoModule',
    canLoad: [LoggedInGuard],
    canActivate: [LoggedInGuard]
  },
  {
    path: 'pedido-sumario',
    component: PedidoSumarioComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];
