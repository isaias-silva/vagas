
/**
 * @comentando_as_alterações : id é um atributo de busca mais válido que 'name',
 * criação do objeto acessForUser que irá ser exportado e inserido na rota de get user,
 *  a cada chamada a rota get user bem sucedida será incrementado uma chave valor ao objeto usando 
 * o id como chave e o numero de acessos como valor. */



const data = require("./fakeData");

const accessForUser = {}
const getAccess = function (req, res) {

    const { id } = req.query
    if (id) {

        const access = accessForUser[id] || 0
        const [user] = data.filter(value => value.id == id)
        if (user) {
            res.send(`Usuário ${user.name} foi lido ${access} vezes.`);
        } else {
            res.status(404).send("usuário não encontrado")
        }

    } else {
        res.status(400).send("id inválido")
    }

};
module.exports = {
    getAccess,
    accessForUser
}