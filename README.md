# Implementación de Guards en Angular para protección de rutas

En un proyecto de banca digital, necesitas proteger las rutas del frontend para asegurar que solo usuarios autenticados y con roles específicos puedan acceder a ciertas áreas. El sistema tiene un panel de administración y un área de usuario, ambos requieren autenticación, pero el panel de administración solo debe ser accesible para usuarios con rol 'admin'. Debes implementar y configurar guards en Angular para lograr esto.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Protección de rutas frontend |
| **Nivel** | junior-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 3 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Configuración inicial de autenticación

**Objetivo:** Configurar un servicio de autenticación básico que determine si un usuario está autenticado.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Crea un servicio de autenticación que simule la verificación de autenticación de usuarios.
- El servicio debe devolver un booleano indicando si el usuario está autenticado.

**Entregable:** Servicio de autenticación funcional que determina la autenticación del usuario.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo simular la autenticación en un entorno de desarrollo.
- Piensa en cómo este servicio será utilizado por los guards.

</details>

### Fase 2: Implementación de guards para rutas

**Objetivo:** Implementar guards en Angular para proteger las rutas basadas en autenticación.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Crea un guard que utilice el servicio de autenticación para determinar si un usuario puede acceder a una ruta.
- Aplica este guard a las rutas que requieren autenticación.

**Entregable:** Guards implementados y aplicados a las rutas que requieren autenticación.

<details>
<summary>Pistas de conocimiento</summary>

- Recuerda que los guards en Angular pueden ser utilizados para proteger rutas y ejecutar lógica antes de que una ruta sea activada.
- Considera cómo manejar la redirección en caso de que un usuario no esté autenticado.

</details>

### Fase 3: Protección basada en roles

**Objetivo:** Extender los guards para incluir protección basada en roles.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Modifica los guards para que también verifiquen el rol del usuario antes de permitir el acceso a ciertas rutas.
- Aplica estos guards a las rutas del panel de administración.

**Entregable:** Guards extendidos para incluir protección basada en roles, aplicados a las rutas del panel de administración.

<details>
<summary>Pistas de conocimiento</summary>

- Piensa en cómo almacenar y verificar los roles de los usuarios en tu aplicación.
- Considera cómo manejar la redirección para usuarios con roles incorrectos.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un guard en Angular y por qué se usa?
- **paraQueSirve**: ¿Para qué sirve un guard en el contexto de protección de rutas?
- **comoSeUsa**: ¿Cómo se usa un guard para proteger una ruta en Angular?
- **queDecisionesImplica**: ¿Qué decisiones debes tomar al implementar guards basados en roles en tu aplicación?

## Criterios de Evaluacion

- Implementación correcta de un servicio de autenticación.
- Creación y aplicación efectiva de guards para proteger rutas.
- Extender guards para incluir protección basada en roles.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT). Devuelve un ZIP con el proyecto. Sirve si no tenes un agente en el IDE.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
