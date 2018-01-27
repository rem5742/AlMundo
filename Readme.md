# Prueba técnica para Almundo
Esta es una prueba técnica para la oferta Front-End de la empresa Almundo.

### Prerequisites

Para ejecutar la aplicación se necesita tener una versión mayor a Nodejs 6.0.0

Tener en mongodb con base de datos llamada "almundo" con una colección llamada "hotels".

Importar los datos data.json enviada para el ejercicio ejecutando el siguiente commando en una terminal ubicada en los binarios de la instalación de mongodb
```
mongoimport --db almundo --collection hotels --type json --file <ruta/data.json>--jsonArray
```

Para correr la aplicación se debe instalar Angular 5
```
npm install -g @angular/cli
```

### Instalación

Ejecutar el siguiente en dos diferentes terminales en la carpeta "almundo" y "server"
```
npm install
```

### Para tener en cuenta

- La Base de Datos no tiene usuario ni contraseña
- El puerto configurado para mongodb es el 27017
- El puerto configurado para el servidor del API es el 3000