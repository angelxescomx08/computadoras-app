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
        path: 'New',
        loadComponent: () =>
          import('./computers/pages/new/new.component').then(
            (c) => c.NewComponent
          ),
      },
      {
        path: 'Computers',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./computers/pages/computers/computers.component').then(
                (c) => c.ComputersComponent
              ),
          },
          {
            path: '**',
            redirectTo: '/computers',
          },
        ],
      },
      {
        path: 'Contact',
        loadComponent: () =>
          import('./contact/pages/contact/contact.component').then(
            (c) => c.ContactComponent
          ),
      },
      {
        path: '**',
        redirectTo: '/',
      },
    ],
  },
];
