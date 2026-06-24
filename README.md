# TheRabbitHole — Educación Bitcoin en Español

Sitio web de educación Bitcoin en español. Explicaciones técnicas y honestas sobre cómo funciona Bitcoin: desde los conceptos básicos hasta la autocustodia avanzada.

**therabbitholebtc.com** · Bitcoin-only · Contenido gratuito

---

## Principios

- **Solo Bitcoin** — sin altcoins, tokens ni DeFi
- **Autocustodia** — enseñamos a ser el único responsable de tus bitcoin
- **Sin especulación** — no damos predicciones de precio ni señales de trading
- **Sin paywalls** — todo el contenido es de acceso libre y siempre lo será

---

## Páginas

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Portada con resumen del proyecto |
| `sobre.html` | Quién hace TheRabbitHole, principios y FAQ |
| `aprender.html` | Catálogo de lecciones ordenadas por nivel |
| `educadores.html` | Directorio de educadores Bitcoin en español |
| `tiendas.html` | Directorio de tiendas y servicios que aceptan BTC |
| `donaciones.html` | Cómo apoyar el proyecto con Bitcoin |

---

## Estructura del proyecto

```
TheRabbitHole_page/
├── index.html
├── sobre.html
├── aprender.html
├── educadores.html
├── tiendas.html
├── donaciones.html
├── assets/
│   ├── css/
│   │   └── style.css       ← Estilos compartidos de todas las páginas
│   └── js/
│       └── main.js         ← Scripts compartidos (clipboard, FAQ, filtros)
├── .gitignore
└── README.md
```

---

## Tecnología

Sitio estático puro: **HTML5, CSS3, JavaScript vanilla**. Sin frameworks, sin dependencias npm, sin build step. Se puede abrir directamente en cualquier navegador.

Tipografía vía Google Fonts:
- [Fraunces](https://fonts.google.com/specimen/Fraunces) — display / títulos
- [Inter](https://fonts.google.com/specimen/Inter) — body
- [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) — monospace / etiquetas

---

## Desarrollo local

No se necesita ninguna herramienta. Abre `index.html` directamente en el navegador.

Si necesitas un servidor local (para evitar restricciones de CORS en algunos navegadores):

```bash
# Con Python
python -m http.server 8080

# Con Node.js
npx serve .

# Con PHP
php -S localhost:8080
```

---

## Contribuir

Si encuentras un error técnico en el contenido:
- Abre un **Issue** en este repositorio describiendo el error y la corrección propuesta
- O escribe directamente a **hola@therabbitholebtc.com**

Para sugerir un educador o una tienda, usa los formularios dentro del propio sitio.

---

## Donaciones

El proyecto se financia exclusivamente con donaciones voluntarias en Bitcoin.

- **On-chain:** dirección en `donaciones.html`
- **Lightning:** contactar por hola@therabbitholebtc.com

---

## Licencia

Contenido © 2025 TheRabbitHole · [@TheRabbitHoleBTC](https://twitter.com/therabbitholebtc)

El código HTML/CSS/JS es libre de reutilizar con atribución.
