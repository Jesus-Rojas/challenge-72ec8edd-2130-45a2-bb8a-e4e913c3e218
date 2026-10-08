import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService, User, UserRole } from '../../core/services/auth.service';

interface AccountSummary {
  accountId: string;
  accountType: 'checking' | 'savings' | 'investment';
  balance: number;
  currency: string;
  lastUpdated: Date;
}

interface UserTransaction {
  id: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
  category: string;
  date: Date;
  status: 'completed' | 'pending';
}

interface UserNotification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success';
  read: boolean;
  date: Date;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="user-container">
      <header class="user-header">
        <div class="header-content">
          <h1>Mi Área Personal</h1>
          <div class="user-info" *ngIf="currentUser() as user">
            <span class="welcome-message">Bienvenido, {{ user.name }}</span>
            <button class="logout-btn" (click)="authService.logout()">Cerrar Sesión</button>
          </div>
        </div>
      </header>

      <div class="user-content">
        <aside class="user-sidebar">
          <nav class="sidebar-nav">
            <button 
              [class.active]="selectedSection() === 'overview'"
              (click)="selectSection('overview')">
              <span class="nav-icon">📊</span>
              Resumen
            </button>
            <button 
              [class.active]="selectedSection() === 'accounts'"
              (click)="selectSection('accounts')">
              <span class="nav-icon">🏦</span>
              Cuentas
            </button>
            <button 
              [class.active]="selectedSection() === 'transactions'"
              (click)="selectSection('transactions')">
              <span class="nav-icon">📋</span>
              Historial
            </button>
            <button 
              [class.active]="selectedSection() === 'notifications'"
              (click)="selectSection('notifications')">
              <span class="nav-icon">🔔</span>
              Notificaciones
              <span class="notification-badge" *ngIf="unreadCount() > 0">{{ unreadCount() }}</span>
            </button>
          </nav>
        </aside>

        <main class="user-main">
          <div *ngIf="isLoading()" class="loading-state">
            <div class="spinner"></div>
            <p>Cargando tu información...</p>
          </div>

          <div *ngIf="!isLoading() && selectedSection() === 'overview'" class="overview-section">
            <section class="balance-summary">
              <h2>Saldo Total</h2>
              <div class="total-balance">{{ formatCurrency(totalBalance()) }}</div>
              <p class="balance-update">Última actualización: {{ lastUpdateFormatted() }}</p>
            </section>

            <section class="accounts-preview">
              <h3>Tus Cuentas</h3>
              <div class="accounts-grid">
                <div *ngFor="let account of accounts()" class="account-card">
                  <div class="account-header">
                    <span class="account-type">{{ getAccountTypeLabel(account.accountType) }}</span>
                    <span class="account-id">{{ account.accountId }}</span>
                  </div>
                  <div class="account-balance">{{ formatCurrency(account.balance) }}</div>
                </div>
              </div>
            </section>

            <section class="recent-transactions">
              <h3>Transacciones Recientes</h3>
              <div class="transactions-list">
                <div *ngFor="let txn of recentTransactions()" class="transaction-item">
                  <div class="txn-info">
                    <span class="txn-description">{{ txn.description }}</span>
                    <span class="txn-category">{{ txn.category }}</span>
                  </div>
                  <div class="txn-amount" [class.credit]="txn.type === 'credit'" [class.debit]="txn.type === 'debit'">
                    {{ txn.type === 'credit' ? '+' : '-' }}{{ formatCurrency(txn.amount) }}
                  </div>
                </div>
              </div>
              <button class="view-all-btn" (click)="selectSection('transactions')">Ver todas las transacciones</button>
            </section>
          </div>

          <div *ngIf="!isLoading() && selectedSection() === 'accounts'" class="accounts-section">
            <h2>Mis Cuentas</h2>
            <div class="accounts-detail">
              <div *ngFor="let account of accounts()" class="account-detail-card">
                <div class="account-detail-header">
                  <h3>{{ getAccountTypeLabel(account.accountType) }}</h3>
                  <span class="account-number">{{ account.accountId }}</span>
                </div>
                <div class="account-detail-balance">
                  <span class="label">Saldo disponible</span>
                  <span class="value">{{ formatCurrency(account.balance) }}</span>
                </div>
                <div class="account-detail-actions">
                  <button class="btn-secondary">Ver extractos</button>
                  <button class="btn-secondary">Transferir</button>
                </div>
              </div>
            </div>
          </div>

          <div *ngIf="!isLoading() && selectedSection() === 'transactions'" class="transactions-section">
            <h2>Historial de Transacciones</h2>
            <div class="transactions-filters">
              <input type="text" placeholder="Buscar transacción..." class="search-input">
              <select class="filter-select">
                <option value="">Todos los tipos</option>
                <option value="credit">Ingresos</option>
                <option value="debit">Gastos</option>
              </select>
              <select class="filter-select">
                <option value="">Todos los estados</option>
                <option value="completed">Completadas</option>
                <option value="pending">Pendientes</option>
              </select>
            </div>
            <div class="transactions-full-list">
              <div *ngFor="let txn of userTransactions()" class="transaction-row">
                <div class="txn-date">{{ formatDate(txn.date) }}</div>
                <div class="txn-desc">
                  <span class="desc-text">{{ txn.description }}</span>
                  <span class="desc-category">{{ txn.category }}</span>
                </div>
                <div class="txn-status">
                  <span class="status-dot" [class.completed]="txn.status === 'completed'" [class.pending]="txn.status === 'pending'"></span>
                  {{ txn.status }}
                </div>
                <div class="txn-value" [class.credit]="txn.type === 'credit'" [class.debit]="txn.type === 'debit'">
                  {{ txn.type === 'credit' ? '+' : '-' }}{{ formatCurrency(txn.amount) }}
                </div>
              </div>
            </div>
          </div>

          <div *ngIf="!isLoading() && selectedSection() === 'notifications'" class="notifications-section">
            <div class="notifications-header">
              <h2>Mis Notificaciones</h2>
              <button class="mark-all-btn" (click)="markAllAsRead()" *ngIf="unreadCount() > 0">
                Marcar todo como leído
              </button>
            </div>
            <div class="notifications-list">
              <div *ngFor="let notification of notifications()" 
                   class="notification-item" 
                   [class.unread]="!notification.read"
                   [class]="'notification-' + notification.type"
                   (click)="markAsRead(notification.id)">
                <div class="notification-icon">
                  {{ getNotificationIcon(notification.type) }}
                </div>
                <div class="notification-content">
                  <h4>{{ notification.title }}</h4>
                  <p>{{ notification.message }}</p>
                  <span class="notification-date">{{ formatDate(notification.date) }}</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  `
})
export class UserComponent implements OnInit {
  private readonly authService = inject(AuthService);
  
  readonly currentUser = signal<User | null>(null);
  readonly isLoading = signal<boolean>(false);
  readonly selectedSection = signal<'overview' | 'accounts' | 'transactions' | 'notifications'>('overview');
  
  readonly accounts = signal<AccountSummary[]>([]);
  readonly userTransactions = signal<UserTransaction[]>([]);
  readonly notifications = signal<UserNotification[]>([]);
  
  readonly totalBalance = computed(() => {
    return this.accounts().reduce((sum, acc) => sum + acc.balance, 0);
  });
  
  readonly unreadCount = computed(() => {
    return this.notifications().filter(n => !n.read).length;
  });
  
  readonly lastUpdateFormatted = computed(() => {
    const accounts = this.accounts();
    if (accounts.length === 0) return '';
    const latest = accounts.reduce((max, acc) => 
      acc.lastUpdated > max ? acc.lastUpdated : max, accounts[0].lastUpdated
    );
    return this.formatDate(latest);
  });
  
  readonly recentTransactions = computed(() => {
    return this.userTransactions().slice(0, 5);
  });

  ngOnInit(): void {
    this.loadCurrentUser();
    this.loadUserData();
  }

  private loadCurrentUser(): void {
    this.authService.user.subscribe({
      next: (user) => this.currentUser.set(user),
      error: (err) => console.error('Error loading user:', err)
    });
  }

  private loadUserData(): void {
    this.isLoading.set(true);
    
    setTimeout(() => {
      this.accounts.set([
        {
          accountId: 'ACC-2024-001',
          accountType: 'checking',
          balance: 15420.50,
          currency: 'EUR',
          lastUpdated: new Date()
        },
        {
          accountId: 'ACC-2024-002',
          accountType: 'savings',
          balance: 28750.00,
          currency: 'EUR',
          lastUpdated: new Date(Date.now() - 86400000)
        },
        {
          accountId: 'ACC-2024-003',
          accountType: 'investment',
          balance: 52300.75,
          currency: 'EUR',
          lastUpdated: new Date(Date.now() - 172800000)
        }
      ]);
      
      this.userTransactions.set([
        {
          id: 'TXU-001',
          description: 'Nómina mensual',
          amount: 3500.00,
          type: 'credit',
          category: 'Ingresos',
          date: new Date(),
          status: 'completed'
        },
        {
          id: 'TXU-002',
          description: 'Supermercado Mercadona',
          amount: 87.50,
          type: 'debit',
          category: 'Compras',
          date: new Date(Date.now() - 86400000),
          status: 'completed'
        },
        {
          id: 'TXU-003',
          description: 'Transferencia a María',
          amount: 150.00,
          type: 'debit',
          category: 'Transferencias',
          date: new Date(Date.now() - 172800000),
          status: 'completed'
        },
        {
          id: 'TXU-004',
          description: 'Pago servicios',
          amount: 120.00,
          type: 'debit',
          category: 'Servicios',
          date: new Date(Date.now() - 259200000),
          status: 'completed'
        },
        {
          id: 'TXU-005',
          description: 'Devolución compra',
          amount: 45.99,
          type: 'credit',
          category: 'Reembolso',
          date: new Date(Date.now() - 345600000),
          status: 'completed'
        }
      ]);
      
      this.notifications.set([
        {
          id: 'NOT-001',
          title: 'Pago recibido',
          message: 'Se ha recibido un pago de 3500.00€ en tu cuenta corriente.',
          type: 'success',
          read: false,
          date: new Date()
        },
        {
          id: 'NOT-002',
          title: 'Recordatorio de pago',
          message: 'Tu próximo pago de tarjeta vence en 3 días.',
          type: 'warning',
          read: false,
          date: new Date(Date.now() - 43200000)
        },
        {
          id: 'NOT-003',
          title: 'Actualización de seguridad',
          message: 'Se ha actualizado tu información de seguridad.',
          type: 'info',
          read: true,
          date: new Date(Date.now() - 86400000)
        },
        {
          id: 'NOT-004',
          title: 'Nuevo extracto disponible',
          message: 'Tu extracto del mes de mayo ya está disponible.',
          type: 'info',
          read: false,
          date: new Date(Date.now() - 172800000)
        }
      ]);
      
      this.isLoading.set(false);
    }, 600);
  }

  selectSection(section: 'overview' | 'accounts' | 'transactions' | 'notifications'): void {
    this.selectedSection.set(section);
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  }

  getAccountTypeLabel(type: string): string {
    const labels: Record<string, string> = {
      checking: 'Cuenta Corriente',
      savings: 'Cuenta de Ahorros',
      investment: 'Cuenta de Inversión'
    };
    return labels[type] || type;
  }

  getNotificationIcon(type: string): string {
    const icons: Record<string, string> = {
      info: 'ℹ️',
      warning: '⚠️',
      success: '✅'
    };
    return icons[type] || '📢';
  }

  markAsRead(notificationId: string): void {
    const notifs = this.notifications();
    const updated = notifs.map(n => 
      n.id === notificationId ? { ...n, read: true } : n
    );
    this.notifications.set(updated);
  }

  markAllAsRead(): void {
    const notifs = this.notifications();
    const updated = notifs.map(n => ({ ...n, read: true }));
    this.notifications.set(updated);
  }
}