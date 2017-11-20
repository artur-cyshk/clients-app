import { Routes } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';


export const router: Routes = [
  {
    path: '',
    component: ClientsComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
