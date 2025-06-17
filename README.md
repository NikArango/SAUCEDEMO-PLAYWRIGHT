# Guía de Uso del Framework Playwright
Este proyecto utiliza el framework Playwright para pruebas automatizadas. El proyecto está estructurado en TypeScript y utiliza Playwright para la automatización de navegadores.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:
```txt
SAUCEDEMO-PLAYWRIGHT/
├── src/
│   ├── playwright/
│   │   ├── locators/
│   │   │   ├── login.locator.ts
│   │   │   ├── overview.locator.ts
│   │   │   ├── paymentCompleted.locator.ts
│   │   │   ├── product.locator.ts
│   │   │   ├── youCart.locator.ts
│   │   │   └── yourInformation.locator.ts
│   │   ├── pages/
│   │   │   ├── login.page.ts
│   │   │   ├── overview.page.ts
│   │   │   ├── paymentCompleted.page.ts
│   │   │   ├── product.page.ts
│   │   │   ├── youCart.page.ts
│   │   │   └── yourInformation.page.ts
│   │   ├── steps/
│   │   │   ├── login.step.ts
│   │   │   ├── product.step.ts
│   │   │   ├── purchasingProcess.step.ts
│   │   │   └── youCart.step.ts
│   │   └── util/
│   │       ├── cucumber.ts
│   │       └── playwright-bdd.ts
│   └── resources/
│       ├── features/
│       │   ├── login.feature
│       │   ├── product.feature
│       │   ├── purchasingProcess.feature
│       │   └── youCart.feature
│       └── fixtures/
│           └── .gitkeep
├── target/
├── playwright.config.ts
├── playwright.env
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

| Directorio/Archivo                       | Descripción                                                                                                       |
| ---------------------------------------- |-------------------------------------------------------------------------------------------------------------------|
| src	                                     | Carpeta principal del código fuente.                                                                              |
| playwright/locators                      | Define los localizadores de elementos para las páginas.                                                           |
| playwright/pages                         | Contiene las clases que representan las páginas web.                                                              |
| playwright/steps                         | Define los pasos de las pruebas basados en Cucumber.                                                              |
| playwright/util                          | Utilidades para el framework.                                                                                     |
| resources/ features                      | Archivos .feature de Cucumber que describen los escenarios de prueba.                                             |
| resources/fixtures                       | Archivos de datos de prueba.                                                                                      |
| playwright.config.ts                     | Configuración de Playwright, incluyendo navegadores y entornos, reportes, rutas de features , steps, entre otros. |
| playwright.env                           | Variables de entorno necesarias para las pruebas.                                                                 |
| package.json                             | Dependencias y scripts del proyecto.                                                                              |
| .gitignore                               | Archivos y carpetas que deben ser ignorados por Git.                                                              |
| README.md                                | Documentación del proyecto incluyendo instrucciones de configuración, ejecución y estrategia de automatización y patrones utilizados                                |

## Instalación de Dependencias
Instala las dependencias necesarias para el proyecto ejecutando:

```bash
npm install
```

## Instalación de Navegadores
Instala las dependencias de navegadores soportados

```bash
npx playwright install
```

## Configuración de Browser
El archivo de configuración de Playwright `playwright.config.ts` define los proyectos y dispositivos a utilizar en las pruebas. Configure lo necesario para su uso; el proyecto por defecto viene configurado con Chromium.

Aquí hay un ejemplo de configuración:

```ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    }
  ]
```

Esta configuración permite ejecutar pruebas en múltiples navegadores, asegurando que tu aplicación funcione correctamente en diferentes entornos. Puedes ajustar o agregar más navegadores según tus necesidades específicas.

## Configuración de Entorno

El archivo `playwright.env` contiene las variables de entorno necesarias para la ejecución de las pruebas. Asegúrate de configurar las variables adecuadamente antes de ejecutar las pruebas.

Cada nueva variable de entorno debe seguir el formato basado en el entorno correspondiente: `INTE`, `CERT`, `PROD`. 

A continuación, se muestra un ejemplo de cómo definir estas variables en el archivo `playwright.env`:

```env
INTE_BASEURL=https://inte.example.com
INTE_PATH=/api/v1
INTE_KEY=your-integration-key

