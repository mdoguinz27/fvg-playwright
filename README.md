# 🎭 Fravega E2E Test Suite

<p align="left">
  <img src="https://img.shields.io/badge/Playwright-282C34?style=for-the-badge&logo=playwright&logoColor=45ba4b" alt="Playwright" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Pattern-POM-blue?style=for-the-badge" alt="POM Pattern" />
</p>

Este repositorio alberga una robusta suite de pruebas automatizadas **End-to-End (E2E)** para el sitio web de [Fravega](https://www.fravega.com/). Diseñada con un enfoque en la mantenibilidad y la eficiencia, la suite utiliza **Playwright** bajo el patrón de **Page Object Model (POM)**.

---

## 📑 Tabla de Contenidos

- [🚀 Inicio Rápido](#-inicio-rápido)
- [🧪 Escenarios de Prueba](#-escenarios-de-prueba)
- [🛠️ Ejecución de Tests](#️-ejecución-de-tests)
- [📂 Arquitectura del Proyecto](#-arquitectura-del-proyecto)
- [✨ Mejoras de Robustez](#-mejoras-de-robustez)
- [📊 Reportes](#-reportes)

---

## 🚀 Inicio Rápido

### Requisitos Previos

*   **Node.js** (v14+)
*   **npm** (incluido con Node.js)

### Instalación

1.  **Clonar y Acceder:**
    ```bash
    git clone <repository-url>
    cd fvg-playwright
    ```

2.  **Instalar Dependencias:**
    ```bash
    npm install
    ```

3.  **Instalar Navegadores:**
    ```bash
    npx playwright install chromium
    ```

---

## 🧪 Escenarios de Prueba

| Escenario | Descripción | Flujo |
| :--- | :--- | :--- |
| **Caso 1: Heladera Drean** | Busca y añade una heladera específica al carrito. | Home ➔ CP ➔ Search ➔ Detalle ➔ Carrito |
| **Caso Libre: Ofertas** | Valida filtros y ordenamiento en la sección de ofertas. | Home ➔ CP ➔ Ofertas ➔ Filtros ➔ Carrito |

---

## 🛠️ Ejecución de Tests

| Comando | Descripción |
| :--- | :--- |
| `npm run test` | Ejecuta todos los tests en **Producción**. |
| `npm run test:prod` | Alias para ejecución rápida en producción. |
| `npm run test:debug` | Activa el **Playwright Inspector** paso a paso. |

---

## 📂 Arquitectura del Proyecto

La estructura sigue las mejores prácticas de **Page Object Model (POM)**:

```text
challenge-frontend/
├── 📁 tests/
│   ├── 📁 common/          # Configuración de entornos y variables globales.
│   ├── 📁 web/
│   │   ├── 📁 pages/       # POM: Selectores y lógica por página (homePage, productPage, etc.).
│   │   ├── 📁 scenarios/   # Definiciones de los tests (.spec.js).
│   │   └── 📁 utils/       # Helpers comunes y lógicas compartidas.
├── 📄 playwright.config.js  # Configuración core de la suite.
└── 📄 package.json          # Scripts y administración de dependencias.
```

---

## ✨ Mejoras de Robustez

La suite ha sido optimizada para manejar las peculiaridades del sitio de Fravega:

*   **🔄 Manejo Dinámico de Modales:** Apertura proactiva del modal de geolocalización si no se encuentra visible.
*   **🛡️ Dismiss de Overlays:** Cierre automático de overlays de confirmación de entrega que interceptan interacciones.
*   **🎯 Selectores Únicos:** Uso de atributos específicos (`data-suggestion-index`, `name`) para evitar conflictos de *Strict Mode* en elementos duplicados para mobile/desktop.
*   **⏱️ Sincronización Avanzada:** Uso de estados de carga inteligentes (`load` vs `networkidle`) para optimizar el tiempo de ejecución.

---

## 📊 Reportes

Playwright genera un reporte visual detallado tras cada ejecución fallida o exitosa. Para verlo:

```bash
npx playwright show-report
```

---

<p align="center">
  <b>Hecho con 💚 para asegurar una experiencia de usuario sin fricciones.</b>
</p>

