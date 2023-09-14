# Pasos para reproducir el error

- Entrar a la carpeta de external-test-api e instalar las dependencias con `npm install`
- Levantar el servidor express de la carpeta external-test-api, preferiblemente con nodemon
- Entrar a la carpeta de frontend e instalar las dependencias con `npm install`
- Levantar el proyecto de Next.js de la carpeta frontend con `npm run dev`
- Entrar a la ruta /home del proyecto Front levantado en el paso anterior
- Entrar al archivo del servidor express y setear la constante error (cualquiera de las 2) a true y recargar la página
- Se debería ver una card de otro color, con el mensaje de error y botón reintentar, setear la constante del servidor express nuevamente a false y apretar el botón de reintentar en la página
- Esperaría que se vea la card sin el error, pero se sigue viendo el error. No actualiza correctamente el segmento
