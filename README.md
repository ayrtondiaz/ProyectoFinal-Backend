
# Curso Backend - Proyecto Final
## Diaz Ayrton Sergio | Ecommerce Web 

### Consigna:

- En primer lugar la aplicación de servidor debe tener sus capas MVC bien definidas y en archivos separados. Debe existir la capa de ruteo, el controlador, la capa de lógica de negocio con los casos de uso y las validaciones y la capa de persistencia con los DAOs/DTOs o Repositories necesarios para soportar el o los sistemas de persistencia elegidos. En caso de ser más de uno, utilizar una factory para que podamos elegir el sistema de almacenamiento al inicio del servidor.
- El servidor debe disponer de configuraciones mediante variables de entorno, que permitan crear un ambiente para desarrollo y otro para producción, elegibles desde la variable de environment NODE_ ENV al desplegar la aplicación. Como variables de configuración deberían estar el puerto de escucha del servidor, la persistencia elegida, el string de conexión a la base de datos (si hubiera varios sistemas de persistencia en base de datos considerar todos los casos y sus diferencias), API keys y todo lo que sea necesario que esté en un archivo protegido fuera del código del servidor. Pensar en utilizar bases de datos y servidores locales para la configuración de desarrollo.
- Se debe analizar que el hecho de incorporar un caso más de uso en la lógica del servidor, sea un proceso de agregar código y no de modificar el existente.
- Si agregamos un sistema más de persistencia, deberíamos agregar sólo el módulo nuevo y reformar la factory, mientras que resto del proyecto: router, controlador, lógica de negocio, validaciones y otros sistemas de persistencia no deberían sufrir modificaciones para soportar la nueva función.
- El código debe quedar bien tabulado, legible, ordenado y comentado ni por exceso ni por defecto.
- Las funciones o clases que se por sí solas expliquen su misión, no necesitan ser explicadas (salvo que amerite por complejidad).
- Para concluir, subir el desarrollo completo a Heroku o algún PASS de preferencia, seleccionando la configuración a producción de modo de utilizar los parámetros adecuados de funcionamiento y la persistencia en la nube a través de bases de datos como servicio (DBaaS).


**Piezas sugeridas**<br>
_Te recomendamos incluir:_
- Node.js
- MongoDB
- Passport JWT
- Mongoose
- Bcrypt
- Websocket
- Dotenv
- Handlebars, Pug, Ejs
- Nodemailer

*Requisitos base*<br>
Los requisitos base serán parte de los criterios de evaluación para aprobar
el proyecto.
- Inicio: Al momento de requerir la ruta base ‘/’
  - Permitir un menú de ingreso al sistema con email y password así como
    también la posibilidad de registro de un nuevo usuario.
  - El menú de registro consta del nombre completo del cliente, número
    telefónico, email y campo de password duplicado para verificar
    coincidencia.
  - Si un usuario se loguea exitosamente o está en sesión activa, la ruta ‘/’
    hará una re dirección a la ruta del carrito /productos


- Finalizada la orden, enviar un mail a la dirección de mi cuenta con los detalles
de la orden.
- Se dispondrá de un archivo de configuración externo con opciones para
desarrollo y otras para producción, que serán visualizadas a través de una
vista construida con handlebars. Como parámetros de configuración estará el
puerto de escucha del servidor, la url de la base de datos, el mail que recibirá
notificaciones del backend, tiempo de expiración de sesión y los que seaecesario incluir.
- Vamos a contar con un canal de chat general donde el usuario enviará los
mensajes en la ruta /chat . Se utilizará la colección mensajes en MongoDB. La tecnología de comunicación
a utilizar será Websockets. El servidor implementará una vista, utilizando
handlebars, para visualizar todos los mensajes y poder responder
individualmente a ellos, eligiendo el email de respuesta.

## Sugerencias
- /productos es la ruta /main
- Para buscar producto por id es /productos/id/:id
- Para buscar producto por cat es /productos/:categoria
- Para buscar carrito por id es /api/carrito/id/:id

## Como ejecutar el proyecto en tu pc
- Antes que nada debes tener instalado en tu pc node.js, debes tener una cuenta en mognodb atlas, y una cuenta de gmail configurada con contraseñas para aplicacion
para poder testear los emails
- Debes clonar el repositorio
- Abrir una terminal y en ella dirigirte a la carpeta con el nombre del proyecto
- Ejecutar el comando ``` npm install ```
- Deves configurar un archivo ``` .env ``` con los siguientes datos
    ```
        NODE_ENV = 'development/production'
        MAIL = 'xxxx@gmail.com'
        MONGO_URL = 'mongodb+srv://xxx'
        SECRET = 'xxx'
        HOST = xxxx
        PORT = xxxx
        DEBUG = xxxx

    ```

## Proyecto Online
- El proyecto se encuntra funcionando en la siguiente [URL](https://proyectofinal-backend-production-9970.up.railway.app/login)
