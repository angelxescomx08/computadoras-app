import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./home/pages/home/home.component').then(
            (c) => c.HomeComponent
          ),
      },
      {
        path: 'computers',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./computers/pages/computers/computers.component').then(
                (c) => c.ComputersComponent
              ),
          },
          {
            path: 'new',
            loadComponent: () =>
              import('./computers/pages/new/new.component').then(
                (c) => c.NewComponent
              ),
          },
          {
            path: '**',
            redirectTo: '/computers',
          },
        ],
      },
      {
        path: '**',
        redirectTo: '/',
      },
    ],
  },
];
