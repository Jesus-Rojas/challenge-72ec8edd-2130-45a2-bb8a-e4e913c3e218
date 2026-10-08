import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  
  isAuthenticated = false;
  currentUser: { username: string; role: string } | null = null;
  isMenuOpen = false;
  currentYear = new Date().getFullYear();

  ngOnInit(): void {
    this.authService.isAuthenticated.subscribe(auth => {
      this.isAuthenticated = auth;
    });

    this.authService.user.subscribe(user => {
      this.currentUser = user;
    });

    this.authService.checkAuthentication().subscribe();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
    this.isMenuOpen = false;
  }
}