# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Implementación de Guards en Angular para protección de rutas**.

| | |
|---|---|
| Tema | Protección de rutas frontend |
| Nivel | junior-l2 |
| Chapter | Frontend |
| Especialidad | Angular |
| Stack | TypeScript / Angular 20 |
| Patron arquitectonico | capas estándar con separación de responsabilidades (servicios, guards, componentes) |
| Tiempo estimado | 3 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json, angular.json y tsconfig.json en la raiz`
- `src/main.ts con bootstrapApplication`
- `src/app/app.config.ts con los providers`
- `src/app/core con servicios y modelos`
- `src/app/features con componentes contenedores`
- `src/app/shared con componentes presentacionales`

Trampas conocidas:

- No inventes versiones de npm: una version inexistente hace fallar `npm install` con ETARGET y el proyecto no instala. Usa rango con caret sobre una version que exista.
- El `package.json` tiene que ser JSON valido y UNICO: nada despues de la llave de cierre.
- Angular necesita `angular.json` y `tsconfig.json` ademas del `package.json`, o `ng build` no corre.

Dependencias:

- @angular/core 20.0.0
- @angular/common 20.0.0
- @angular/router 20.0.0
- @angular/platform-browser 20.0.0
- @angular/platform-browser-dynamic 20.0.0
- @angular/compiler 20.0.0
- @angular/forms 20.0.0
- @angular/animations 20.0.0
- rxjs 7.8.0
- typescript 5.8.3
- @angular-devkit/build-angular 20.0.0
- @angular/cli 20.0.0
- @angular/compiler-cli 20.0.0
- jasmine-core n/a
- karma n/a
- karma-jasmine n/a
- karma-chrome-launcher n/a
- @types/node 20.12.7

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Configuración inicial de autenticación**: Servicio de autenticación funcional que determina la autenticación del usuario.
- **Fase 2 — Implementación de guards para rutas**: Guards implementados y aplicados a las rutas que requieren autenticación.
- **Fase 3 — Protección basada en roles**: Guards extendidos para incluir protección basada en roles, aplicados a las rutas del panel de administración.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Lo que falta y tenes que completar

No se detectaron huecos: estan los archivos declarados, el boilerplate del stack y ninguna referencia quedo colgando. Igual corre el comando de verificacion — que los archivos existan no garantiza que compilen.

### Presentes (19)

- `package.json`
- `angular.json`
- `tsconfig.json`
- `src/app/core/services/auth.service.ts`
- `src/app/core/guards/auth.guard.ts`
- `src/app/core/guards/role.guard.ts`
- `src/main.ts`
- `src/index.html`
- `src/app/core/models/user.model.ts`
- `src/app/app.config.ts`
- `src/app/app.routes.ts`
- `src/app/features/admin/admin.component.ts`
- `src/app/features/admin/admin.component.html`
- `src/app/features/user/user.component.ts`
- `src/app/features/user/user.component.html`
- `src/app/features/auth/login.component.ts`
- `src/app/features/auth/login.component.html`
- `src/app/app.component.ts`
- `src/app/app.component.html`

### Capas del patron declarado

Cada una tiene que existir como directorio real con al menos un archivo. Codigo plano en la raiz no satisface el patron.

- `src/app/core/services`
- `src/app/core/guards`
- `src/app/core/models`
- `src/app/features/admin`
- `src/app/features/user`
- `src/app/features/auth`

## Verificacion

```bash
npm install && npm run build
```

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **capas estándar con separación de responsabilidades (servicios, guards, componentes)**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Frontend, Especialidad Desarrollador, Tecnología Angular, Junior
- Brecha que el reto ataca: Aplica temas de Protección de rutas (p.ej. Guards) dentro del desarrollo en su enrutamiento. Comprender y implementar Guards en Angular para proteger rutas y controlar el acceso basado en roles y autenticación.
- Mision: Candidato con experiencia en desarrollo frontend, trabaja en equipo distribuido

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
