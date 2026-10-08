import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { inject } from '@angular/core';
import { Router, NavigationError, NavigationCancel } from '@angular/router';
import { AuthService } from './app/core/services/auth.service';
import { catchError, filter } from 'rxjs/operators';
import { of } from 'rxjs';

function setupErrorHandling(): void {
  const router = inject(Router);
  const authService = inject(AuthService);

  router.events.pipe(
    filter(event => event instanceof NavigationError || event instanceof NavigationCancel),
    catchError((error) => {
      console.error('Error de navegación detectado:', error);
      if (error instanceof NavigationError) {
        console.error(`URL que falló: ${error.url}`);
        console.error(`Código de error: ${error.error?.status || 'desconocido'}`);
      }
      return of(null);
    })
  ).subscribe();

  window.addEventListener('unhandledrejection', (event) => {
    console.error('Promesa rechazada no manejada:', event.reason);
    event.preventDefault();
  });

  window.addEventListener('error', (event) => {
    console.error('Error global capturado:', event.error);
    event.preventDefault();
  });
}

function initializeAuth(): void {
  const authService = inject(AuthService);
  authService.checkAuthentication().subscribe({
    next: (isAuthenticated) => {
      console.log(`Estado de autenticación inicial: ${isAuthenticated ? 'autenticado' : 'no autenticado'}`);
    },
    error: (err) => {
      console.error('Error al verificar autenticación inicial:', err);
    }
  });
}

function loadRuntimeConfig(): void {
  const appVersion = '1.0.0';
  const environment = 'development';
  console.log(`Banking Digital v${appVersion} - Entorno: ${environment}`);

  if (environment === 'development') {
    console.warn('Ejecutando en modo desarrollo - algunas características de producción están deshabilitadas');
  }
}

async function bootstrapApp(): Promise<void> {
  try {
    console.log('Iniciando bootstrap de la aplicación Angular...');
    const startTime = performance.now();

    const extendedConfig = {
      ...appConfig,
      providers: [
        ...(appConfig.providers || []),
        provideRouter([]),
        provideHttpClient(),
        provideAnimations(),
      ]
    };

    const appRef = await bootstrapApplication(AppComponent, extendedConfig);

    const bootstrapTime = performance.now() - startTime;
    console.log(`Aplicación bootstrapeada exitosamente en ${bootstrapTime.toFixed(2)}ms`);

    setupErrorHandling();
    initializeAuth();
    loadRuntimeConfig();

    console.log('Sistema de protección de rutas listo para uso');
  } catch (error) {
    console.error('Error crítico durante el bootstrap de la aplicación:', error);
    console.error('Stack trace:', error instanceof Error ? error.stack : 'No disponible');

    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = 'padding: 20px; background: #ff5252; color: white; font-family: sans-serif; text-align: center;';
    errorDiv.innerHTML = `
      <h1>Error de Inicialización</h1>
      <p>La aplicación no pudo iniciarse correctamente.</p>
      <p>Por favor, reinicie la página o contacte al soporte técnico.</p>
      <pre style="text-align: left; background: rgba(0,0,0,0.1); padding: 10px;">${error instanceof Error ? error.message : 'Error desconocido'}</pre>
    `;
    document.body.innerHTML = '';
    document.body.appendChild(errorDiv);
  }
}

bootstrapApp();