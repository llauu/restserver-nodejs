/*
El RESTServer, aparte de tambien permitirnos servir contenido estatico como un WebServer, nos va a permitir tambien
regresar informacion mediante comunicacion por json, osea vamos a crear nuestros propios End Points
*/
require('dotenv').config();

const Server = require('./models/server.js');

const server = new Server();

//De esta manera levanto un servidor que ya tengo construido en la clase Server, y hace que el main quede mucho mas limpio
server.listen();