
const userGet = (req, res) => {
    // Con el .status() cambio el estado de la peticion
    // res.status(403).json({

    // Asi accedo a los parametros que vienen en la url de un GET
    // const params = req.query;
    const {nombre = "NN", edad} = req.query;

    res.json({
        ok: true,
        msg: 'get API desde controller',
        nombre,
        edad
    });
};

const userPost = (req, res) => {
    // De esta manera accedo a la informacion del body que me llega en la peticion
    // const body = req.body;
    const { nombre, edad } = req.body;
 
    res.json({
        ok: true,
        msg: 'post API desde controller',
        nombre,
        edad
    });
};

const userPut = (req, res) => {
    // Asi accedo a los parametros que vienen en la url
    const id = req.params.id;
 
    res.json({
        ok: true,
        msg: 'put API desde controller',
        id
    });
};

const userPatch = (req, res) => {
    res.json({
        ok: true,
        msg: 'patch API desde controller'
    });
}

const userDelete = (req, res) => {
    res.json({
        ok: true,
        msg: 'delete API desde controller'
    });
};

module.exports = { userGet, userPut, userPost, userPatch, userDelete };