# Propuesta de Desarrollo: Sistema de Trazabilidad y Gestión de Viajes

**Preparado para:** Transportes Montivero
**Fecha:** 26 de Febrero de 2026

---

El objetivo de esta propuesta es presentar un plan de trabajo claro y escalable para la creación de una **Plataforma Integral de Gestión de Recorridos**, diseñada específicamente para modernizar, asegurar y transparentar el servicio de transporte de personal para fábricas locales.

El enfoque está puesto en desarrollar un producto funcional, moderno y seguro que elimine el uso de vales de papel y planillas de Excel manuales. Esto permitirá reducir el tiempo de control de facturación de las fábricas (de 2-3 días a minutos), brindar pruebas irrefutables de los viajes realizados y sentar bases sólidas para la optimización operativa de la empresa.

Para lograr esto de manera eficiente, el proyecto se divide en dos fases. La Fase 1 abarca todo lo necesario para digitalizar el proceso actual, registrar la información con geolocalización y darle acceso a las fábricas. La Fase 2 contempla mejoras avanzadas para la automatización administrativa.

---

## FASE 1: Lanzamiento y Plataforma Principal (MVP)

Esta etapa incluye el diseño y desarrollo del corazón del negocio: un sistema donde los choferes puedan registrar sus viajes desde su celular, la empresa pueda monitorear la flota completa y las fábricas puedan auditar los viajes en tiempo real.

### 1. Aplicación Web para Choferes
* **Acceso Seguro:** Cada chofer tendrá su propio usuario y contraseña para ingresar desde el navegador de su propio celular (sin necesidad de instalar apps complejas).
* **Registro de Viajes en Tiempo Real:** 
  * Inicio de viaje con registro de fecha, hora y ubicación GPS exacta.
  * **Odómetro Digital y Trazabilidad:** El sistema registrará el recorrido mediante puntos GPS para calcular de forma precisa y automática los kilómetros reales recorridos, contemplando desvíos o calles cortadas.
* **Validación de Pasajeros:** Al subir al vehículo, el pasajero validará su viaje mediante una **Firma Digital en la pantalla** del celular del chofer (o escaneo de QR), reemplazando la firma en el vale de papel y garantizando transparencia.
* **Protocolo "Pasajero Ausente" (Tolerancia de 5 minutos):** Si al llegar al domicilio el pasajero no se presenta, el chofer activará un botón de "Espera". Se iniciará un cronómetro de 5 minutos irrefutable. Si el tiempo expira, el viaje se cierra con estado "Ausente", adjuntando la ubicación GPS y la hora exacta como prueba indiscutible para la fábrica, eliminando cualquier tipo de disputa.

### 2. Panel de Administración (Backoffice para Montivero)
* **Control de Flota:** Visualización de los más de 500 viajes quincenales en tiempo real.
* **Liquidación Automática:** Cálculo automático de los 7.000 a 9.000 kilómetros recorridos por quincena, sumando todos los vehículos, eliminando la carga manual en Excel.
* **Gestión de Usuarios:** Alta y baja de choferes, vehículos y fábricas clientes.
* **Generador de Reportes:** Exportación de resúmenes quincenales listos para enviar a facturación, sin errores humanos.

### 3. Portal de Auditoría para Fábricas (Ej. Tersuave)
* **Acceso Exclusivo:** Cada fábrica cliente tendrá un acceso web con credenciales propias para ver *únicamente* los viajes correspondientes a sus empleados.
* **Auditoría Visual y Rápida:** Al hacer clic en un viaje, el supervisor de la fábrica podrá ver:
  * Chofer, pasajero y horario.
  * Firma digital del pasajero.
  * **Mapa del Recorrido:** Un enlace directo a Google Maps mostrando el punto de inicio, la ruta trazada y el punto de fin.
  * Pruebas de ausentismo (GPS + reloj) en caso de que un empleado no haya salido a tiempo.

---

### Inversión de la Fase 1

El desarrollo completo de esta primera etapa, que incluye la App para choferes, el Panel de Control para Montivero, el Portal para las Fábricas y la base de datos segura, requiere una inversión de:

**Total:** [Monto a definir] USD/ARS

*(Los plazos de entrega y la modalidad de pago se definirán de mutuo acuerdo al confirmar el proyecto. Los costos de mantenimiento de servidores al principio serán mínimos o nulos gracias a las tecnologías elegidas).*

---

## FASE 2: Expansión y Escalabilidad (Proyección a Futuro)

Una vez que la plataforma esté operando y el equipo se haya adaptado al sistema digital, se proyectan las siguientes mejoras para llevar el negocio al siguiente nivel:

1. **Optimización de Rutas con IA:** Sugerencia automática del camino más rápido y eficiente para recoger a múltiples pasajeros, ahorrando combustible y tiempo.
2. **Facturación Electrónica Automática:** Integración del sistema con los entes reguladores (AFIP) para emitir la factura a la fábrica con un solo clic una vez que ellos aprueban la quincena en su portal.
3. **Notificaciones a Pasajeros (WhatsApp):** Envío de un mensaje automático al pasajero cuando el chofer está a 5 minutos de llegar a su domicilio, reduciendo aún más las demoras.

---

Esta propuesta ha sido pensada para dar un salto de calidad tecnológica, posicionando a la empresa como un proveedor de transporte moderno, seguro y transparente. 

Quedo a disposición para revisar los detalles, resolver cualquier duda y dar el próximo paso.