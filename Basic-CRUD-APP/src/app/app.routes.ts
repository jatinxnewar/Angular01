import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/student-list/student-list.component').then(m => m.StudentListComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./components/student-detail/student-detail.component').then(m => m.StudentDetailComponent)
  }
];
