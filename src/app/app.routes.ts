import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { UserRole } from './core/models/user.model';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'user',
    loadComponent: () => import('./features/user/user.component').then(m => m.UserComponent),
    canActivate: [AuthGuard],
    data: {
      expectedRole: UserRole.USER,
      requiresAuth: true
    }
  },
  {
    path: 'admin',
    loadComponent: () => import('./features/admin/admin.component').then(m => m.AdminComponent),
    canActivate: [AuthGuard, RoleGuard],
    data: {
      expectedRole: UserRole.ADMIN,
      requiredRole: UserRole.ADMIN,
      requiresAuth: true,
      requiredPermissions: ['canManageUsers', 'canViewTransactions']
    }
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
