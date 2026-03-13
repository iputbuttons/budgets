# Propuesta de Desarrollo: Plataforma de Streaming "Locos por el Fútbol"

Esta propuesta detalla la arquitectura, alcance, fases de desarrollo y presupuesto para la creación de la plataforma web de streaming de partidos de fútbol en vivo "Locos por el Fútbol".

## Arquitectura Tecnológica

- **Frontend (App de Usuarios y Backoffice):** React JS (con Vite), Tailwind CSS y shadcn/ui para el diseño de interfaces.
- **Backend y Base de Datos:** Firebase (Authentication, Firestore, Cloud Functions).
- **Transmisión de Video:** Integración con YouTube Live (videos ocultos/unlisted).
- **Pasarela de Pagos:** Mercado Pago (Checkout Pro).
- **Analíticas:** Amplitude para tracking de eventos y comportamiento del usuario.

---

## FASE 1: MVP Core (Producto Mínimo Viable)

Esta fase contempla el desarrollo del núcleo operativo de la plataforma para comenzar a transmitir y monetizar los partidos.

### 1. Sistema de Usuarios y Autenticación

- Registro e inicio de sesión con:
  - Correo electrónico y contraseña.
  - Inicio de sesión social: Google y Facebook.
- Recuperación de contraseña ("Olvidé mi contraseña") vía email.
- **Seguridad de cuenta:** Control estricto de una (1) sesión activa por usuario. Si el usuario inicia sesión en un nuevo dispositivo, se cierra automáticamente la sesión anterior para evitar compartir cuentas.

### 2. Monetización y Pagos (Mercado Pago)

- Integración con Mercado Pago mediante **Checkout Pro** (redirección a la plataforma de pago).
- Venta de paquetes de partidos (Planes de 1, 3, 5 y 10 partidos) con descuentos progresivos (ej. plan de 3 partidos con 20% off).
- **Sistema de Créditos:** Las compras otorgan "créditos" a la billetera virtual del usuario, los cuales pueden canjear a su elección por los partidos que deseen ver a futuro.
- **Gestión de Suspensiones:** Si un partido se suspende, el sistema devuelve automáticamente el crédito a los usuarios que lo habían canjeado.

### 3. Aplicación de Usuarios (Frontend)

- **Catálogo de Partidos:** Listado de partidos anunciados próximos a transmitirse y archivo de partidos pasados (resultados).
- **Visualización en Vivo (Streaming):**
  - Reproductor integrado de YouTube (videos unlisted).
  - Temporizador de cuenta regresiva antes de comenzar el partido.
  - Marcador en vivo en la parte superior (resultado y tiempo restante).
  - Banner inferior para mostrar publicidad/auspiciantes rotativos.
- **Chat en Vivo:** Chat en tiempo real desarrollado desde cero con Firebase para interactuar durante el partido.
- **VOD (Video On Demand):** Tras finalizar el partido, la grabación queda disponible de forma permanente para los usuarios que canjearon su crédito en dicho evento.
- **Compartir (Open Graph):** Generación automática de metadatos/gráficos en cada enlace de partido para mejorar su apariencia al compartir en redes sociales (WhatsApp, Twitter, etc.).
- Integración con Amplitude para medir eventos e interacciones.

### 4. Backoffice y Administración (Panel de Control)

- Acceso para un **Administrador General**.
- **Gestión Base:**
  - Crear y editar equipos de fútbol.
  - Crear, editar y suspender partidos (incluyendo fecha, hora, descripción).
  - Cargar gráficos de pausa (imágenes).
  - Cargar auspiciantes: logo, texto y duración en pantalla (segundos) del banner inferior.
- **Panel de Estadísticas:** Dashboard con métricas de ventas, usuarios conectados en vivo, etc.
- **Operación en Vivo (Control Room):**
  - Actualizar marcador (anotar goles).
  - Cambiar auspiciantes/banners inferiores.
  - Control de tiempo: Iniciar cada tiempo, pausar (entre tiempos o para mostrar gráficos de pausa), reanudar y finalizar partido.
  - Moderación: Pausar/reanudar chat y silenciar usuarios específicos del chat.

**Presupuesto Fase 1:** $1,200 USD
**Tiempo estimado de entrega:** *(A definir, ej: 4 a 6 semanas)*

---

## FASE 2: Expansión y Mejoras (A cotizar a futuro)

Una vez lanzada y validada la Fase 1, se proyectan las siguientes mejoras evolutivas para escalar la plataforma:

1. **Seguridad Avanzada Anti-Piratería:** Migración del reproductor de YouTube Oculto a una solución de video privada con protección de dominio y DRM (ej. Vimeo Premium, Mux o AWS MediaLive) para evitar que se comparta el enlace de origen (inspeccionando el código) o se descargue el video.
2. **Sistema de Roles en Backoffice:** Creación de permisos granulares para permitir cuentas de "Operadores" que solo puedan manejar el marcador y el chat del partido en vivo, sin acceso a la información financiera o configuraciones del sistema.
3. **Escalabilidad del Chat:** Optimización del chat en tiempo real para soportar cargas masivas de usuarios (miles de conexiones simultáneas) implementando particiones en Firebase o migrando a WebSockets puros.
4. **App Móvil (Opcional):** Empaquetado o desarrollo nativo de la web app para publicación en App Store y Google Play Store con notificaciones push.
