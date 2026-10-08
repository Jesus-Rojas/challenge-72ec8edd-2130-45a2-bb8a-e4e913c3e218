# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener un ZIP con el proyecto completo y arrancable.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Como saber que terminaste

```bash
npm install && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollador, Tecnología Angular, Junior

### Brecha de conocimiento
Aplica temas de Protección de rutas (p.ej. Guards) dentro del desarrollo en su enrutamiento. Comprender y implementar Guards en Angular para proteger rutas y controlar el acceso basado en roles y autenticación.

### Misión / candidato
Candidato con experiencia en desarrollo frontend, trabaja en equipo distribuido

### Reto
- Tema: Protección de rutas frontend
- Seniority: junior-l2
- Tipo: practical
- Título: Implementación de Guards en Angular para protección de rutas
- Tiempo estimado: 3 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Configuración inicial de autenticación — objetivo: Configurar un servicio de autenticación básico que determine si un usuario está autenticado. — entregable (NO resolver): Servicio de autenticación funcional que determina la autenticación del usuario.
- Fase 2: Implementación de guards para rutas — objetivo: Implementar guards en Angular para proteger las rutas basadas en autenticación. — entregable (NO resolver): Guards implementados y aplicados a las rutas que requieren autenticación.
- Fase 3: Protección basada en roles — objetivo: Extender los guards para incluir protección basada en roles. — entregable (NO resolver): Guards extendidos para incluir protección basada en roles, aplicados a las rutas del panel de administración.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "banking-digital",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "lint": "ng lint"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "~20.0.0",
    "@angular/common": "~20.0.0",
    "@angular/compiler": "~20.0.0",
    "@angular/core": "~20.0.0",
    "@angular/forms": "~20.0.0",
    "@angular/platform-browser": "~20.0.0",
    "@angular/platform-browser-dynamic": "~20.0.0",
    "@angular/router": "~20.0.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.14.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~20.0.0",
    "@angular/cli": "~20.0.0",
    "@angular/compiler-cli": "~20.0.0",
    "@types/node": "~20.12.7",
    "typescript": "~5.8.3",
    "jasmine-core": "~5.1.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0"
  }
}

// === ARCHIVO: angular.json ===
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "banking-digital": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:application": {
          "strict": true,
          "standalone": true
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "outputPath": "dist/banking-digital",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": [
              "zone.js"
            ],
            "tsConfig": "tsconfig.app.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss"
            ],
            "scripts": []
          },
          "configurations": {
            "development": {
              "optimization": false,
              "outputHashing": "all",
              "sourceMap": true,
              "namedChunks": false,
              "extractLicenses": false,
              "vendorChunk": true
            },
            "production": {
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": false,
              "namedChunks": false,
              "extractLicenses": true,
              "vendorChunk": false,
              "buildOptimizer": true
            }
          }
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "development": {
              "browserTarget": "banking-digital:build:development"
            },
            "production": {
              "browserTarget": "banking-digital:build:production"
            }
          },
          "defaultConfiguration": "development"
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "banking-digital:build"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "polyfills": [
              "zone.js",
              "zone.js/testing"
            ],
            "tsConfig": "tsconfig.spec.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss"
            ],
            "scripts": []
          }
        },
        "lint": {
          "builder": "@angular-devkit/build-angular:tslint",
          "options": {
            "tsConfig": [
              "tsconfig.app.json",
              "tsconfig.spec.json",
              "tsconfig.json"
            ],
            "exclude": [
              "**/node_modules/**"
            ]
          }
        }
      }
    }
  },
  "cli": {
    "analytics": false
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "useDefineForClassFields": false,
    "lib": [
      "ES2022",
      "dom",
      "dom.iterable"
    ]
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}

// === ARCHIVO: src/app/core/services/auth.service.ts ===
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest'
}

export interface User {
  id: string;
  username: string;
  role: UserRole;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _isAuthenticated = signal<boolean>(false);
  private readonly _user = signal<User | null>(null);

  constructor(private router: Router) {}

  get isAuthenticated(): Observable<boolean> {
    return of(this._isAuthenticated());
  }

  get user(): Observable<User | null> {
    return of(this._user());
  }

  get currentUser(): User | null {
    return this._user();
  }

  login(username: string, password: string): Observable<boolean> {
    // Simulación de autenticación con datos hardcodeados para el ejercicio
    if (username === 'admin' && password === 'admin123') {
      this._isAuthenticated.set(true);
      this._user.set({
        id: '1',
        username: 'admin',
        role: UserRole.ADMIN
      });
      return of(true);
    } else if (username === 'user' && password === 'user123') {
      this._isAuthenticated.set(true);
      this._user.set({
        id: '2',
        username: 'user',
        role: UserRole.USER
      });
      return of(true);
    } else {
      this._isAuthenticated.set(false);
      this._user.set(null);
      return of(false);
    }
  }

  logout(): void {
    this._isAuthenticated.set(false);
    this._user.set(null);
    this.router.navigate(['/login']);
  }

  checkAuthentication(): Observable<boolean> {
    // En un entorno real, esto haría una llamada al backend
    return this.isAuthenticated;
  }

  checkRole(role: UserRole): Observable<boolean> {
    return of(this._user()?.role === role);
  }
}

// === ARCHIVO: src/app/core/guards/auth.guard.ts ===
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // TODO: Implementar la lógica para verificar si el usuario está autenticado.
    // Si el usuario está autenticado, permitir el acceso a la ruta.
    // Si no está autenticado, redirigir a la página de login.
    // Usar el método checkAuthentication() del AuthService.
    // Retornar un Observable<boolean | UrlTree> para manejar la asincronía.
    return this.authService.checkAuthentication().pipe(
      map(isAuthenticated => {
        if (isAuthenticated) {
          return true;
        } else {
          return this.router.createUrlTree(['/login']);
        }
      })
    );
  }
}

// === ARCHIVO: src/app/core/guards/role.guard.ts ===
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, UserRole } from '../services/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // TODO: Implementar la lógica para verificar si el usuario tiene el rol requerido.
    // Extraer el rol requerido desde los datos de la ruta (next.data.requiredRole).
    // Usar el método checkRole(role) del AuthService para verificar el rol.
    // Si el usuario tiene el rol, permitir el acceso a la ruta.
    // Si no tiene el rol, redirigir a una página de acceso denegado o a la página de inicio.
    // Retornar un Observable<boolean | UrlTree> para manejar la asincronía.
    const requiredRole = next.data['requiredRole'] as UserRole;
    return this.authService.checkRole(requiredRole).pipe(
      map(hasRole => {
        if (hasRole) {
          return true;
        } else {
          return this.router.createUrlTree(['/access-denied']);
        }
      })
    );
  }
}


// === ARCHIVO: src/main.ts ===
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

// === ARCHIVO: src/index.html ===
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Banking Digital - Portal de Banca en Línea</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Portal de banca digital segura. Administra tus cuentas, realiza transferencias y consulta tus movimientos desde cualquier dispositivo.">
  <meta name="author" content="Banking Digital Team">
  <meta name="theme-color" content="#1976d2">
  <meta name="robots" content="index, follow">

  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="assets/icons/apple-touch-icon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html, body {
      height: 100%;
      width: 100%;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: #f5f7fa;
      color: #333;
    }

    app-root {
      display: block;
      min-height: 100vh;
    }

    .app-loading {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      z-index: 9999;
    }

    .app-loading .spinner {
      width: 50px;
      height: 50px;
      border: 4px solid rgba(255, 255, 255, 0.3);
      border-top-color: white;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    .app-loading .loading-text {
      margin-top: 20px;
      color: white;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0.5px;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .browser-support-warning {
      display: none;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: #ff9800;
      color: white;
      padding: 12px;
      text-align: center;
      font-size: 14px;
      z-index: 10000;
    }

    @supports (display: contents) {
      .browser-support-warning { display: none; }
    }
  </style>

  <script>
    (function() {
      const isOldBrowser = !(
        'fetch' in window &&
        'Promise' in window &&
        'assign' in Object &&
        'startsWith' in String.prototype
      );

      if (isOldBrowser) {
        document.documentElement.innerHTML = '<div style="padding:40px;text-align:center;font-family:sans-serif;"><h1>Navegador no soportado</h1><p>Por favor, actualice su navegador para usar Banking Digital.</p></div>';
      }
    })();
  </script>
</head>
<body>
  <app-root>
    <div class="app-loading">
      <div class="spinner"></div>
      <div class="loading-text">Cargando Banking Digital...</div>
    </div>
  </app-root>
  <div class="browser-support-warning">
    Para una mejor experiencia, le recomendamos usar un navegador moderno actualizado.
  </div>
  <noscript>
    <div style="padding: 40px; text-align: center; font-family: sans-serif; background: #ff5252; color: white;">
      <h1>JavaScript Requerido</h1>
      <p>Por favor, habilite JavaScript en su navegador para usar Banking Digital.</p>
    </div>
  </noscript>
</body>
</html>

// === ARCHIVO: src/app/core/models/user.model.ts ===
export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest'
}

export interface User {
  id: string;
  username: string;
  email: string;
  fullName: string;
  role: UserRole;
  createdAt: Date;
  lastLogin?: Date;
  isActive: boolean;
  phoneNumber?: string;
  address?: string;
  avatarUrl?: string;
}

export interface AuthCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  token?: string;
  message?: string;
}

export interface UserPermissions {
  canViewAdminPanel: boolean;
  canViewUserPanel: boolean;
  canManageUsers: boolean;
  canViewTransactions: boolean;
  canMakeTransfers: boolean;
  canManageAccounts: boolean;
}

export function mapRoleToPermissions(role: UserRole): UserPermissions {
  switch (role) {
    case UserRole.ADMIN:
      return {
        canViewAdminPanel: true,
        canViewUserPanel: true,
        canManageUsers: true,
        canViewTransactions: true,
        canMakeTransfers: true,
        canManageAccounts: true
      };
    case UserRole.USER:
      return {
        canViewAdminPanel: false,
        canViewUserPanel: true,
        canManageUsers: false,
        canViewTransactions: true,
        canMakeTransfers: true,
        canManageAccounts: false
      };
    case UserRole.GUEST:
    default:
      return {
        canViewAdminPanel: false,
        canViewUserPanel: false,
        canManageUsers: false,
        canViewTransactions: false,
        canMakeTransfers: false,
        canManageAccounts: false
      };
  }
}

export function hasPermission(user: User | null, permission: keyof UserPermissions): boolean {
  if (!user || !user.isActive) {
    return false;
  }
  const permissions = mapRoleToPermissions(user.role);
  return permissions[permission];
}

export function isAdmin(user: User | null): boolean {
  return user?.role === UserRole.ADMIN;
}

export function isAuthenticated(user: User | null): boolean {
  return user !== null && user.isActive;
}

// === ARCHIVO: src/app/app.config.ts ===
import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withViewTransitions()
    ),
    provideAnimations(),
    provideHttpClient(
      withFetch(),
      withInterceptors([])
    ),
    provideStore({
      router: routerReducer
    }),
    provideRouterStore()
  ]
};

// === ARCHIVO: src/app/app.routes.ts ===
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


// === ARCHIVO: src/app/features/admin/admin.component.ts ===
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
  private readonly authService = inject(AuthService);
  
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

// === ARCHIVO: src/app/features/admin/admin.component.html ===
<div class="admin-container">
  <header class="admin-header">
    <div class="header-content">
      <h1>Panel de Administración</h1>
      <div class="user-info" *ngIf="currentUser() as user">
        <span class="user-name">{{ user.name }}</span>
        <span class="user-role">{{ user.role }}</span>
        <button class="logout-btn" (click)="authService.logout()">Cerrar Sesión</button>
      </div>
    </div>
  </header>

  <nav class="admin-tabs">
    <button 
      [class.active]="selectedTab() === 'dashboard'"
      (click)="selectTab('dashboard')">
      Dashboard
    </button>
    <button 
      [class.active]="selectedTab() === 'users'"
      (click)="selectTab('users')">
      Usuarios
    </button>
    <button 
      [class.active]="selectedTab() === 'transactions'"
      (click)="selectTab('transactions')">
      Transacciones
    </button>
  </nav>

  <main class="admin-content">
    <div *ngIf="isLoading()" class="loading-spinner">
      <div class="spinner"></div>
      <p>Cargando datos...</p>
    </div>

    <div *ngIf="!isLoading() && selectedTab() === 'dashboard'" class="dashboard-view">
      <section class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon">👥</div>
          <div class="stat-details">
            <h3>Usuarios Totales</h3>
            <p class="stat-value">{{ formattedStats().totalUsersFormatted }}</p>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">✓</div>
          <div class="stat-details">
            <h3>Usuarios Activos</h3>
            <p class="stat-value">{{ formattedStats().activeUsersFormatted }}</p>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">💳</div>
          <div class="stat-details">
            <h3>Transacciones</h3>
            <p class="stat-value">{{ formattedStats().transactionsFormatted }}</p>
          </div>
        </div>

        <div class="stat-card warning">
          <div class="stat-icon">⚠</div>
          <div class="stat-details">
            <h3>Usuarios Bloqueados</h3>
            <p class="stat-value">{{ formattedStats().blockedUsersFormatted }}</p>
          </div>
        </div>
      </section>

      <section class="alerts-section" *ngIf="pendingApprovals() > 0">
        <div class="alert alert-warning">
          <span class="alert-icon">⏰</span>
          <span>Tienes <strong>{{ pendingApprovals() }}</strong> transacciones pendientes de aprobación</span>
          <button class="alert-action" (click)="selectTab('transactions')">Verificar</button>
        </div>
      </section>

      <section class="recent-activity">
        <h2>Actividad Reciente</h2>
        <table class="transactions-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuario</th>
              <th>Tipo</th>
              <th>Monto</th>
              <th>Estado</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let txn of recentTransactions()">
              <td>{{ txn.id }}</td>
              <td>
                <div class="user-cell">
                  <span class="user-name">{{ txn.userName }}</span>
                  <span class="user-id">{{ txn.userId }}</span>
                </div>
              </td>
              <td>
                <span class="txn-type" [attr.data-type]="txn.type">
                  {{ getTransactionTypeIcon(txn.type) }} {{ txn.type }}
                </span>
              </td>
              <td class="amount">{{ formatAmount(txn.amount) }}</td>
              <td>
                <span class="status-badge" [ngClass]="getStatusClass(txn.status)">
                  {{ txn.status }}
                </span>
              </td>
              <td class="date">{{ formatDate(txn.date) }}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>

    <div *ngIf="!isLoading() && selectedTab() === 'users'" class="users-view">
      <section class="users-header">
        <h2>Gestión de Usuarios</h2>
        <div class="users-actions">
          <input type="text" placeholder="Buscar usuario..." class="search-input">
          <button class="btn-primary">Exportar</button>
        </div>
      </section>

      <table class="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USR-1234</td>
            <td>Juan Pérez</td>
            <td>juan.perez&#64;email.com</td>
            <td><span class="role-badge user">USER</span></td>
            <td><span class="status-badge status-completed">Activo</span></td>
            <td>
              <button class="btn-action" (click)="blockUser('USR-1234')">Bloquear</button>
            </td>
          </tr>
          <tr>
            <td>USR-5678</td>
            <td>María García</td>
            <td>maria.garcia&#64;email.com</td>
            <td><span class="role-badge user">USER</span></td>
            <td><span class="status-badge status-completed">Activo</span></td>
            <td>
              <button class="btn-action" (click)="blockUser('USR-5678')">Bloquear</button>
            </td>
          </tr>
          <tr>
            <td>USR-9012</td>
            <td>Carlos López</td>
            <td>carlos.lopez&#64;email.com</td>
            <td><span class="role-badge admin">ADMIN</span></td>
            <td><span class="status-badge status-completed">Activo</span></td>
            <td>
              <button class="btn-action" disabled>Admin</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div *ngIf="!isLoading() && selectedTab() === 'transactions'" class="transactions-view">
      <section class="transactions-header">
        <h2>Gestión de Transacciones</h2>
        <div class="transactions-filters">
          <select class="filter-select">
            <option value="">Todos los estados</option>
            <option value="completed">Completadas</option>
            <option value="pending">Pendientes</option>
            <option value="failed">Fallidas</option>
          </select>
          <input type="date" class="date-input">
        </div>
      </section>

      <table class="transactions-table full">
        <thead>
          <tr>
            <th>ID Transacción</th>
            <th>Usuario</th>
            <th>Tipo de Operación</th>
            <th>Monto</th>
            <th>Estado</th>
            <th>Fecha y Hora</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let txn of recentTransactions()">
            <td class="txn-id">{{ txn.id }}</td>
            <td>
              <div class="user-cell">
                <span>{{ txn.userName }}</span>
                <small>{{ txn.userId }}</small>
              </div>
            </td>
            <td>
              <span class="txn-type-badge" [attr.data-type]="txn.type">
                {{ getTransactionTypeIcon(txn.type) }} {{ txn.type | titlecase }}
              </span>
            </td>
            <td class="amount-cell">{{ formatAmount(txn.amount) }}</td>
            <td>
              <span class="status-badge" [ngClass]="getStatusClass(txn.status)">
                {{ txn.status | titlecase }}
              </span>
            </td>
            <td class="date-cell">{{ formatDate(txn.date) }}</td>
            <td class="actions-cell">
              <ng-container *ngIf="txn.status === 'pending'">
                <button class="btn-approve" (click)="approveTransaction(txn.id)">Aprobar</button>
                <button class="btn-reject" (click)="rejectTransaction(txn.id)">Rechazar</button>
              </ng-container>
              <span *ngIf="txn.status !== 'pending'" class="no-actions">-</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</div>

// === ARCHIVO: src/app/features/user/user.component.ts ===
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

// === ARCHIVO: src/app/features/user/user.component.html ===
<div class="user-container">
  <header class="user-header">
    <h1>Área de Usuario</h1>
    <div class="user-info" *ngIf="user$ | async as user">
      <span class="user-greeting">Bienvenido, {{ user.username }}</span>
      <span class="user-role-badge" [class]="'role-' + user.role.toLowerCase()">
        {{ user.role }}
      </span>
    </div>
  </header>

  <main class="user-content">
    <section class="dashboard-card">
      <h2>Resumen de Cuenta</h2>
      <div class="account-summary">
        <div class="account-item">
          <span class="label">Número de Cuenta:</span>
          <span class="value">****4521</span>
        </div>
        <div class="account-item">
          <span class="label">Saldo Actual:</span>
          <span class="value amount">$12,450.00</span>
        </div>
        <div class="account-item">
          <span class="label">Última Actualización:</span>
          <span class="value">{{ lastUpdate | date:'medium' }}</span>
        </div>
      </div>
    </section>

    <section class="actions-card">
      <h2>Operaciones Disponibles</h2>
      <div class="actions-grid">
        <button class="action-btn" (click)="makeTransfer()">
          <span class="icon">↗</span>
          <span class="label">Transferencia</span>
        </button>
        <button class="action-btn" (click)="viewStatements()">
          <span class="icon">📄</span>
          <span class="label">Estados de Cuenta</span>
        </button>
        <button class="action-btn" (click)="payServices()">
          <span class="icon">💳</span>
          <span class="label">Pagar Servicios</span>
        </button>
        <button class="action-btn" (click)="manageCards()">
          <span class="icon">💳</span>
          <span class="label">Gestionar Tarjetas</span>
        </button>
      </div>
    </section>

    <section class="recent-activity-card">
      <h2>Actividad Reciente</h2>
      <div class="transactions-list">
        <div class="transaction-item">
          <div class="transaction-left">
            <span class="transaction-type">Compra en Tienda</span>
            <span class="transaction-date">Hoy, 14:30</span>
          </div>
          <div class="transaction-right">
            <span class="transaction-amount negative">-$45.00</span>
          </div>
        </div>
        <div class="transaction-item">
          <div class="transaction-left">
            <span class="transaction-type">Depósito</span>
            <span class="transaction-date">Ayer, 09:15</span>
          </div>
          <div class="transaction-right">
            <span class="transaction-amount positive">+$1,500.00</span>
          </div>
        </div>
        <div class="transaction-item">
          <div class="transaction-left">
            <span class="transaction-type">Transferencia Recibida</span>
            <span class="transaction-date">22 May, 16:45</span>
          </div>
          <div class="transaction-right">
            <span class="transaction-amount positive">+$350.00</span>
          </div>
        </div>
        <div class="transaction-item">
          <div class="transaction-left">
            <span class="transaction-type">Pago de Servicio</span>
            <span class="transaction-date">20 May, 11:20</span>
          </div>
          <div class="transaction-right">
            <span class="transaction-amount negative">-$120.00</span>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="user-footer">
    <button class="logout-btn" (click)="logout()">
      <span class="icon">🚪</span>
      Cerrar Sesión
    </button>
  </footer>
</div>

// === ARCHIVO: src/app/features/auth/login.component.ts ===
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]]
  });

  readonly isLoading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly showPassword = signal(false);

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  togglePasswordVisibility(): void {
    this.showPassword.update(v => !v);
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);

    const { username, password } = this.loginForm.value;

    this.authService.login(username, password).subscribe({
      next: (success: boolean) => {
        this.isLoading.set(false);
        if (success) {
          this.handleSuccessfulLogin();
        } else {
          this.errorMessage.set('Credenciales inválidas. Por favor, verifica tu usuario y contraseña.');
        }
      },
      error: (err: Error) => {
        this.isLoading.set(false);
        this.errorMessage.set('Error de conexión. Por favor, intenta más tarde.');
        console.error('Login error:', err);
      }
    });
  }

  private handleSuccessfulLogin(): void {
    const user = this.authService.currentUser;
    if (user) {
      if (user.role === 'admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/user']);
      }
    } else {
      this.router.navigate(['/user']);
    }
  }

  clearError(): void {
    if (this.errorMessage()) {
      this.errorMessage.set(null);
    }
  }
}

// === ARCHIVO: src/app/features/auth/login.component.html ===
<div class="login-container">
  <div class="login-card">
    <div class="login-header">
      <div class="logo-container">
        <span class="bank-logo">🏦</span>
        <h1>Banca Digital</h1>
      </div>
      <p class="login-subtitle">Ingresa a tu cuenta para continuar</p>
    </div>

    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="login-form">
      <div class="form-group">
        <label for="username" class="form-label">Usuario</label>
        <div class="input-wrapper">
          <span class="input-icon">👤</span>
          <input
            id="username"
            type="text"
            formControlName="username"
            class="form-input"
            [class.error]="username?.invalid && username?.touched"
            [class.valid]="username?.valid && username?.touched"
            placeholder="Ingresa tu usuario"
            autocomplete="username"
            (input)="clearError()"
          />
        </div>
        <div class="error-text" *ngIf="username?.invalid && username?.touched">
          <span *ngIf="username?.errors?.['required']">El usuario es requerido</span>
          <span *ngIf="username?.errors?.['minlength']">El usuario debe tener al menos 3 caracteres</span>
          <span *ngIf="username?.errors?.['maxlength']">El usuario no puede exceder 50 caracteres</span>
        </div>
      </div>

      <div class="form-group">
        <label for="password" class="form-label">Contraseña</label>
        <div class="input-wrapper">
          <span class="input-icon">🔒</span>
          <input
            id="password"
            [type]="showPassword() ? 'text' : 'password'"
            formControlName="password"
            class="form-input"
            [class.error]="password?.invalid && password?.touched"
            [class.valid]="password?.valid && password?.touched"
            placeholder="Ingresa tu contraseña"
            autocomplete="current-password"
            (input)="clearError()"
          />
          <button
            type="button"
            class="toggle-password"
            (click)="togglePasswordVisibility()"
            [attr.aria-label]="showPassword() ? 'Ocultar contraseña' : 'Mostrar contraseña'"
          >
            {{ showPassword() ? '🙈' : '👁️' }}
          </button>
        </div>
        <div class="error-text" *ngIf="password?.invalid && password?.touched">
          <span *ngIf="password?.errors?.['required']">La contraseña es requerida</span>
          <span *ngIf="password?.errors?.['minlength']">La contraseña debe tener al menos 6 caracteres</span>
          <span *ngIf="password?.errors?.['maxlength']">La contraseña no puede exceder 100 caracteres</span>
        </div>
      </div>

      <div class="error-message" *ngIf="errorMessage()">
        <span class="error-icon">⚠️</span>
        <span>{{ errorMessage() }}</span>
      </div>

      <button
        type="submit"
        class="login-button"
        [disabled]="isLoading()"
        [class.loading]="isLoading()"
      >
        <span *ngIf="!isLoading()">Iniciar Sesión</span>
        <span *ngIf="isLoading()" class="loading-spinner">
          <span class="spinner"></span>
          Verificando...
        </span>
      </button>
    </form>

    <div class="login-footer">
      <a href="#" class="footer-link">¿Olvidaste tu contraseña?</a>
      <span class="separator">|</span>
      <a href="#" class="footer-link">Regístrate</a>
    </div>

    <div class="demo-credentials">
      <p class="demo-title">Credenciales de prueba:</p>
      <div class="credential-item">
        <span class="credential-label">Usuario:</span>
        <code>admin</code>
        <span class="credential-role">admin</span>
      </div>
      <div class="credential-item">
        <span class="credential-label">Usuario:</span>
        <code>user</code>
        <span class="credential-role">user</span>
      </div>
      <div class="credential-item">
        <span class="credential-label">Contraseña:</span>
        <code>password123</code>
      </div>
    </div>
  </div>
</div>


// === ARCHIVO: src/app/app.component.ts ===
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

// === ARCHIVO: src/app/app.component.html ===
<div class="app-container" [class.authenticated]="isAuthenticated">
  <header class="app-header" *ngIf="isAuthenticated">
    <div class="header-content">
      <div class="logo-section" (click)="navigateTo('/user/dashboard')">
        <div class="logo-icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 22V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 7L12 12L2 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <span class="logo-text">Banking Digital</span>
      </div>

      <nav class="main-navigation" [class.menu-open]="isMenuOpen">
        <button class="nav-item" (click)="navigateTo('/user/dashboard')">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
            <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
            <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
            <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
          </svg>
          <span>Dashboard</span>
        </button>
        <button class="nav-item" (click)="navigateTo('/admin/panel')" *ngIf="currentUser?.role === 'admin'">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
            <path d="M12 1V4M12 20V23M4.22 4.22L6.34 6.34M17.66 17.66L19.78 19.78M1 12H4M20 12H23M4.22 19.78L6.34 17.66M17.66 6.34L19.78 4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span>Admin Panel</span>
        </button>
      </nav>

      <div class="user-section">
        <div class="user-info">
          <span class="username">{{ currentUser?.username }}</span>
          <span class="user-role">{{ currentUser?.role }}</span>
        </div>
        <button class="logout-button" (click)="logout()">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 17L21 12L16 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 12H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Cerrar Sesión</span>
        </button>
      </div>

      <button class="mobile-menu-toggle" (click)="toggleMenu()">
        <svg *ngIf="!isMenuOpen" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg *ngIf="isMenuOpen" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </header>

  <main class="main-content">
    <router-outlet></router-outlet>
  </main>

  <footer class="app-footer" *ngIf="isAuthenticated">
    <div class="footer-content">
      <span>&copy; {{ currentYear }} Banking Digital. Todos los derechos reservados.</span>
      <div class="footer-links">
        <a href="#">Términos</a>
        <a href="#">Privacidad</a>
        <a href="#">Ayuda</a>
      </div>
    </div>
  </footer>

  <div class="login-overlay" *ngIf="!isAuthenticated">
    <div class="loading-spinner"></div>
  </div>
</div>

```
