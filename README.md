# Laboratorio #4 – Objetos y Arreglos en JavaScript

Este proyecto contiene ejemplos básicos de cómo trabajar con objetos y arreglos en JavaScript. Está diseñado con fines educativos para demostrar cómo almacenar, desestructurar y mostrar datos relacionados con videos de YouTube.

## Contenido

### 1. Objeto `video`

Se define un objeto que representa un video individual, con propiedades como:

- `titulo`
- `canal`
- `visitas`
- `duracion`
- `publicado`

El objeto se desestructura y se muestra su información en consola usando template literals.

### 2. Arreglo de Objetos `videos`

Se define un arreglo con varios objetos, cada uno representando un video con las siguientes propiedades:

- `titulo`
- `canal`
- `visitas`
- `duracion`

Se recorre el arreglo con `forEach` para mostrar cada video formateado en la consola.

## Cómo ejecutar el código

1. Asegúrate de tener Node.js instalado en tu computadora.
2. Guarda el archivo con extensión `.js` (por ejemplo, `lab4.js`).
3. Abre la terminal en la carpeta del archivo.
4. Ejecuta el siguiente comando:

```bash
node lab4.js
```

## Ejemplo de salida

```
Video de YouTube
    Título     : Aprende JavaScript en 10 minutos
    Canal      : Programador X
    Visitas    : 336000
    Duración   : 11:43
    Publicado  : 23 de Julio de 2023

YouTube - Lista de Videos:

Video #1
Título   : Cómo aprender JavaScript
Canal    : INFORMATICONFIG
Visitas  : 1,200,000 vistas
Duración : 12:30
--------------------------
...
```

## Temas aprendidos

- Creación de objetos en JavaScript.
- Desestructuración de objetos.
- Uso de arreglos de objetos.
- Iteración con `forEach()`.
- Uso de template literals para mostrar información.

## Autor

Adrian Caiza.

