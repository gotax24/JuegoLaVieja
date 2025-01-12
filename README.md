He actualizado el README reflejando los cambios en la estructura del proyecto:

---

# 🕹️ Juego de La Vieja

¡Bienvenido al juego clásico de "La Vieja" (Tic Tac Toe) desarrollado con React! Juega directamente en línea o revisa el código fuente para aprender más sobre su implementación.

## 🚀 Juega en Línea

Accede al juego en este [enlace](https://juego-la-vieja-phi.vercel.app/) sin necesidad de instalaciones.

## 🛠️ Tecnologías Utilizadas

- **Frontend:** React + Hooks (useState)
- **Estilización:** CSS
- **Almacenamiento:** LocalStorage
- **Animaciones:** Canvas Confetti
- **Despliegue:** Vercel

## 📝 Funcionalidades

- Juego para dos jugadores con turnos alternados (❌ y ⚪).
- Indicador del turno actual.
- Detección automática de ganadores y empates.
- Reinicio del juego con un solo clic.
- Almacenamiento persistente del tablero en el navegador.

## 📂 Estructura del Proyecto

```plaintext
📦 JuegoLaVieja
 ┣ 📂 node_modules
 ┣ 📂 public
 ┃ ┗ 📜 logo.svg
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 Square.jsx
 ┃ ┃ ┗ 📜 WinnerModal.jsx
 ┃ ┣ 📂 css
 ┃ ┃ ┣ 📜 App.css
 ┃ ┃ ┗ 📜 index.css
 ┃ ┣ 📂 helpers
 ┃ ┃ ┗ 📜 constants.js
 ┃ ┣ 📂 logic
 ┃ ┃ ┗ 📜 checkWinner.js
 ┃ ┣ 📜 App.jsx
 ┃ ┣ 📜 main.jsx
 ┣ 📜 .gitignore
 ┣ 📜 eslint.config.js
 ┣ 📜 index.html
 ┣ 📜 package.json
 ┣ 📜 README.md
 ┣ 📜 vite.config.js
 ┗ 📜 yarn.lock
```

## 💻 Clonar y Ejecutar Localmente (Opcional)

Si deseas explorar o modificar el código, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/juego-la-vieja.git
   cd juego-la-vieja
   ```

2. Instala las dependencias:

   ```bash
   yarn
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   yarn dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el juego.

## 📜 Licencia

Este proyecto está bajo la licencia MIT. ¡Siéntete libre de contribuir o personalizarlo!

---

Si necesitas algún ajuste adicional, ¡no dudes en avisarme!
