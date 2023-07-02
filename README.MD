# Challenge Fon You
<div>
  <img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="ReactJs" src="https://img.shields.io/badge/ReactJs-45b8d8?style=for-the-badge&logo=react&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-43853d?style=for-the-badge&logo=Vite&logoColor=white" />
  <img alt="Redux" src="https://img.shields.io/badge/-Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" />
  <img alt="Tailwind" src="https://img.shields.io/badge/-tailwind-b0b518?style=for-the-badge&logo=tailwindcss&logoColor=white" />
</div>

Demo app: 

__NOTA:__ La aplicación se empaqueto con vite, debido a errores al empaquetar con webpack.

## Instalación

1 - Use ```git clone url``` para clonar el repositorio

2 - Use ```npm i``` para instalar las dependencias

3 - Renombrar el archivo ```.env template``` por ```.env``` y agregar las variables de entorno

3 - Use ```npm run dev``` para ejecutar la aplicación en modo desarrollo

## Build

Use ```npm run build``` para generar el build de la aplicación con el empaquetador de vite

## Directory

```js
src/
// componentes de la aplicación
|--components/
   |--Card.tsx
   |--...
// Custom hooks para ejecutar las funcionalidades del store y ovbtener los datos
|--hooks/
    |--useCharacterStore.ts
    |--...
// Interfaces de información de caracteres
|--interfaces/
    |--characterInterface.ts
    |--...
// Configuración de Redux
|--store
    |--store.ts
```