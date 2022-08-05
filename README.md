# 11-TS-RESTSERVER

241. 
Instalamos typescript npm i -g typescript
Iniciamos proyecto de node npm init -y

Archivo de configuración de typescript tsc --init
    El pone "es6" en vez de "target": "es2016", El último es más nuevo
    Añade  "outDir": "./dist",
    Comprobar que esta en modo estricto "strict": true y "esModuleInterop": true, "sourceMap": true,
    Añadimos "moduleResolution": "node",

En la terminal tsc, para que pase nuestros archivos ts para que los pueda leer node
Y luego ya podemos correrlo con node dist/app.js

Se pueden utilizar paquetes que lo hacen directamente pero no tienen el mismo rendimiento.

Ayudas de configuracion npm i tslint --save-dev

Necesita instalar de forma local tb typescript npm i typescript --save-dev

Archivo de configuración de tslint y apuntamos a node_modules/.bin/tslint
    ./node_modules/.bin/tslint --init 
    En el archivo generado tslint.json añadimos en rules "no-console": false, para que no genere errores por escribir en la consola
    
242. Creamos el servidor de express y sus middlewares

Carpeta models - Clase server.ts
Instalamos express npm i express cors dotenv
Para poder importar express en nuestra clase nos exige que en desarrollo instalemos
    npm i --save-dev @types/express
Importo express en server.ts
Creo .env y lo importo en app.ts

243. Nodemon y tsc --watch

Para correr la aplicación siempre compilo con tsc + nodemon dist/app.js

Para que tsc se esté ejecutando constantemente, abrimos una 2º terminal y escribimos  tsc --watch

244. Routes

routes -> usuario.ts   controllers -> usuario.controller.ts

245247. Xammp, TablePlus para arrancar la BD mySQL

248. Sequalize

Se usa para conectar BD relacionales, las no relacionales lo hacíamos con Mongoose.
