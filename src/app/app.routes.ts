import { Routes } from '@angular/router';
import { NewComponent } from './computers/pages/new/new.component';
import { HomeComponent } from './home/pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () => HomeComponent,
      },
      {
        path: 'computers',
        children: [
          {
            path: 'new',
            loadComponent: () =>
              import('./computers/pages/new/new.component').then(
                (c) => c.NewComponent
              ),
          },
        ],
      },
    ],
  },
];
