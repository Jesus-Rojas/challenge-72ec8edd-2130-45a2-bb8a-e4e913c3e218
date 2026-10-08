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
    loadComponent: () => import('./features/auth/login.component').then(m => m.LoginComponent),
    canActivate: [
      (() => {
        const guard = new AuthGuard(
          inject(AuthService),
          inject(Router)
        );
        return guard.canActivate;
      }) as any
    ]
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
      requiresAuth: true,
      requiredPermissions: ['canManageUsers', 'canViewTransactions']
    }
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [AuthGuard],
    data: {
      requiresAuth: true
    }
  },
  {
    path: 'accounts',
    loadComponent: () => import('./features/accounts/accounts.component').then(m => m.AccountsComponent),
    canActivate: [AuthGuard],
    data: {
      requiresAuth: true
    }
  },
  {
    path: 'transactions',
    loadComponent: () => import('./features/transactions/transactions.component').then(m => m.TransactionsComponent),
    canActivate: [AuthGuard],
    data: {
      requiresAuth: true
    }
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';