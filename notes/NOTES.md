# Plataforma de streaming de partidos de futbol "Locos por el futbol"

## General

- Aplicacion web con React (Vite), Firebase
- Usuarios que se puedan loguear con correo y contraseña
- Se paga por partido, el usuario puede ver los partidos anunciados
- Todos los partidos son privados y podes pagar para ver un partido
- Hay planes de partidos 1, 3, 5 y 10. Plan de 1 partido $6000, plan de 3 partidos 20% menos en total
- Conectado a Mercado Pago para recibir pagos
- Crearle un graph a cada link de partido para publicitarlo y compartilo con posibles usuarios
- Para transmitir usamos Youtube
- Los usuarios solo pueden estar logueado en un lugar a la vez, para que no pague uno solo y se compartan la cuenta entre usuarios

## App de usuarios

- Plataforma de partidos en vivo
- Chat en el vivo
- Temporizador antes de empezar el partido
- Banner debajo con publicidades
- Arriba resultados en vivo y tiempo restante del partido
- Temporizador
- Guardar videos del vivo
- Ademas de los partidos que debajo se vea los resultados de partidos anteriormente transmitidos, etc
- Al final un partido que muestre el resultado
- Eventos de amplitud

## Backoffice

- Panel con estadisticas de los partidos, cantidad de usuarios conectados, etc
- Crear equipos de furbol
- Crear partidos, cargar:
  - Equipos
  - Fecha y dia
  - Descripcion del partido
  - Graficos de pausa (cargar las imagenes)
  - Auspiciantes: Imagenes de banner de abajo de los auspiciantes con logo y texto, tiempo en pantalla (en segundos)
- Que se pueda edatar un partido
- Necesitamos podemos suspender los partidos en caso que efectivamente se suspenda para avisar a los usuarios.
- Panel en vivo para:
  - Anotar goles
  - Cambiar banners debajo
  - Iniciar cada tiempo del partido
  - Pausar para mostrar graficos de pausa
  - Pausar entre tiempos
  - Finalizar partido
  - Pausar chat y reanudar chat
  - Silenciar usurios del chat
