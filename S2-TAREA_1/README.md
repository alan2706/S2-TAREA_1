# Formulario de Registro — Unidad 1: Front-End

Proyecto de aprendizaje que cubre los fundamentos del desarrollo del lado del cliente: estructura HTML5, estilos con CSS y validaciones con JavaScript puro.

---

## Estructura del proyecto

```
unidad1-frontend/
├── index.html   # Estructura del formulario (Sesión 1)
├── style.css    # Estilos y diseño con Flexbox (Sesión 2)
├── script.js    # Validaciones con JavaScript (Sesión 3)
└── README.md    # Este archivo
```

---

## Requisitos previos

No se necesita instalar ningún programa adicional. Solo necesitas:

- Un **navegador web** moderno (Chrome, Firefox, Edge o Safari).
- Un **editor de código** para explorar o modificar los archivos (recomendado: [VS Code](https://code.visualstudio.com/)).

> No se usa Node.js, npm, ni ningún framework externo. El proyecto funciona con archivos estáticos.

---

## Instalación

### 1. Descarga los archivos

Descarga los cuatro archivos del proyecto y colócalos **todos en la misma carpeta**:

```
index.html
style.css
script.js
README.md
```

> ⚠️ Es importante que los tres archivos estén en la misma carpeta. Si están separados, el HTML no encontrará el CSS ni el JS.

### 2. Verifica la estructura

Abre tu explorador de archivos y confirma que la carpeta se ve así:

```
📁 unidad1-frontend/
 ├── 📄 index.html
 ├── 📄 style.css
 ├── 📄 script.js
 └── 📄 README.md
```

---

## Ejecución

### Opción A — Abrir directamente en el navegador (más simple)

1. Localiza el archivo `index.html` en tu carpeta.
2. Haz **doble clic** sobre él.
3. Se abrirá automáticamente en tu navegador predeterminado.

> La barra de direcciones mostrará algo como `file:///C:/Users/TuNombre/unidad1-frontend/index.html`. Eso es normal.

---

### Opción B — Usar Live Server en VS Code (recomendado para desarrollo)

Live Server recarga la página automáticamente cada vez que guardas un archivo, lo que agiliza el trabajo.

1. Abre VS Code.
2. Ve a **Archivo → Abrir carpeta** y selecciona `unidad1-frontend/`.
3. En el panel de extensiones (ícono de cuadrados a la izquierda), busca **Live Server** de Ritwick Dey e instálala.
4. Con `index.html` abierto, haz clic en el botón **"Go Live"** en la barra inferior de VS Code.
5. El navegador se abrirá en `http://127.0.0.1:5500/index.html`.

---

### Opción C — Servidor local con Python (sin extensiones)

Si tienes Python instalado, puedes levantar un servidor local desde la terminal:

**Python 3:**
```bash
# Entra a la carpeta del proyecto
cd ruta/a/unidad1-frontend

# Levanta el servidor
python -m http.server 8000
```

Luego abre tu navegador en: `http://localhost:8000`

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

---

## Uso del formulario

Una vez abierto en el navegador, verás un formulario con tres campos:

| Campo | Regla de validación |
|---|---|
| **Nombre completo** | No puede estar vacío |
| **Correo electrónico** | No puede estar vacío y debe tener formato `usuario@dominio.com` |
| **Contraseña** | No puede estar vacía y debe tener mínimo 8 caracteres |

### Flujo de uso

1. Completa los tres campos.
2. Haz clic en **Registrarse**.
3. Si algún campo es inválido, aparecerá un `alert()` indicando el error y el cursor se moverá al campo correspondiente.
4. Si todos los campos son válidos, aparecerá un mensaje de éxito y el formulario se limpiará.

### Validación en tiempo real

Al hacer clic fuera de un campo (evento `blur`), el campo se valida de inmediato, mostrando el borde en rojo (inválido) o verde (válido) sin necesidad de enviar el formulario.

---

## Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| **HTML5** | Estructura semántica del formulario |
| **CSS3** | Estilos, Flexbox, variables CSS, transiciones |
| **JavaScript ES6** | Validaciones, manipulación del DOM, eventos |

---

## Objetivos de aprendizaje cubiertos

- [x] Crear y estructurar un documento HTML5
- [x] Vincular archivos CSS y JS externos al HTML
- [x] Usar **Flexbox** para centrar elementos en pantalla
- [x] Aplicar estilos de tipografía, colores y bordes con CSS
- [x] Validar que el correo no esté vacío y tenga formato correcto
- [x] Validar que la contraseña tenga mínimo 8 caracteres
- [x] Mostrar mensajes de error con `alert()`

---

## Solución de problemas

**Los estilos no se aplican / El JS no funciona**
Verifica que `index.html`, `style.css` y `script.js` estén en la misma carpeta y que los nombres coincidan exactamente (respetando mayúsculas y minúsculas).

**La página se ve sin formato al abrirla**
Asegúrate de abrir `index.html` y no otro archivo. Si usas VS Code, prueba la opción Live Server.

**El `alert()` no aparece**
Algunos navegadores bloquean alertas en páginas locales (`file://`). Usa la Opción B o C para servirla desde `localhost`.
