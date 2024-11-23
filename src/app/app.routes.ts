import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/main-section/home-section/home-section.component').then(m => m.HomeSectionComponent),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Manejo de rutas no encontradas
];
