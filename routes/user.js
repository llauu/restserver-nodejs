const { Router } = require('express');
const { userGet, userPut, userPost, userPatch, userDelete } = require('../controllers/user.js');

const router = Router();

// En este caso se llama user.js porque es el que va a manejar las rutas de los usuarios
// El nombre del archivo tiene que indicar que es lo que va a manejar

router.get('/', userGet);

router.post('/', userPost);

// En este caso el :id es un parametro que va a venir en la url, como en php era {id}
router.put('/:id', userPut);

router.patch('/', userPatch);

router.delete('/', userDelete);

module.exports = router;