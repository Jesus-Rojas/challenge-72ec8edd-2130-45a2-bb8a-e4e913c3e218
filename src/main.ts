import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

function setupGlobalErrorHandling(): void {
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Promesa rechazada no manejada:', event.reason);
    event.preventDefault();
  });

  window.addEventListener('error', (event) => {
    console.error('Error global capturado:', event.error);
  });
}

function loadRuntimeConfig(): void {
  const appVersion = '1.0.0';
  const environment = 'development';
  console.log(`Banking Digital v${appVersion} - Entorno: ${environment}`);
}

async function bootstrapApp(): Promise<void> {
  try {
    const startTime = performance.now();
    await bootstrapApplication(AppComponent, appConfig);
    const bootstrapTime = performance.now() - startTime;
    console.log(`Aplicación bootstrapeada exitosamente en ${bootstrapTime.toFixed(2)}ms`);

    setupGlobalErrorHandling();
    loadRuntimeConfig();
  } catch (error) {
    console.error('Error crítico durante el bootstrap de la aplicación:', error);
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = 'padding: 20px; background: #ff5252; color: white; font-family: sans-serif; text-align: center;';
    errorDiv.innerHTML = `
      <h1>Error de Inicialización</h1>
      <p>La aplicación no pudo iniciarse correctamente.</p>
      <pre style="text-align: left; background: rgba(0,0,0,0.1); padding: 10px;">${error instanceof Error ? error.message : 'Error desconocido'}</pre>
    `;
    document.body.innerHTML = '';
    document.body.appendChild(errorDiv);
  }
}

bootstrapApp();
