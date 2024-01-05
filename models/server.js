const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();

        // Seteo las rutas de mi app
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());
        // De esta manera cualquier información que venga en el body (por POST, PUT, DELETE, etc) va a ser serializada a formato JSON

        // Directorio publico
        this.app.use(express.static('public'));
        // Esto es lo que se va a servir en el path '/'
        // el use es la palabra clave para decir que esto es un middleware
    }

    routes() {
        // Lo que hago es agregarle a mi app el router que cree en routes/user.js a través de un middleware
        this.app.use(this.usuariosPath, require('../routes/user.js'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${this.port}/`);
        })
    }
}


module.exports = Server;