import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService, User, UserRole } from '../../core/services/auth.service';

interface AdminStats {
  totalUsers: number;
  activeUsers: number;
  totalTransactions: number;
  blockedUsers: number;
}

interface TransactionRecord {
  id: string;
  userId: string;
  userName: string;
  amount: number;
  type: 'deposit' | 'withdrawal' | 'transfer';
  status: 'completed' | 'pending' | 'failed';
  date: Date;
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
  readonly authService = inject(AuthService);
  
  readonly currentUser = signal<User | null>(null);
  readonly isLoading = signal<boolean>(false);
  readonly selectedTab = signal<'dashboard' | 'users' | 'transactions'>('dashboard');
  
  readonly adminStats = signal<AdminStats>({
    totalUsers: 0,
    activeUsers: 0,
    totalTransactions: 0,
    blockedUsers: 0
  });
  
  readonly recentTransactions = signal<TransactionRecord[]>([]);
  readonly pendingApprovals = signal<number>(0);
  
  readonly isAdmin = computed(() => {
    const user = this.currentUser();
    return user?.role === UserRole.ADMIN;
  });
  
  readonly formattedStats = computed(() => {
    const stats = this.adminStats();
    return {
      totalUsersFormatted: stats.totalUsers.toLocaleString(),
      activeUsersFormatted: stats.activeUsers.toLocaleString(),
      transactionsFormatted: stats.totalTransactions.toLocaleString(),
      blockedUsersFormatted: stats.blockedUsers.toLocaleString()
    };
  });

  ngOnInit(): void {
    this.loadCurrentUser();
    this.loadDashboardData();
  }

  private loadCurrentUser(): void {
    this.authService.user.subscribe({
      next: (user) => this.currentUser.set(user),
      error: (err) => console.error('Error loading user:', err)
    });
  }

  private loadDashboardData(): void {
    this.isLoading.set(true);
    
    setTimeout(() => {
      this.adminStats.set({
        totalUsers: 15420,
        activeUsers: 12850,
        totalTransactions: 89450,
        blockedUsers: 127
      });
      
      this.recentTransactions.set([
        {
          id: 'TXN-001',
          userId: 'USR-1234',
          userName: 'Juan Pérez',
          amount: 5000.00,
          type: 'transfer',
          status: 'completed',
          date: new Date()
        },
        {
          id: 'TXN-002',
          userId: 'USR-5678',
          userName: 'María García',
          amount: 2500.50,
          type: 'deposit',
          status: 'completed',
          date: new Date(Date.now() - 3600000)
        },
        {
          id: 'TXN-003',
          userId: 'USR-9012',
          userName: 'Carlos López',
          amount: 1000.00,
          type: 'withdrawal',
          status: 'pending',
          date: new Date(Date.now() - 7200000)
        },
        {
          id: 'TXN-004',
          userId: 'USR-3456',
          userName: 'Ana Martínez',
          amount: 7500.25,
          type: 'transfer',
          status: 'failed',
          date: new Date(Date.now() - 10800000)
        }
      ]);
      
      this.pendingApprovals.set(12);
      this.isLoading.set(false);
    }, 500);
  }

  selectTab(tab: 'dashboard' | 'users' | 'transactions'): void {
    this.selectedTab.set(tab);
  }

  approveTransaction(transactionId: string): void {
    const transactions = this.recentTransactions();
    const updated = transactions.map(t => 
      t.id === transactionId ? { ...t, status: 'completed' as const } : t
    );
    this.recentTransactions.set(updated);
    
    const pending = this.pendingApprovals();
    this.pendingApprovals.set(Math.max(0, pending - 1));
  }

  rejectTransaction(transactionId: string): void {
    const transactions = this.recentTransactions();
    const updated = transactions.map(t => 
      t.id === transactionId ? { ...t, status: 'failed' as const } : t
    );
    this.recentTransactions.set(updated);
    
    const pending = this.pendingApprovals();
    this.pendingApprovals.set(Math.max(0, pending - 1));
  }

  blockUser(userId: string): void {
    const stats = this.adminStats();
    this.adminStats.set({
      ...stats,
      blockedUsers: stats.blockedUsers + 1,
      activeUsers: stats.activeUsers - 1
    });
  }

  unblockUser(userId: string): void {
    const stats = this.adminStats();
    this.adminStats.set({
      ...stats,
      blockedUsers: Math.max(0, stats.blockedUsers - 1),
      activeUsers: stats.activeUsers + 1
    });
  }

  getStatusClass(status: string): string {
    const classes: Record<string, string> = {
      completed: 'status-completed',
      pending: 'status-pending',
      failed: 'status-failed'
    };
    return classes[status] || '';
  }

  getTransactionTypeIcon(type: string): string {
    const icons: Record<string, string> = {
      deposit: '↓',
      withdrawal: '↑',
      transfer: '↔'
    };
    return icons[type] || '?';
  }

  formatAmount(amount: number): string {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  }
}