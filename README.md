# 🧪 Plan de Ejecución de Pruebas Automatizadas con Jest

**Proyecto:** Pruebas Automatizadas con Jest en JavaScript  
**Instructor:** César Marino Cuéllar Chacón  
**Institución:** SENA — Centro de Teleinformática y Producción Industrial, Regional Cauca  
**Fecha de entrega:** 01/06/2026  

---

## 📋 Descripción General

Este repositorio contiene los ejercicios de pruebas automatizadas desarrollados con el framework **Jest** en JavaScript, como evidencia de la actividad de formación en Pruebas de Software del SENA.

Se implementaron pruebas para **4 módulos**:

| # | Módulo | Tipo de Prueba | Archivo |
|---|--------|---------------|---------|
| 1 | Conversor de Temperatura | Unitaria | `ejercicio1-conversor/conversor.test.js` |
| 2 | Validación de Contraseña | Unitaria | `ejercicio2-password/password.test.js` |
| 3 | Gestor de Usuarios | Unitaria | `ejercicio3-usuarios/usuarios.test.js` |
| 4 | API REST CRUD Productos | Integración (Supertest) | `ejercicio4-api/api.test.js` |

---

## ⚙️ Configuración del Entorno

### Requisitos previos

- Node.js v18+
- npm
- Cuenta en MongoDB Atlas (para el Ejercicio 4)

### Instalación de dependencias

```bash
npm install
```

### Dependencias utilizadas

```json
{
  "devDependencies": {
    "jest": "^29.0.0",
    "@babel/core": "^7.0.0",
    "@babel/preset-env": "^7.0.0",
    "babel-jest": "^29.0.0",
    "supertest": "^6.0.0"
  }
}
```

### Configuración Jest (`jest.config.cjs`)

```js
module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
```

### Configuración Babel (`babel.config.cjs`)

```js
module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
};
```

---

## 🚀 Cómo ejecutar las pruebas

### Ejecutar todos los tests

```bash
npx jest
```

### Ejecutar un ejercicio específico

```bash
npx jest conversor.test.js
npx jest password.test.js
npx jest usuarios.test.js
npx jest api.test.js
```

### Ejecutar con reporte de cobertura

```bash
npx jest --coverage
```

---

## ✅ Ejercicio 1 — Conversor de Temperatura

### Código fuente: `ejercicio1-conversor/conversor.js`

```js
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

module.exports = { celsiusAFahrenheit, fahrenheitACelsius };
```

### Pruebas: `ejercicio1-conversor/conversor.test.js`

```js
const { celsiusAFahrenheit, fahrenheitACelsius } = require('./conversor');

test('Convierte Celsius a Fahrenheit', () => {
    expect(celsiusAFahrenheit(0)).toBe(32);
});

test('Convierte Fahrenheit a Celsius', () => {
    expect(fahrenheitACelsius(32)).toBe(0);
});
```

### Casos de prueba

| # | Test | Entrada | Esperado | Resultado |
|---|------|---------|----------|-----------|
| 1 | Convierte Celsius a Fahrenheit | `celsiusAFahrenheit(0)` | `32` | ✅ PASSED |
| 2 | Convierte Fahrenheit a Celsius | `fahrenheitACelsius(32)` | `0` | ✅ PASSED |


## ✅ Ejercicio 2 — Validación de Contraseña

### Código fuente: `ejercicio2-password/password.js`

```js
function validarPassword(password) {
    const longitudMinima = password.length >= 8;
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);

    return { longitudMinima, tieneMayuscula, tieneNumero };
}

module.exports = validarPassword;
```

### Pruebas: `ejercicio2-password/password.test.js`

```js
const validarPassword = require('./password');

test('Valida longitud mínima', () => {
    expect(validarPassword('Abc12345').longitudMinima).toBe(true);
});

test('Valida mayúscula', () => {
    expect(validarPassword('Abc12345').tieneMayuscula).toBe(true);
});

test('Valida número', () => {
    expect(validarPassword('Abc12345').tieneNumero).toBe(true);
});

test('Password inválida', () => {
    expect(validarPassword('abc').longitudMinima).toBe(false);
});
```

### Casos de prueba

| # | Test | Entrada | Esperado | Resultado |
|---|------|---------|----------|-----------|
| 1 | Valida longitud mínima | `validarPassword('Abc12345').longitudMinima` | `true` | ✅ PASSED |
| 2 | Valida mayúscula | `validarPassword('Abc12345').tieneMayuscula` | `true` | ✅ PASSED |
| 3 | Valida número | `validarPassword('Abc12345').tieneNumero` | `true` | ✅ PASSED |
| 4 | Password inválida | `validarPassword('abc').longitudMinima` | `false` | ✅ PASSED |


## ✅ Ejercicio 3 — Gestor de Usuarios

### Código fuente: `ejercicio3-usuarios/usuarios.js`

```js
let usuarios = [];

function agregarUsuario(nombre) {
    usuarios.push(nombre);
    return usuarios;
}

function buscarUsuario(nombre) {
    return usuarios.includes(nombre);
}

function eliminarUsuario(nombre) {
    usuarios = usuarios.filter(user => user !== nombre);
    return usuarios;
}

module.exports = { agregarUsuario, buscarUsuario, eliminarUsuario };
```

