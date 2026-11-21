# LEEME — Portafolio de Patrick Wackerbauer

Fase 1: portada completa y tres páginas provisionales (Works, Skills, Profile).

## Cómo verlo

```bash
npm install
npm run dev
```

Se abre en http://localhost:3000. Para publicar en Vercel basta con importar el repositorio.

## Dirección de arte aprobada: "Quiet signature"

| Elemento          | Valor                                                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------ |
| Colores           | Blanco `#FFFFFF`, tinta `#0A0A0A`, gris `#595959`, línea fina tinta al 16 %                      |
| Modo oscuro       | Fondo `#0A0A0A`, texto `#F5F5F5` (variables `.dark` en `globals.css`)                            |
| Letras            | Inter Tight 300/400/500 (títulos) y Geist Mono 400/500 (etiquetas)                               |
| Titular           | Peso 300, interlínea .98, espaciado -0.045em. 4 líneas en celular, 3 en tableta, 2 en escritorio |
| Movimiento        | Curva `cubic-bezier(.22,1,.36,1)`, 1.2 s, desplazamiento 28 px; hover 0.5 s                      |
| Animación firma   | La firma se escribe, vuela a la esquina y la página aparece (GSAP 3.13.0, ~2.5 s + 1.2 s)        |
| Elementos propios | Firma, trazo bajo el titular, punto "hoja", dock con números 01/02/03                            |

## Versiones

Next.js 16.4.6 · React 19.3.0 · Tailwind 4.3.3 · GSAP 3.13.0 (exacta) · next-themes 0.4.6.

## Por validar (decisiones que tomé por ti)

1. **Logo:** no había SVG, así que tracé tu JPG a vectores. Si tienes el original en SVG, reemplaza `src/components/brand/logo-path.ts`.
2. **"Trujillo, Peru"** aparece abajo a la derecha, tomado de tu currículum. Confirma si lo quieres público.
3. **Frase "Hi, I'm Patrick Wackerbauer"** sobre el titular: la agregué yo.
4. **Textos en español** (titular "Construyo software que resuelve problemas reales", "Ingeniería de Software", "Trabajos / Habilidades / Perfil") y etiqueta "Currículum": propuestos por mí.
5. **Selector EN/ES y botón de tema** van en la barra inferior para que el menú superior tenga exactamente tres botones.
6. **Animación de entrada:** una vez por sesión, solo en la portada.
7. **Modo oscuro:** no estaba en el diseño aprobado; es una versión derivada, claro por defecto.
8. **Páginas Works, Skills y Profile:** solo marcador provisional, sin contenido inventado.
9. **Video** de fondo usado sin comprimir (1.8 MB).
10. **Idioma:** se guarda en una cookie, por lo que la portada se renderiza por petición (no es estática).

## Pendientes

- Contenido de Works, Skills y Profile (proyecto real disponible en el currículum: "It's OK").
- Imagen para compartir en redes (Open Graph, 1200 x 630).
- Favicon definitivo (hoy es una "P" provisional) y apple-touch-icon.
- Comprimir el video si se quiere una carga más ligera en celular.
- Dominio propio y `NEXT_PUBLIC_SITE_URL` en Vercel.
- Husky necesita un repositorio git: ya está iniciado (`git init`), sin commits.
