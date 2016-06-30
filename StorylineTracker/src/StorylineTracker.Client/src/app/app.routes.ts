import { provideRouter, RouterConfig } from '@angular/router';
import { DashboardComponent } from './dashboard';
import { VehiclesComponent } from './vehicles';
import { CharactersComponent } from './characters';

export const routes: RouterConfig = [
  { path: '', component: DashboardComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'characters', component: CharactersComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