### Pruebas: `ejercicio3-usuarios/usuarios.test.js`

```js
const { agregarUsuario, buscarUsuario, eliminarUsuario } = require('./usuarios');

test('Agregar usuario', () => {
    expect(agregarUsuario('Juan')).toContain('Juan');
});

test('Buscar usuario', () => {
    expect(buscarUsuario('Juan')).toBe(true);
});

test('Eliminar usuario', () => {
    eliminarUsuario('Juan');
    expect(buscarUsuario('Juan')).toBe(false);
});
```

### Casos de prueba

| # | Test | Acción | Esperado | Resultado |
|---|------|--------|----------|-----------|
| 1 | Agregar usuario | `agregarUsuario('Juan')` | Array contiene `'Juan'` | ✅ PASSED |
| 2 | Buscar usuario | `buscarUsuario('Juan')` | `true` | ✅ PASSED |
| 3 | Eliminar usuario | `eliminarUsuario('Juan')` → `buscarUsuario('Juan')` | `false` | ✅ PASSED |



## ✅ Ejercicio 4 — Pruebas de API REST (CRUD Productos con MongoDB)

### Descripción

Pruebas de integración a la API REST que gestiona la colección `productos` en MongoDB Atlas. Se usa **Supertest** para enviar solicitudes HTTP y verificar las respuestas.

### Instalación de Supertest

```bash
npm install --save-dev supertest
```

### Archivo de prueba: `ejercicio4-api/api.test.js`

```js
import request from 'supertest';
import app from '../app.js';

let productoId;

describe('API Productos - CRUD', () => {

    test('GET /api/productos - Obtener todos los productos', async () => {
        const res = await request(app).get('/api/productos');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    test('POST /api/productos - Crear nuevo producto', async () => {
        const res = await request(app)
            .post('/api/productos')
            .send({ nombre: 'Producto Test', precio: 9999, stock: 10 });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('_id');
        productoId = res.body._id;
    });

    test('GET /api/productos/:id - Obtener producto por ID', async () => {
        const res = await request(app).get(`/api/productos/${productoId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('nombre', 'Producto Test');
    });

    test('PUT /api/productos/:id - Actualizar producto', async () => {
        const res = await request(app)
            .put(`/api/productos/${productoId}`)
            .send({ nombre: 'Producto Actualizado', precio: 5000, stock: 5 });
        expect(res.statusCode).toBe(200);
    });

    test('DELETE /api/productos/:id - Eliminar producto', async () => {
        const res = await request(app).delete(`/api/productos/${productoId}`);
        expect(res.statusCode).toBe(200);
    });

});
```

### Casos de prueba

| # | Ruta | Método | Descripción | Estado esperado | Resultado |
|---|------|--------|-------------|-----------------|-----------|
| 1 | `/api/productos` | GET | Obtener todos los productos | `200 OK` | ✅ PASSED |
| 2 | `/api/productos` | POST | Crear nuevo producto | `201 Created` | ✅ PASSED |
| 3 | `/api/productos/:id` | GET | Obtener producto por ID | `200 OK` | ✅ PASSED |
| 4 | `/api/productos/:id` | PUT | Actualizar producto | `200 OK` | ✅ PASSED |
| 5 | `/api/productos/:id` | DELETE | Eliminar producto | `200 OK` | ✅ PASSED |


## 📊 Cobertura de Código

Comando para generar el reporte completo de cobertura:

```bash
npx jest --coverage
```


### Métricas esperadas

| Métrica | Descripción |
|---------|-------------|
| **Statements** | % de sentencias ejecutadas |
| **Functions** | % de funciones cubiertas |
| **Branches** | % de estructuras de control (if, switch) |
| **Lines** | % de líneas ejecutadas |

---

## 📁 Estructura del Proyecto

```
PRUEBAS-JEST/
├── ejercicio1-conversor/
│   ├── conversor.js
│   └── conversor.test.js
├── ejercicio2-password/
│   ├── password.js
│   └── password.test.js
├── ejercicio3-usuarios/
│   ├── usuarios.js
│   └── usuarios.test.js
├── ejercicio4-api/
│   └── api.test.js
├── config/
│   └── db.js
├── controllers/
│   └── producto.js
├── models/
│   └── producto.js
├── app.js
├── babel.config.cjs
├── jest.config.cjs
├── package.json
└── EJECUCION_PLAN_PRUEBAS.md
```


## 🔗 Referencias

- [Sitio oficial de Jest](https://jestjs.io/)
- [Documentación Matchers](https://jestjs.io/docs/using-matchers)
- [Documentación expect()](https://jestjs.io/docs/expect)
- [Test unitarios con Jest - Medium](https://medium.com/@diego.coder/test-unitarios-en-javascript-con-jest-4f120f5e7124)
- [Supertest - npm](https://www.npmjs.com/package/supertest)

---

*Actividad: Pruebas Automatizadas con Jest en JavaScript | SENA CTPI Cauca | Mayo 2026*
