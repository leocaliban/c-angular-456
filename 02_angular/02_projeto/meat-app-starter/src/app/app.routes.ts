import { Routes } from '@angular/router';

import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  }

]
