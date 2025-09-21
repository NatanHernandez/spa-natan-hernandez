# Concesionario SPA Natan Hernandez + Proyecto React

##  Propósito y público objetivo
Esta aplicación es una single page application que se desarrollada en React para simular un concesionario de autos llamado new generation and innovations cars; Esta pagina dirigida a usuarios que desean conocer distintos modelos de vehículos disponibles en el concesionario y ponerse en contacto con nuestro concesionario para solicitar información.

##  Requisitos de accesibilidad aplicados
- Se aplicaron las WCAG 2.1 (nivel AA) y la normativa local vigente.
- Colores con contraste suficiente para texto y botones.
- Tipografía legible y tamaño adecuado.
- Navegación clara y accesible mediante el uso de teclado
- Uso de atributos ARIA 
- Mensajes de error

##  Diseño accesible
- Se utilizaron colores contrastantes para cumplir con los objetivos del WCAG 2.1
- Se definió una estructura clara con botones
- Todos los elementos interactivos son accesibles mediante teclado.

##  Desarrollo de la SPA
- Framework: uso de react para esta actividad
- Navegación interna sin recarga de la página
- HTML semántico: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
- Uso de encabezados

##  Implementación de características de accesibilidad
- Atributos `aria-labelledby` y `aria-describedby` 
- uso de alt para las imagenes
- Formularios con mensajes de error claros y `role="alert` para anunciarlos.

##  Pruebas de accesibilidad
![Evidencia de Lighthouse y WAVE](./img/evidencia1.png)

- Se utilizaron herramientas automáticas:
  - **WAVE** 
  - **Lighthouse** para verificar accesibilidad.
- Se realizaron pruebas manuales de navegación por teclado.
- Se documentaron las soluciones aplicadas para mejorar accesibilidad.