CERT_BASEURL=https://certi.example.com
CERT_PATH=/api/v1
CERT_KEY=your-certification-key

PROD_BASEURL=https://prod.example.com
PROD_PATH=/api/v1
PROD_KEY=your-production-key
```
> [!NOTE]
> Puedes definir las variables `STAGING` y `CI` sin utilizar el formato mencionado anteriormente para simplificar su uso en la terminal. Esto permite ejecutar las pruebas en diferentes entornos de manera más directa.

## Ejecución del Proyecto
```bash
  # Ejecución de todos los test
  npm run test

  # Ejecución por tags 
  npm run test -- --grep @login
  npm run test -- --grep "@login|@some"

  # Ejecución por ambientes
  npm run test -- --grep @login --project firefox
  npm run test -- --grep @login --project chromium

  # Ejecución por entornos
  STAGING=INTE&npm run test
  STAGING=CERT&npm run test
  STAGING=PROD&npm run test

```

## Storage State
Para el uso de storage en automatizaciones que requieran guardar la sesión, modifica `playwright.config.ts` y agrega `storageState` con el siguiente valor `./target/state/storage.json`.

Ejemplo de configuración en `playwright.config.ts`:

```ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: './target/state/storage.json'
      }
    }
  ]
});
```

En la definición de los steps, utiliza la misma ruta para definir la ruta de guardado del estado de la sesión:

```ts
await page.context().storageState({ path: './target/state/storage.json' })
```

Esto asegurará que el estado de la sesión se guarde y se reutilice en las pruebas posteriores, facilitando la automatización de flujos que requieren autenticación persistente.

## Reportes & Trace
Los reportes de las pruebas se generan en el directorio `target/playwright-reports`. Puedes abrir los reportes generados utilizando el siguiente comando:

```bash
npx playwright show-report target/playwright-reports/
```

Los reportes incluyen automáticamente el trace de las pruebas. Si necesitas compartir el trace con un desarrollador, ubica el archivo de trace correspondiente en la carpeta `target/generated-test-sources` y proporciona las instrucciones para levantar el trace en su ordenador.

Para abrir un trace específico, el desarrollador puede utilizar el siguiente comando:

```bash
npx playwright show-trace path/to/trace.zip
```

Asegúrate de reemplazar path/to/trace.zip con la ruta real del archivo de trace que deseas compartir.

# Estrategia de Automatización y Patrones Utilizados

## Estrategia de Automatización

Para la automatización de pruebas de aplicaciones web. La estrategia se basa en:

- **Uso de framework Playwright:** Una solución robusta, flexible y moderna para pruebas end-to-end de aplicaciones web, mejorando la calidad y eficiencia del proceso de testing.
- **Uso de npm:** El proyecto utiliza el npm para la gestión de dependencias del proyecto [`package.json`], contando con una gran comunidad, soporte y abundancia de paquetes.
- **Desarrollo guiado por escenarios (BDD):** Los casos de prueba se definen en archivos `.feature` usando Gherkin, facilitando la colaboración entre QA y negocio.
- **Ejecución paralela:** Las pruebas se ejecutan en paralelo para optimizar tiempos y recursos[`playwright.config.ts`].
- **Gestión de entornos:** La configuración de variables se centraliza en [`playwright.env`], permitiendo pruebas en integración, certificación y producción.

## Patrones Utilizados

- **Page Object Model (POM):** POM mejora la organización, mantenimiento y robustez de las pruebas automatizadas en aplicaciones web, caracterizado por:

  - **Reutilización de código:** Las páginas y localizadores se definen una sola vez y se reutilizan en múltiples pruebas.
  - **Mantenimiento simplificado:** Los cambios en la UI(actualizaciones por el equipo de desarrollo o en sintaxis propia del framework) solo requieren actualizaciones en los localizadores, no en cada prueba.
  - **Claridad y legibilidad:** Las pruebas son más fáciles de entender al abstraer la lógica de interacción con la UI.

- **Modularidad:** Cada funcionalidad tiene su propio archivo `.feature` y sus datos asociados, facilitando el mantenimiento y escalabilidad.


